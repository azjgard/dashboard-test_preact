import { h, Component } from 'preact';
import style from './style';
import server from './fake-server'

console.log(server);

export default class Resource extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	getResourceTitle = (resource) => {
		return resource
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ resource }, { time, count }) {
		let resourceTitle = this.getResourceTitle(resource);

		return (
			<div class={style.profile}>
				<h1>{ resourceTitle }</h1>
				{ server.render(resource, style.resources) }
			</div>
		);
	}
}
