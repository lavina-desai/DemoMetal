'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';
import SearchBarComponent from './components/search-bar';
import Forgetpassword from './components/Forget-password';

class Demo extends JSXComponent {
	render() {
		return <div class="demo">
			<Forgetpassword></Forgetpassword>
			</div>;
	}
	

}

export { Demo };
export default Demo;
