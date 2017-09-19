import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Sidebar from './sidebar';
import Home from '../routes/home';
import Resource from '../routes/resource';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Sidebar />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Resource path="/resources/:resource" />
				</Router>
			</div>
		);
	}
}