'use strict';

import JSXComponent from 'metal-jsx';

import './demo.scss';
import SearchBarComponent from './components/search-bar';

import { Signup } from './components/Signup';

import Signin from './components/Signin';
import { Resetpassword } from './components/Resetpassword';
import Forgetpassword from './components/Forget-password';
import Table from './components/Table';
import Pagination from './components/Pagination';


class Demo extends JSXComponent {
	render() {
		return <div class="demo">

	
			<Pagination></Pagination>
			<br /><br /><br />
			<Signup></Signup>	

			Hello World
			<SearchBarComponent
				events={{
					onSearch: this.handleOnSearch.bind(this)
				}}></SearchBarComponent>

			<br /><br />
			<Signin></Signin>
			<br /><br /><br />
			<Resetpassword></Resetpassword>
			<br /><br /><br />
			<Forgetpassword></Forgetpassword>
			<br /><br /><br />
			<Table></Table>
		
		</div>;
		

		

	}
	

	handleOnSearch(event) {
		console.log(event.text);
	}


}

export { Demo };
export default Demo;
