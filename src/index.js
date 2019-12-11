import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home-page/home-page';
import Header from './common/header-page';
import Intro from './intro-page/intro-page';
import Create from './create-activity/create-activity-page';
import AddActivity from './add-activity-form/add-activity-form';
import myList from './myList-page/my-list-page';
import actvityView from './activity-view/activity-view';



const routing = (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/createActivity" component={Create} />
        <Route path="/intro" component={Intro} />
        <Route path="/addActvity" component={AddActivity} />
        <Route path="/myList" component={myList} />
        <Route path="/activityView" component={actvityView}/>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
