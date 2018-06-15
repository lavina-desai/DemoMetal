'use strict';

import JSXComponent from 'metal-jsx';

class Signin extends JSXComponent {
    msg() {
		alert("Successfully Logged In...");
	}
    render() {
        return (
            <form>
                <center>
                    <h3>Sign In</h3>
                <label for="email">
                    Email:
				<input name="email" type="email"/>
                </label>
                <br /><br />

                <label for="password">
                    Password:
				<input  name="password" type="password"/>
                </label>
                <br /><br/>
                <button onClick={this.msg.bind(this)} type="submit" class="btn btn-primary">Submit</button>
                </center>   <hr/>
            </form>
        );
    }
};

export { Signin }
export default Signin;