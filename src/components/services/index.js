import { h } from "preact";
import { route } from 'preact-router';
import { Row, Col, Card, Button, Container, Media } from 'react-bootstrap';
import style from "./style.scss";
import { useMediaQuery } from "../../utilities/helpers.js";


const Services = ({ CTA }) => {

	return (
		<Container fluid className={style.services} id="services_section">
			<Container style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
				<Row className="text-center">
					<Col><h2 className="font-weight-semibold mb-0 text-white text-sm">SERVICES</h2></Col>
				</Row>
				<Row className="mt-3 display-flex">
					<Col lg={6} md={12}>
						<Card className={style.card_wrapper} >
							<Card.Img variant="top" src="/assets/images/prepurch.jpeg" />
							<Card.Body className={style.card_body}>
								<div class="flex-grow-1 ms-3">
									<h5>Pre-Purchase Marine Survey</h5>
									<p> A pre-purchase vessel survey is one of the most thorough surveys
									you can have. It provides a prospective boat buyer with detailed documentation to confirm or
									deny that a vessel is free of operational hazard, sea worthy, appropriately valued, and free of
									defect or damage.
								</p>
								</div>
							</Card.Body>
						</Card>
						<Card className={style.card_wrapper} >
							<Card.Img variant="top" src="/assets/images/appraisals.jpeg" />
							<Card.Body className={style.card_body}>
								<div class="flex-grow-1 ms-3">
									<h5>Insurance Marine Survey</h5>
									<p>A Condition & Value Survey (insurance survey) is what  your insurance
									carrier or lender may require you to obtain in order for them to bind or renew coverage, or even to
									close a loan on your vessel.
								</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={6} md={12}>
						<Card className={style.card_wrapper} >
							<Card.Img variant="top" src="/assets/images/inspections.jpeg" />
							<Card.Body className={style.card_body}>
								<div class="flex-grow-1 ms-3">
									<h5>Boat Appraisal and Inspections</h5>
									<p>If you are selling, donating, settling a divorce or estate; or other
									types of legal matters you may need an Appraisal Survey. This type of inspection should be from a
									certified marine surveyor and determines the fair market value of the vessel. The vessel is inspected
								to ascertain its correct market value along with market research for comparables.</p>
								</div>
							</Card.Body>
						</Card>
						<Card className={style.card_wrapper} >
							<Card.Img variant="top" src="/assets/images/seatrial.jpeg" />
							<Card.Body className={style.card_body}>
								<div class="flex-grow-1 ms-3">
									<h5>Damage Inspections</h5>
									<p>
										Damage inspections determine the scope of damage and aid in the formulation of a repair plan. Progressive inspections of the repair work are often requested, along with a final inspection of completed repair work.
								</p>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className="text-center">
					<Col className="py-3">
						<Button className={style.btn_green} onClick={() => route('services')}>VIEW SERVICES</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Services;


