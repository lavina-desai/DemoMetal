import JSXComponent from 'metal-jsx';

class Table extends JSXComponent {
    render(){
        return(
            <div class="container">
  <h2>Table</h2>
  <p>Details about the User</p>            
  <table class="table" border="1" >
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Username</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>john@example.com</td>
        <td>John_234</td>
        <td>1234</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>mary@example.com</td>
        <td>Mary_234</td>
        <td>2345</td>
      </tr>
      <tr>
        <td>July</td>
        <td>july@example.com</td>
        <td>July_234</td>
        <td>12334</td>
      </tr>
    </tbody>
  </table>   <hr/>
</div>

        );
    }





}

export default Table;