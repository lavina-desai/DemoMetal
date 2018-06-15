'use strict';

import JSXComponent from 'metal-jsx';

class Resetpassword extends JSXComponent {
    msg() {
		alert("Successfully Logged In");
	}
    render() {
        return (
            <form>
                <center>
                    <h3>Reset Password</h3>
                <label for="">
                   New Password:
				<input name="email" type="password"/>
                </label>
                <br /><br />

                <label for="password">
                   Confirm Password:
				<input  name="password" type="password"/>
                </label>
                <br /><br/>
                <button onClick={this.msg.bind(this)} type="submit" class="btn btn-primary">Submit</button>
                </center>
            </form>
        );
    }
};

export { Resetpassword }
export default Resetpassword;