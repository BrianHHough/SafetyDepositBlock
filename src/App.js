import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
// import MyFiles_Test from './pages/myFiles-Test'
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import Form__JoinWaitlist from './pages/Form__JoinWaitlist';
import Form__Support from './pages/Form__Support';
import ProfilePage from './pages/profile';
import Upload from './pages/upload';
// import ClipLoader from "react-spinners/ClipLoader";
import Loading from "./components/Loading/Loading";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })

  
  useEffect(() => { 
    setIsLoading(true)
    // fetch api and when get response stop loading
    setTimeout(() => {
      setIsLoading(false)
    }, 8000)
  }, []);

  return (
    <React.Fragment>
     

    <Router>
      <Switch>
      {isLoading===true?
        <Loading/>
        :
        <>
        
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/test" component={MyFiles_Test} /> */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signupform" component={Form__JoinWaitlist} />
        <Route path="/Upload" component={Upload} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/support" component={Form__Support} />

        </>
        }
      </Switch>
    </Router>
     
    </React.Fragment>
  );
}

export default App;
