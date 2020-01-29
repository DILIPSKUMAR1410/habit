import React from 'react';
import Header from '../common/header-page';
import Lottie from 'react-lottie';
import { withRouter } from "react-router-dom";
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { UserSession, AppConfig } from "blockstack";
import animationData from '../assets/biking.json';
import {Modal, Button, Icon} from 'react-materialize'



const appConfig = new AppConfig();
const options = { encrypt: false };
const optionsGetFile = {
    decrypt: false
}
const userSession = new UserSession({ appConfig: appConfig });



class myList extends React.Component {

    constructor(props) {
        super(props);
        
               
      
        this.state = {
            habits: undefined,
            loading:true
        };
        // let habits = localStorage.getItem('habits');
        // habits = JSON.parse(habits);
        // habits.map(habit => {
        //     if (habit.color === '#cc0000') {
        //         habit.color = 'black';
        //     }
        //     return habit;
        // })


        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.deleteHabit = this.deleteHabit.bind(this);
        this.updateHabit = this.updateHabit.bind(this);

    }

    handleChange(event) {


        this.setState({ updateHrs: event.target.value });
    }

    handleRedirect(event) {
        sessionStorage.setItem('selectedHabit', event.target.id);
        this.props.history.push("/activityView");

    }

    currentDate() {
        let dateObj = new Date();
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        var d = new Date();
        let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var monthName = month[dateObj.getMonth()];
        let newDate = day + "," + monthName + "," + year;
        return newDate;
    }
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
  userSession.getFile('habits.json', optionsGetFile).then((res) => {
      console.log(res);
    
    let habits = JSON.parse(res)
    habits.map(habit => {
        if (habit.color === '#cc0000') {
            habit.color = 'black';
        }
        return habit;
    })
   
    this.setState({habits: habits, loading:false,})
           
        })
        
       
       
    }

    updateModal(event) {
        this.setState({ deleteUpdateItem: event.target.id });
    }

    deleteHabit() {
        let deleteUpdateItem = this.state.deleteUpdateItem;
        let habits = this.state.habits;
        let filterHabit = habits.filter(habit => {
            if (habit.habitName !== deleteUpdateItem)
                return true
        })
        this.setState({
            habits: filterHabit
        });
        filterHabit = JSON.stringify(filterHabit);

        userSession
            .putFile("habits.json", JSON.stringify(habits), options)
            .then(() => {
                localStorage.setItem('habits', filterHabit);
            });

    }

    updateHabit() {

        let deleteUpdateItem = this.state.deleteUpdateItem;
        let habits = localStorage.getItem('habits');
        habits = JSON.parse(habits);
        let updateHabit = habits.map(habit => {
            if (habit.habitName === deleteUpdateItem) {
                let habitUpdateHrs = parseInt(habit.updateHrs);
                let updateHrs = parseInt(this.state.updateHrs);
                habit.color = '#cc0000';
                habit.updateHrs = habitUpdateHrs + updateHrs;

            }
            return habit;
        })
        this.setState({
            habits: updateHabit
        });
        updateHabit = JSON.stringify(updateHabit);

        userSession
            .putFile("habits.json", JSON.stringify(habits), options)
            .then(() => {
                localStorage.setItem('habits', updateHabit);
            });

        localStorage.setItem('habits', updateHabit);


    }
    myList()  {
        const updateDeleteCss = {
            paddingLeft: "0.5rem",
        }
        const buttonCss = {
            fontFamily: " 'Varela Round', sans-serif",
            color: '#cc0000',
            backgroundColor: "transparant",

        }

        const spacing = {
            paddingLeft: "5rem"
        }
        const myListCss = {
            backgroundColor: "transparent"
        }
        let list = [];


        this.state.habits.forEach(habit => {
            list.push(<li style={myListCss}     Name="collection-item">   <div className="row">
                <span className="col s3" onClick={this.handleRedirect} id={habit.habitName}>  {habit.habitName}</span> <span style={spacing}><Modal
  actions={[
    <a href="#!" class="modal-close waves-effect waves-light  btn-flat" onClick={this.updateHabit}>Update</a>

  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Update"
  id="modal-0"
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={ <span  style={updateDeleteCss}><a class="center modal-trigger" style={{color:habit.color}}  id={habit.habitName} onClick={this.updateModal} href="#update"><i id={habit.habitName} class="material-icons">
  cached
  </i></a></span>}
>
<input placeholder="In hours" id="task_time" type="number" className="validate" onChange={this.handleChange} />
                        <label for="task_time">Enter the number of hours you have performed the task today?</label>

</Modal>
<Modal
  actions={[
    <a href="#!" onClick={this.deleteHabit} className="modal-close waves-effect waves-light  btn-flat">Delete</a>
    

  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Update"
  id="modal-0"
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={ <span style={updateDeleteCss}><a id={habit.habitName} style={buttonCss} className="center modal-trigger " onClick={this.updateModal} href="#delete"><i id={habit.habitName} className="material-icons">
  delete
</i></a></span>}
>
Are you sure, you want to delete learn-{this.state.deleteUpdateItem}

</Modal>
                    {/* <span style={updateDeleteCss}><a className="center modal-trigger" style={{ color: habit.color }} id={habit.habitName} onClick={this.updateModal} href="#update"><i id={habit.habitName} className="material-icons">
                        cached
</i></a></span><span style={updateDeleteCss}><a id={habit.habitName} style={buttonCss} className="center modal-trigger " onClick={this.updateModal} href="#delete"><i id={habit.habitName} className="material-icons">
                        delete
</i></a></span> */}

                </span> </div> </li>)

        })

        return list;

    }
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
      
        const headerFont = {
            fontFamily: " 'Varela Round', sans-serif",
            color: '#cc0000',
            fontSize: '5rem'

        }
        const iconsCss = {
            width: '20%',
        }

        const textCss = {
            fontSize: "1rem",
        }
        const myListCss = {
            fontSize: "2rem"
        }
        const paddingTop={
            paddingTop:"10%"
        }
        return (
           !this.state.loading ? <div>
                <div className="row">
                    <div className="col s3">
                        <Link to="/"> <img style={iconsCss} src={require('../assets/mind.png')}></img></Link>
                    </div>
                    <div className="col s3">
                    </div> <div className="col s3">


                    </div> <div className="col s3">
                        <Link to="/addActvity"><a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a></Link>

                    </div>
                </div>
                <div className="container center" style={textCss}>

                    <div className="row">

                        <div style={headerFont} className="col s12">My List, {this.currentDate()}</div>

                    </div>
                    <div className="row">
                        <ul className="collection">

                            {this.myList()}

                        </ul>
                    </div>
                    <div className="row">
                        <div className="col s12" >Click on the update button to enter activity performed</div>
                    </div>
                </div>
                
                <div id="update" class="modal">
                    <div className="modal-content">


                        <input placeholder="In hours" id="task_time" type="number" className="validate" onChange={this.handleChange} />
                        <label for="task_time">Enter the number of hours you have performed the task today?</label>

                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-light  btn-flat" onClick={this.updateHabit}>Update</a>
                    </div>
                </div>

                <div id="delete" class="modal">
                    <div class="modal-content">

                        Are you sure, you want to delete learn-{this.state.deleteUpdateItem}
                    </div>
                    <div class="modal-footer">
                        <a href="#!" onClick={this.deleteHabit} className="modal-close waves-effect waves-light  btn-flat">Delete</a>
                    </div>
                </div>
            </div>:<div style={paddingTop}> <Lottie options={defaultOptions}
        height={400}
        width={400}
      /></div>


        );
    }
}

export default myList;
