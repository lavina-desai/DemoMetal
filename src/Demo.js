'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';

class Demo extends JSXComponent {
	render() {
		return <div class="demo">Hello World</div>;
	}
}

export { Demo };
export default Demo;
