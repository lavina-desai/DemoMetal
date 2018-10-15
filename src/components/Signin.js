'use strict';

import JSXComponent from 'metal-jsx';
import core from 'metal-jsx';

class Signin extends JSXComponent {
   
    render() {

        const emailLink = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
        return (
            <form>
                <center>
                    <h3>Sign In</h3>
                <label for="email">
                    Email:
				<input name="email" type="email"/>
                {this.state.email}
                </label>
                <br /><br />

                <label for="password">
                    Password:
				<input  name="password" type="password"/>
                {this.props.password}
                </label>
                <br /><br/>
                <button  type="submit" class="btn btn-primary">Submit</button>
                </center>   <hr/>
            </form>
        );
    }
};

Signin.State = {
    email: {
        validator: core.emailLink,
        value:''     
    }
}

Signin.PROPS = {
    password: {
        validator: core.isString,
        value: ''
    }
}

export { Signin }
export default Signin;