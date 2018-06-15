import JSXComponent from 'metal-jsx';
import Signup from './Signup';

class Pagination extends JSXComponent {
    render(){
        return(
            <div class="container">
 <center> <h2>Pagination</h2>
  <p>The .pagination class provides pagination links:</p>                  
  <ul class="pagination">
    <li><a href="Signup.js">Signup</a></li>
    <li><a href="Signin.js">Signin</a></li>
    <li><a href="Forget-password.js">Forget Password</a></li>
    <li><a href="Resetpassword.js">Reset Password</a></li>
    <li><a href="Table.js">Table-Example</a></li>
  </ul>
  <hr/>
  </center>
</div>

        );
    }
}

export default Pagination;