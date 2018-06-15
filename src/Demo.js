'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';
import SearchBarComponent from './components/search-bar';
import Signin from './components/Signin';
import { Resetpassword } from './components/Resetpassword';

class Demo extends JSXComponent {
	render() {
		return <div class="demo">
			Hello World
			<SearchBarComponent
				events={{
					onSearch: this.handleOnSearch.bind(this)
				}}></SearchBarComponent>

			<br /><br />
			<Signin></Signin>
			<br /><br /><br />
			<Resetpassword></Resetpassword>

		</div>;
	}

	handleOnSearch(event) {
		console.log(event.text);
	}

}

export { Demo };
export default Demo;
