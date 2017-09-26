import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Components
import Sidebar from './Sidebar';
import NavElement from './Sidebar/NavElement'

// Routes
import HomeRoute from '../routes/home';
import ResourceRoute from '../routes/resource';
import ResourceInstanceRoute from '../routes/resourceInstance';

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

				<Sidebar>
					<NavElement href="/" icon="home">Home</NavElement>
					<NavElement href="/resources/virtual-machines" icon="server">Virtual Machines</NavElement>
					<NavElement href="/resources/storage-accounts" icon="bullseye">Storage Accounts</NavElement>
				</Sidebar>

				<Router onChange={this.handleRoute}>
					<HomeRoute path="/" />
					<ResourceRoute path="/resources/:resource" />
					<ResourceInstanceRoute path="/resources/:resource/:resource_id" />
				</Router>

			</div>
		);
	}
}
