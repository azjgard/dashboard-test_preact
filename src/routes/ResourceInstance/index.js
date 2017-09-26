import { h, Component } from 'preact';

import style from './style';
import server from '../../fake-server';


export default class ResourceInstanceView extends Component {
	render({ resource, resource_id }) {
		const instance = server
											.resourceData[resource]
											.instances[resource_id];

		let info = [];

		for (let key in instance.info) {
			info.push(
				<div>
					<p>
						<strong>{ key }: </strong>
						<span>{ instance.info[key] }</span>
					</p>
				</div>
			)
		}

		return (
			<div>
				<a class={style.linkBack} href={`/resources/${resource}`}>
					Return to <span>{ resource }</span>
				</a>
				<h1>{ instance.name }</h1>
				<p>{ info }</p>
			</div>
		);
	}
}
