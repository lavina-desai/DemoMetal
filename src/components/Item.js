'use strict';

import JSXComponent from 'metal-jsx';

class Item extends JSXComponent {
    render() {
        const elementClasses = `todo-items${this.props.todo.done ? 'todo-item-done' : ''}`

        return (
            <li class={elementClasses} data-onclick={this.handleClick.bind(this)}>
                {this.props.todo.title}
            </li>
        )
    }

    handleClick(event){
        alert(this.props.todo.title);
      
    }
}

Item.PROPS = {
    index: {
        value: null
    },

    todo: {
        value: null
    }
}

export { Item }
export default Item;