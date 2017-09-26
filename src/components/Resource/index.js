import { h, Component } from 'preact';
import style from './style';

import { Router } from 'preact-router';
import { Link   } from 'preact-router/match';

export default class Resource extends Component {

	render(props, state) {
		let data      = props.data;
		let listItems = [];

    // build each info item in the resource
		for (let key in data.info) {
      listItems.push(
        <li><b>{ key }</b>: { data.info[key] }</li>
      );
    }

		return (
      <div class={style.resource}>
        <h2>{ data.name }</h2>
          <ul>
            { listItems }
          </ul>
          <a class={style.manage} href={`/resources/${props.resource}/${data.id}`}> Manage </a>
      </div>
		);
	}
}