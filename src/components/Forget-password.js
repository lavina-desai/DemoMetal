import JSXComponent from 'metal-jsx';

class Forgetpassword extends JSXComponent {

    submitMsg(){
        alert("Link has sent to Mail");
    }

    render() {
        return (
            <form>
                <center>
        <h3>Forget Password..??</h3><br />
                    <label for="email"> Enter Email: <input type="text" placeholder="EmailID" name="email" /> </label><br /><br />
                    <label for="username"> Enter Username: <input type="text" placeholder="Username"  name="username" /> </label><br /><br />
                    <button type="submit" id="space" class="btn btn-primary" onClick={this.submitMsg.bind(this)}>Submit</button>
                    <button type="submit" class="btn btn-primary">SignIn</button>
                </center>   <hr/>

            </form>
        );
    }
}

export default Forgetpassword;