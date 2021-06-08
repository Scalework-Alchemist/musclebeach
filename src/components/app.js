import { h } from 'preact';
import { Router } from 'preact-router';
import '../style';
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Services from '../routes/services';

const App = () => (
	<div id="app" >
		<Header />
		<Router className="container container-fluid">
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Services path="/services" />
		</Router>
		<Footer />
	</div>
)

export default App;
