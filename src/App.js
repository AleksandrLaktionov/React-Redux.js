import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Redirect, Route, withRouter, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";

import { Provider } from 'react-redux';
import { withSuspense } from '../src/hoc/withSuspense';

const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
       componentDidMount() {
              this.props.initializeApp();
       }
       render() {

              if (!this.props.initialized) {
                     return <Preloader />
              }
              return (
                     <div className='app-wrapper'>
                            <HeaderContainer />
                            <Navbar />
                            <div className="app-wrapper-content">
                                   <Route exact path='/'
                                          render={() => <Redirect to={"/profile"} />} />
                                   <Route path='/profile/:userId?'
                                          render={withSuspense(ProfileContainer)} />
                                   <Route path='/dialogs'
                                          render={withSuspense(DialogsConteiner)} />
                                   <Route path='/news'
                                          render={() => <News />} />
                                   <Route path='/music'
                                          render={() => <Music />} />
                                   <Route path='/settings'
                                          render={() => <Settings />} />
                                   <Route path='/users'
                                          render={withSuspense(UsersContainer)} />
                                   <Route path='/login'
                                          render={() => <LoginPage />} />
                                   {/* <Route path='*'
                                          render={() => <div>404 NOT FOUND</div>}/> */}
                            </div>
                            <Footer />
                     </div>
              )
       }
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
})

let AppContainer = compose(
       withRouter,
       connect(mapStateToProps, { initializeApp }))(App);

let AppWithRouter = (props) => {
       return <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Provider store={store}>
                     <AppContainer />
              </Provider>
       </BrowserRouter>
}

export default AppWithRouter;