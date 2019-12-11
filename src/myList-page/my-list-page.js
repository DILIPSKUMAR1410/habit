import React from 'react';
import Header from '../common/header-page';
import { withRouter } from "react-router-dom";
import M from 'materialize-css';



class myList extends React.Component {
    constructor(props) {
        super(props);
        let habits = localStorage.getItem('habits');
        habits = JSON.parse(habits);
        console.log(habits);
        this.state={
            habits: habits
        };
        console.log(this.state.habits);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.updateModal = this.updateModal.bind(this);
        this.deleteHabit = this.deleteHabit.bind(this);
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
    }

    updateModal(event) {
        this.setState({ deleteUpdateItem:event.target.id});
    }

    deleteHabit() {
        console.log('here');
        let deleteUpdateItem = this.state.deleteUpdateItem;
        let habits = this.state.habits;
        let filterHabit = habits.filter(habit => {
            if (habit.habitName !== deleteUpdateItem)
                return true
        })
        this.setState({
            habits: filterHabit
        });
        filterHabit=JSON.stringify(filterHabit);
        localStorage.setItem('habits',filterHabit);

    }
    myList = () => {
        const updateDeleteCss = {
            float: "right",
            paddingLeft: "0.5rem",
        }

        let list = [];

       
            this.state.habits.forEach(habit => {
                list.push(<li class="collection-item">
                    <span onClick={this.handleRedirect} id={habit.habitName}>  {habit.habitName}</span> <span style={updateDeleteCss}><a id={habit.habitName} class="center waves-effect waves-light btn-small modal-trigger blue darken-3" onClick={this.updateModal} href="#delete">Delete</a></span>
                    <span style={updateDeleteCss}><a class="center waves-effect waves-light btn-small modal-trigger blue darken-3" id={habit.habitName} onClick={this.updateModal} href="#update">Update</a></span>
                </li>)

            })
        
        return list;

    }
    render() {
        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>

                    <div class="row">
                        <div class="col s12">My List, {this.currentDate()}</div>

                    </div>
                    <div class="row">
                        <ul class="collection">

                            {this.myList()}

                        </ul>
                    </div>
                </div>

                <div id="update" class="modal">
                    <div class="modal-content">


                        <input placeholder="In hours" id="task_time" type="number" class="validate" />
                        <label for="task_time">Enter the number of hours you have performed the task today?</label>

                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-light  btn-flat">Update</a>
                    </div>
                </div>

                <div id="delete" class="modal">
                    <div class="modal-content">

                        Are you sure, you want to delete Learn Bowling? You
                    </div>
                    <div class="modal-footer">
                        <a href="#!" onClick={this.deleteHabit} class="modal-close waves-effect waves-light  btn-flat">Delete</a>
                    </div>
                </div>
            </div>



        );
    }
}

export default myList;
