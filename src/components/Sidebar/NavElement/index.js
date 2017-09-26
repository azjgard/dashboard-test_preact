import { h, Component } from 'preact';
import style from './style';

import { Link } from 'preact-router/match';

export default class NavElement extends Component {
	render(props, state) {
		const href   = props.href;
		const icon   = `fa fa-${props.icon}`;

		return (
			<Link class={style.link} activeClassName={style.active} href={href}>
				<i class={icon}></i>
				<span>{props.children}</span>
			</Link>
		);
	}
}