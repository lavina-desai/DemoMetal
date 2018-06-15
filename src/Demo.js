'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';
import SearchBarComponent from './components/search-bar';

class Demo extends JSXComponent {
	render() {
		return <div class="demo">
			Hello World
			<SearchBarComponent
			events={{
				onSearch: this.handleOnSearch.bind(this)
			}}></SearchBarComponent>
			</div>;
	}

	handleOnSearch(event) {
        console.log(event.text);
    }
}

export { Demo };
export default Demo;
