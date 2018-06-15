'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';
import SearchBarComponent from './components/search-bar';
import { Signup } from './components/Signup';

class Demo extends JSXComponent {
	render() {
		return <div class="demo">
			<Signup></Signup>	
			</div>;
	}

	handleOnSearch(event) {
        console.log(event.text);
    }
}

export { Demo };
export default Demo;
