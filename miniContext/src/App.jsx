import "./App.css";

import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>useContext</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
