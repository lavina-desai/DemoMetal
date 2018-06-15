import JSXComponent from 'metal-jsx';

class Forgetpassword extends JSXComponent {

    submitMsg(){
        alert("Link has sent to Mail");
    }

    render() {
        return (
            <form>
                <center>

                    <label for="email"> Enter Email: <input type="text" placeholder="EmailID" name="email" /> </label><br />
                    <label for="username"> Enter Username: <input type="text" placeholder="Username"  name="username" /> </label><br />
                    <button type="submit" id="space" class="btn btn-primary" onClick={this.submitMsg.bind(this)}>Submit</button>
                    <button type="submit" class="btn btn-primary">SignIn</button>
                </center>

            </form>
        );
    }
}

export default Forgetpassword;