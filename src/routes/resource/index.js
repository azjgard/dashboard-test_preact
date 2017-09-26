import { h, Component } from 'preact';

// Components
import Resource from '../../components/Resource'

import server from '../../fake-server'
import style from './style';

/**
 * @param  {} resource = the name of the resource (as passed in the URL)
 * @param  {} resourcesClassName = the class name to give to the resource div
 */
function render(resource, resourcesClassName) {
	try {
		let resourceInstances = server.resourceData[resource].instances;
		let views             = [];
	
		for (let i = 0; i < resourceInstances.length; i++) {
			views.push(
				<Resource data={ resourceInstances[i] } resource={ resource } />
			);
		}
	
		return (
			<div class={resourcesClassName}>
				{ views }
			</div>
		);
	}
	catch (e) {
		return (
			<h3>No data was returned for this resource..</h3>
		);
	}
}

export default class ResourceView extends Component {
	
	/**
	 * @param  {} resource = converts "resource-name" to "Resource Name"
	 */
	getResourceTitle = (resource) => {
		return resource
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	render({ resource }) {
		let resourceTitle = this.getResourceTitle(resource);

		return (
			<div class={style.container}>
				<h1>{ resourceTitle }</h1>
				{ render(resource, style.resources) }
			</div>
		);
	}
}
