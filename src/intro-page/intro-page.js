import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';



class Intro extends React.Component {
    render() {
        const bikingCss = {
            height: "40vh",
            paddingTop: "10px"
        };
        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>
                    <div class="row">
                        <img style={bikingCss} src={require('../assets/biking.gif')}></img>
                    </div>
                    <div class="row">
                        <div class="col s6">1. Treat your mind like a muscle. </div>
                        <div class="col s6">2. The more you exercise your mind the better it responds</div>
                    </div>
                    <div class="row">
                        <div class="col s6"> 3. Focus on the process and not the goal.</div>
                        <div class="col s6"> 4. Keep in mind that it is difficult. </div>
                    </div>
                    <div class="row">
                        <div class="col s6">5. Pat yourself for every step you finish</div>
                        <div class="col s6"> <Link to="/createActivity"> <a class="center waves-effect waves-light btn blue darken-3">Let's Start</a></Link></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
