import { h } from "preact";
import { Link } from "preact-router/match";
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import style from "./style.scss";
import { useMediaQuery } from "../../utilities/helpers.js";


const Hero = ({ CTA }) => {
	const background = useMediaQuery(`(min-width:993px)`)
	const styles = {
		container: backgroundImage => ({
			backgroundImage: background ? style.banner_desktop : style.banner_mobile
		})
	};

	return (
		<div className={styles.container(background).backgroundImage}>
			<Container style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
				<Row class="mx-auto">
					<Col md={12} lg={6} class="align-self-center my-3">
						<Row class="no-gutters justify-content-center text-center mx-auto">
							<div class="col-lg col-md d-none d-lg-block text-center ">
								<div className="text-left">
									<h1 className="text-reel-blue text-capitalize font-weight-bold">
										Welcome to the
										<br />
										Armory
									</h1>
									<p class="text-white mt-2 font-weight-bold font-sm">
										We have wares if you have coin
									</p>
								</div>
							</div>
							<div class="col-sm pt-2 d-lg-none d-sm-block text-center">
								<div class="justify-content-center">
									<h1 className="text-reel-blue text-capitalize font-weight-bold">Welcome to the
										<br />
										Armory</h1>
									<p class="text-white mt-2 font-weight-bold font-sm">
										We have wares if you have coin
									</p>
								</div>
							</div>
						</Row>
					</Col>
					<Col md={3} lg={6}>
						<div class="align-self-center my-3"></div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero;


