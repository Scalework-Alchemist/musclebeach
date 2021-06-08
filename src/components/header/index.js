import { h } from "preact";
import { Link } from "preact-router/match";
import { route } from 'preact-router';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import style from "./style.scss";
import { Link as ScrollLink } from 'react-scroll'


const Header = () => {


	return (
		<Container>
			<Navbar collapseOnSelect expand="lg" className={`${style.navbar_home}`} >
				<Navbar.Brand className={`py-0`} href="#home"><img className={`d-inline-block align-top ${style.navbar_brand_image}`} alt="React Bootstrap logo" src={`/assets/icons/client_logo.png`} onClick={() => route('/')} /></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="text-right">
					<Nav className="justify-content-center" >
						<Nav.Item>
							<Link className="nav-link" activeClassName={style.active} href="/">
								<ScrollLink activeClassName={style.active} to="home_section" spy={true} smooth={true}>HOME</ScrollLink>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className="nav-link" activeClassName={style.active} href="/services">
								<ScrollLink activeClassName={style.active} to="services_section" spy={true} smooth={true}>SERVICES</ScrollLink>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className="nav-link" activeClassName={style.active} href="#accreditations_section">
								<ScrollLink activeClassName={style.active} to="accreditations_section" spy={true} smooth={true}>ACCREDITATIONS</ScrollLink>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className="nav-link" activeClassName={style.active} href="#about_section">
								<ScrollLink activeClassName={style.active} to="about_section" spy={true} smooth={true}>ABOUT</ScrollLink>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<a className="nav-link" href="tel:9547402818">(954) 740-2818</a>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>

	)
};

export default Header;