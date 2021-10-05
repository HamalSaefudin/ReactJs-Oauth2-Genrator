import './App.css';
import { GoogleLogin } from 'react-google-login';


function App() {
  const responseGoogle = (x)=>{
    console.log(x)
  }
  return (
    <div className="App">
      <header className="App-header">
      <GoogleLogin
        clientId="946102866816-gsc8adrd6504km72gcrns4al0o6q0adm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
