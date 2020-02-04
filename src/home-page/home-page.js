import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/biking.json';
import homeanimationData from '../assets/superman.json';
import { UserSession, AppConfig } from "blockstack";

const appConfig = new AppConfig();
const options = { encrypt: false };
const userSession = new UserSession({ appConfig: appConfig });


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
    };
  }

  handleSignin = e => {
    e.preventDefault();
    userSession.redirectToSignIn();
  };

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        this.props.history.push("/createActivity");
      });
    }
  }

  render() {
    const homedefaultOptions = {
      loop: true,
      autoplay: true,
      animationData: homeanimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

let loading=this.state.loading? <React.Fragment><div class="row">
<Lottie options={defaultOptions}
        height={100}
        width={100}
      />
    </div>

    <marquee width="60%" direction="left" height="100px">
      1.Treat your mind like a muscle. &nbsp;2.The more you exercise your mind the better it responds.&nbsp;3. Focus on the process and not the goal.
      &nbsp;4. Keep in mind that it is difficult.&nbsp;5. Pat yourself for every step you finish.
  </marquee> </React.Fragment>:null
    const iconsCss = {
      width: '50%',
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const myListIconCss = {
      width: '20%',
      cursor:'pointer'
  }

    const paddingTop={
      paddingTop:'10%'
    }
    const textCss = {
      fontSize: "2rem",
    }
    const buttonCss = {
      fontFamily: " 'Varela Round', sans-serif",
      color: '#cc0000',
      background: "transparent",
      fontSize: "30px",
      border: "transparent"
    }
    const topIconCss = {
      float: "left",
      width: '5%',
      marginTop: "1%",
      marginLeft: "1%"
    }
    const topRightCss = {
      float: "right",
      width: "18%",
      marginTop: "2%"

    }
     const marginTop={
            marginTop:"2%"
        }
    return (
      <div>
        <div class="row" style={marginTop}>
          <Link to="/"> <img style={topIconCss} src={require('../assets/mind.png')}></img></Link>
         <div style={topRightCss}>
             {userSession.isUserSignedIn() ? ( <Link to="/myList"><img style={myListIconCss} src={require('../assets/man-user.png')}></img></Link>):null}

          {!userSession.isUserSignedIn() ? (
            <button style={buttonCss} onClick={this.handleSignin}>
              Login
            </button>
          ) : (
            <img style={myListIconCss} onClick={this.handleSignOut} src={require('../assets/logout.png')}></img>
          )}
            </div>
        </div>
        <div><Header />
          <div class="container center " style={textCss}>
            <Lottie options={homedefaultOptions}
              height={600} width={600}
            />
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
                <img style={iconsCss} src={require('../assets/hand.png')}></img>
              </div>
              <div class="col s3">
                <img style={iconsCss} src={require('../assets/customer-support.png')}></img>
              </div> <div class="col s3">
                <img style={iconsCss} src={require('../assets/documents-security.png')}></img>
              </div> <div class="col s3">
                <img style={iconsCss} src={require('../assets/blockchain.png')}></img>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                Easy to use
            </div>
              <div class="col s3">
                Customizable
            </div> <div class="col s3">
                Private
            </div> <div class="col s3">
                Decentralized
             </div>
            </div>
            <div class="divider"></div>
            <div style={paddingTop} class="section">
              How it works ? 
    <div class="row">
      <br></br>
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
            <div  class="row">
              <br></br>
              <div class="col s12">
                Copyright zerotolerance 2019
            </div>
            </div>
            {loading}
          </div>

        </div>
      </div>

    );
  }
}

export default Home;
