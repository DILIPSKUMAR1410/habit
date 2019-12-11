import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';



class Home extends React.Component {
 

 
  render() {
    const textCss={
      fontSize:"1rem",
      color:'#1565c0'
  }
    return (
      <div><Header />
        <div class="container " style={textCss}>
          <div class="row" >
            <div class="col s12"><p>Cultivating a habit is one of the most difficult things for humans to do. Mastering one is
      altogether a different ball game. Zero Tolerance helps you cultivate a habit, complete a task and
      master a skill. It may not sound easy, we know it is not and that is why at Zero Tolerance, we
      keep the frills at bay and make sure that you get what you have signed up for.
    </p>
            </div>
          </div>
          <div class="row">
            <div class="col s3">
            <i class="material-icons">build</i>
            </div>
            <div class="col s3">
            <i class="material-icons">build</i>
            </div> <div class="col s3">
            <i class="material-icons">build</i>
            </div> <div class="col s3">
            <i class="material-icons">build</i>
            </div>
          </div>
          <div class="divider"></div>
          <div class="section">
            How it works ?
    <div class="row">
              <div class="col s6">A. Make up your mind</div>
              <div class="col s6">B. Select a habit that you want to cultivate</div>
            </div>
            <div class="row">
              <div class="col s6">C. Fix the parameters</div>
              <div class="col s6">D. Start the process</div>
            </div>
            <div class="row">
              <div class="col s6">E. Update your progress</div>
              <div class="col s6">F. Track your performance</div>
            </div>
            <div class="row">
              <div class="col s6">G. Re-Strategize</div>
              <div class="col s6">H. Repeat steps E, F & G</div>
            </div>

          </div>
          <div className="center">
            <div class="row">
              Login with
    </div>

    <Link to="/intro"> <a class="center waves-effect waves-light btn blue darken-3">Blockstack</a></Link>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
