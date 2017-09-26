import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import NavElement from './NavElement'

export default class Sidebar extends Component {
	render(props) {
		return (
			<aside class={style.sidebar}>
				<div class={style.branding}>
					<img src="/assets/branding.jpg" />
					<img src="/assets/branding-mobile.jpg" class={style.mobile} />
				</div>
				<nav>
					{ props.children }
				</nav>
			</aside>
		);
	}
}
