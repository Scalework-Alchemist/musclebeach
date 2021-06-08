import { h } from "preact";
import { route } from 'preact-router';
import { useContext, useState, useEffect } from 'preact/hooks'
import { Row, Col, Card, Button, Container, Media, Accordion, useAccordionToggle, AccordionContext } from 'react-bootstrap';
import style from "./style.scss";
import { useMediaQuery } from "../../utilities/helpers.js";
import Up from '../../assets/icons/cart-plus-solid.svg'
import Down from '../../assets/icons/cart-arrow-down-solid.svg'

function ContextAwareToggle({ children, eventKey, callback }) {
	const currentEventKey = useContext(AccordionContext);

	const decoratedOnClick = useAccordionToggle(
		eventKey,
		() => callback && callback(eventKey),
	);

	const isCurrentEventKey = currentEventKey === eventKey;

	return (
		<div onClick={decoratedOnClick}>{children}</div>
	);
}

const Image = ({ img, bank }) => {
	const [setImg, hasError, retry, imgRef] = useImageError();

	if (hasError) return <img ref={setImg} src={`https://via.placeholder.com/150`} alt="hello" />

	return (
		<img ref={setImg} src={img} alt="hello" />
	);
}
const useImageError = () => {
	const [el, setEl] = useState(null); // contains image reference
	const [error, setError] = useState(false); // contains error flag

	const _handleError = () => { setError(true); }  // set error
	const retry = () => { setError(false); } // set error false to img can re-render

	useEffect(() => {
		// use of error event of the image tag
		el?.addEventListener('error', _handleError);

		return () => {
			el?.removeEventListener('error', _handleError);
		}
	}, [el]);

	return [
		setEl, // set the image ref
		error, // error flag
		retry, // a func, which can be used to re-render image
		el // img ref(for special case which requires ref)
	];
};
const ShopCard = (Item) => {
	const [count, setCount] = useState(0);
	return (
		<Accordion defaultActiveKey="0">
			<Card className={style.card_wrapper} id="product" key={Item.Product.id}>
				<Image variant="top" img={Item.Product.image_main} bank={Item.Product.images_bank} />
				<div className={style.card_body_wrapper}>
					<Card.Body className={style.card_body}>
						<div class="flex-grow-1 ms-3">
							<ContextAwareToggle eventKey={Item.Product.id} className={style.product_title}>
								<div className="text-center">
									<h2 className={style.product_title}>{Item.Product.title}</h2>
									<p className={style.cursor_pointer}>(View Details)</p>
								</div>
							</ContextAwareToggle>
							<Accordion.Collapse eventKey={Item.Product.id}>
								<p>{Item.Product.description}</p>
							</Accordion.Collapse>
						</div>
					</Card.Body>
					<Card.Footer className="text-muted" className={style.product_cart}>
						<Row>
							<Col className="text-center">
								<h3 className={style.product_title}>${Item.Product.variants.price}</h3>
							</Col>
							<Col className="text-center">
								<Button className={style.btn_product} onClick={() => setCount(count + 1)}> <img src={Up} className={style.cart_icon} alt="add to cart" /></Button>

							</Col>
							{count != 0 ?
								<Col className="text-center">
									<Button className={style.btn_product} onClick={() => setCount(count - 1)}> <img src={Down} className={style.cart_icon} alt="remove from cart" /> {count}</Button>
								</Col>
								: ''}

						</Row>
					</Card.Footer>
				</div>

			</Card>
		</Accordion>
	)
}





function Example() {
	return (
		<Card className={style.card_wrapper} id="product" key={Item.Product.id}>
			<Card.Img variant="top" src={Item.Product.image} />


			<Card.Body className={style.card_body}>
				<div class="flex-grow-1 ms-3">
					<h2 className={style.product_title}>{Item.Product.title}</h2>
					<p>{Item.Product.description}</p>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ShopCard;


