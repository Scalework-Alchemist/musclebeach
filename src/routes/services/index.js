import { h } from 'preact';
import style from './style.scss';
import { Row, Col, Card, Button, Container, Media } from 'react-bootstrap';
const baseImageUrl = "/assets"

// components dependicies
import { useMediaQuery } from "../../utilities/helpers.js";
const OutOfWater = () => {
	const background = useMediaQuery(`(min-width:993px)`)
	const styles = {
		container: backgroundImage => ({
			backgroundImage: background ? style.outOfWater_desktop : style.outOfWater_mobile
		})
	};
	return (
		<div>
			<div>
				<h1>
					Out Of Water Inspection
				</h1>
				<p>
					Out of water inspections include assessment of the bottom paint condition, above and below waterline through hull fittings, propellers, zinc protection, rudders, keels, and cutless bearings. In addition I inspect for laminate condition using several different methods such as acoustical tapping on the hull with a light-weight hammer to moisture meter reads and if necessary I will use a thermal-imaging camera. The tools I use range from basic hand tools and flashlights to higher tech devices.
				</p>
			</div>
			<div className={styles.container(background).backgroundImage}>

			</div>
		</div>
	)
}
const SeaTrials = () => {
	const background = useMediaQuery(`(min-width:993px)`)
	const styles = {
		container: backgroundImage => ({
			backgroundImage: background ? style.seaTrials_desktop : style.seaTrials_mobile
		})
	};
	return (
		<div>
			<div>
				<h1>
					Sea Trials
				</h1>
				<p>
					There are a variety of circumstances under which it’s advantageous to carry out sea trials. Perhaps the most common, and the one with the most to lose if it’s not carried out properly, involves pre-purchase surveys and inspections. In other cases, sea trials should be carried out to diagnose a problem such as an unusual vibration or noise, inability to reach rated maximum rpm (or exceeding it), to search for a leak that occurs while under way, to test a new installation such as a depth finder, sonar, or autopilot, or for engine-related issues such as excessive fuel consumption, smoke, or overheating.  In still other cases, sea trials should be carried out after major engine or running gear repairs and after a repower.
				</p>
			</div>
			<div className={`${style.seaTrials_desktop, styles.container(background).backgroundImage}`}>

			</div>
		</div>
	)
}

const Services = () => (
	<div class={style.basic}>
		<Container>
			<OutOfWater />
			<SeaTrials />
			<div>
				<h1>
					Video Presentation
				</h1>
				<p>
					This examination is offered to save the prospective buyer the time and expense of visiting the vessel personally. A video of the entire boat will be recorded and converted to a DVD or MPEG format and shipped, emailed or posted online as requested. This method can be very useful in determining if further interest in a particular vessel is desired.
				</p>
			</div>
			<div>
				<h1>
					Infrared Thermal Imaging
				</h1>
				<p>
					This tool and service is available when needed and very beneficial when looking for anomalies that may be hidden behind panels or visually obscured by other equipment.
				</p>
			</div>
		</Container>
	</div>
);

export default Services;
