
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Forget from './Components/Forget';
import Ioa from './Components/Ioa'
import Forgetpush from './Components/Forgetpush';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/forget" component={Forget}/>
        <Route path="/forgetpush" component={Forgetpush}/>
        <PrivateRoute path="/profile/:id" component={Profile}/>
        <PrivateRoute path="/" component={Feed}/>
      </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;