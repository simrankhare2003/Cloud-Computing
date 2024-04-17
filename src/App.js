import logo from "./logo.svg";
// import "./App.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
          <h1>hello {user.given_name} {user.family_name}, you have succesfully logged in</h1>
          <button className="btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
          </>
        ) : (
          <button className="btn" onClick={() => loginWithRedirect()}>
            LOGIN
          </button>
        )}
      </header>
    </div>
  );
}

export default App;