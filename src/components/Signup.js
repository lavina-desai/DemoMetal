'use strict';

import JSXComponent from 'metal-jsx';

class Signup extends JSXComponent { 
	msg()
	{
		alert("Login Successfully....");
	}
    render() {
        return (
           
            <form class="sign-up">
    <center><h2>Sign-Up</h2></center>
			<center>
				<label for="name">
					Name  :
					<input
						name="name" placeholder="Enter name" type="text"
					/>
				</label>
				<br/><br/>
				<label for="email">
				Email  :
					<input
						name="email" placeholder="Enter Email" type="email"
					/>
				</label>
				<br/><br/>
				<label for="password">
				Password :
					<input
						name="password" placeholder="Enter Password" type="password"
					/>
				</label>
				<br/><br/>
				<button type="submit" class="btn btn-primary" onClick={this.msg.bind(this)}>Register</button>
				</center>
				<hr/>
            </form>
         
        );
    }
}

export {Signup}
export default Signup;