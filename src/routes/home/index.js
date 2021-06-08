import { h, Fragment } from 'preact';
import style from './style.scss';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import { useState, useEffect } from 'preact/hooks'
import ShopCard from '../../components/shopCard';
import Canvas from '../../components/canvas';
import Hero from '../../components/hero';
const baseImageUrl = "/assets"





function Home() {
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [storeItems, setStoreItems] = useState([]);
	const loadMoreItems = () => {
		setPage(page + 1);
	};
	useEffect(() => {
		fetch(
			`https://api.redcon1.com/applicant/2021/products.php`,
			{
				method: "GET",
				headers: new Headers({
					Accept: "application/vnd.github.cloak-preview"
				})
			}
		)
			.then(res => res.json())
			.then(response => {
				const item = response.map(item => (
					{
						id: item.id,
						description: item.description,
						handle: item.handle,
						id: item.id,
						image_main: item.image,
						images_bank: item.images,
						objective: item.objectives,
						suggested_use: item.suggested_use,
						title: item.title,
						variants: item.variants[0]
					}
				))
				setStoreItems(item);
				console.log(item)
				console.log(response)
				setIsLoading(false);
			})
			.catch(error => console.log(error));
	}, [page]);

	return (
		<Container fluid>
			<Hero id="hero-section"/>
			
			{isLoading && <Canvas />}
			{!isLoading &&
				<Fragment>
					<Row>
						{storeItems.map((item, index) => (
							<Col xs={12} md={6} lg={4}>
								<ShopCard Product={item} />
							</Col>
						))}
					</Row>
					<Row>
						<Col>
							{storeItems.length !== 0 && (
								<button onClick={loadMoreItems}>Load More Items</button>
							)}
						</Col>
					</Row>
				</Fragment>
			}
		</Container>
	);
}


export default Home;
// id
// 4664672616496
// title
// "War Games"
// handle
// "war-games"
// objective
// "UPPORT COGNITIVE FUNCTION, AS WELL AS HELP TO REDU…"
// suggested_use
// "FOR BEST RESULTS, MIX (1) SCOOP OF WAR GAMES WITH …"
// description
// " ENABLES SPLIT SECOND REACTION TIME AND SUPPORTS E…"

// variants
// [{id: 32394390831152, title: "PvPunch", sku: "RC1-WARG-PVP", price: "39.99", weight: 8, weight_unit: "oz"}, {id: 32394390896688, title: "Peach Power Up", sku: "RC1-WARG-PP", price: "39.99", weight: 8, weight_unit: "oz"}, {id: 32394390863920, title: "RGB Fuel", sku: "RC1-WARG-RGB", price: "39.99", weight: 8, weight_unit: "oz"}]
// image
// "https://cdn.shopify.com/s/files/1/1304/0433/produc…"

// images
