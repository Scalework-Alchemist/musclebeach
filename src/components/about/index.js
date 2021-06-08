import { h } from "preact";
import { Link } from "preact-router/match";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import style from "./style.scss";

const About = () => (
	<Container fluid className={style.about_section} id="about_section">
		<Container>
			<Row>
				<Col lg={6} md={6} sm={6}>
					<h1 className="text-white">
						About Jeff Friedman
					</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						For years Jeff has been an avid boater fishing and water sports enthusiast, Jeff moved from the Midwest to persue his dreams in the marine industry.
						Jeffrey Friedman is a recent Graduate of Navtect U.S. mariner surveyor's school as a Master Marine Surveyor with a large craft certification.
						To further his education in the marine industry, he recently completed his ABYC standards certifcation. hee has extensive repair experience in gas and diesel enfines and electrical systems applications. (OTJ) includes shadowing Ross "Butch" Immediato (AMS), shadowing Lewis Broz a 22 year veteran of the marine service repair industry, and John Hamilton (ACMS).
					</p>
				</Col>
				<Col lg={6} md={6} sm={6}>
					<Image fluid src="/assets/images/jeff.png" alt="" />
				</Col>
			</Row>
			<Row className={style.buttonWrapper}>
				<Col>
					<Button className={style.btn_green}>Learn More</Button>
				</Col>
			</Row>
		</Container>
	</Container>
);

export default About;