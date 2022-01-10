import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Views/SignIn';
import { getUser, logout } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {currentUser && (
              <>
                <h1>Signed In</h1>
                {/* <button onClick={logoutUser}>Log Out</button> */}
              </>
            )}
            {!currentUser && <h1>Not Signed In</h1>}
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
