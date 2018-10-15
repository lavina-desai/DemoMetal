'use strict';

import JSXComponent from 'metal-jsx';

class Todo extends JSXComponent{
    render(){
        return(<h3>{this.props.message}</h3>)
    }
}

Todo.PROPS = {
    message:{
        value: 'Goood Morning'
    }
}


export { Todo}
export default Todo;