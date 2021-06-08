import { h } from "preact";
import { Link } from "preact-router/match";
import { Nav, Container, Navbar, Row, Col , Image} from 'react-bootstrap';
import style from "./style.scss";

const Accreditations = () => (
	<Container fluid className={style.accreditations_section} id="accreditations_section">
		<Container className={style.accreditations_body} >
			<Row>
				<Col>
					<h1 className="text-white">
						Accreditations
					</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<Image fluid src="/assets/images/accreds.png" alt="" />
				</Col>
			</Row>
		</Container>
	</Container>
);

export default Accreditations;