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
import { Todo } from './components/Todo';
import {Item} from './components/Item';


class Demo extends JSXComponent {
	render() {
		return <div class="demo">

			 {/* <div class="todo-app">
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <Item
							events={{
								todoClick: this.handleTodoClick.bind(this)
							}}
                                index={index}
                                todo={todo}
                            />
                        );
                    })}
                </ul>
            </div> */}
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

	handleTodoClick(event) {
        this.toggleTodo(event.index);
    }

    toggleTodo(clickedIndex) {
        this.state.todos = this.state.todos.map((todo, index) => {
            if (clickedIndex === index) {
                todo.done = !todo.done;
            }
            return todo;
        });
    }
	
}
Demo.STATE = {
    todos: {
        // Default value
        value: [
            {
                done: false,
                title: 'Hiiiii'
            },
            {
                done: false,
                title: 'Helloooo'
            }
        ]
    }
};

export { Demo };
export default Demo;
