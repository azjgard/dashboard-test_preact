import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Sidebar extends Component {
	render() {
		return (
			<aside class={style.sidebar}>
				<div class={style.branding}>
					<img src="/assets/branding.jpg" />
					<img src="/assets/branding-mobile.jpg" class={style.mobile} />
				</div>
				<nav>
					<Link activeClassName={style.active} href="/">
						<i class="fa fa-home"></i>
						<span>Home</span>
					</Link>
					<Link activeClassName={style.active} href="/resources/virtual-machines">
						<i class="fa fa-server"></i>
						<span>Virtual Machines</span>
					</Link>
					<Link activeClassName={style.active} href="/resources/storage-accounts">
						<i class="fa fa-bullseye"></i>
						<span>Storage Accounts</span>
					</Link>
				</nav>
			</aside>
		);
	}
}
