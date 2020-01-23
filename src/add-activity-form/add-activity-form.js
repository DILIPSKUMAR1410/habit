import React from 'react';
import Header from '../common/header-page';
import M from 'materialize-css';
import { withRouter, Link } from "react-router-dom";
import { UserSession, AppConfig } from "blockstack";

const appConfig = new AppConfig();
const options = { encrypt: false };
const userSession = new UserSession({ appConfig: appConfig });


class AddActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habitName: '',
            question: '',
            noOfHrs: '',
            freequency: '',
            startDate:new Date(),
            endDate:'',
            color:'black',
            updateHrs:0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);

    }

    handleChange(event) {


        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        let habits = localStorage.getItem('habits')
        if (habits) {
            habits = JSON.parse(habits);
            habits.push(this.state);

        }
        else {
            habits = [];
            habits.push(this.state);

        }
        console.log(habits)
        userSession
          .putFile("habits.json", JSON.stringify(habits), options)
          .then(() => {
            localStorage.setItem('habits', JSON.stringify(habits));
            this.props.history.push("/myList");
          });
    }
    render() {
        const textCss = {
            fontSize: "3rem",
        }
        const buttonCss={
            fontFamily:" 'Varela Round', sans-serif",
            color:'#cc0000',
            background:"transparent",
            border:"1px solid black"
          }
        return (
            <div>
                <div class="container center" style={textCss}>
                    <div class="section">
                        New Habit
                    <div class="row">
                            <form onSubmit={this.handleSubmit} class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input required placeholder="Habit name" id="habitName" type="text" value={this.state.habitName} onChange={this.handleChange} class="validate" />
                                        <label for="habitName">Habit Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input required id="question" type="text" value={this.state.question} onChange={this.handleChange} class="validate" />
                                        <label for="question">Frame a question related to your habit</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input required id="noOfHrs" type="number" value={this.state.noOfHrs} onChange={this.handleChange} class="validate" />
                                        <label for="noOfHrs">No of Hrs</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <select required value={this.state.freequency} id='freequency' onChange={this.handleChange}>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="Every day">Every day</option>
                                            <option value="Every week">Every week</option>
                                            <option value="Every month">Every month</option>
                                        </select>
                                        <label>Freequency</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input required placeholder="End date" id="endDate" type="date" value={this.state.endDate} onChange={this.handleChange} class="validate" />
                                        <label for="endDate">End date</label>
                                    </div>
                                </div>
                                <div class="row center">
                                    <div class="col s6">
                                        <Link to="/createActivity">  <button class="center " style={buttonCss} >Discard</button></Link>
                                    </div>
                                    <div class="col s6">
                                        <button to="/myList" style={buttonCss} class="center " type="submit" value="Save" >Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddActivity;
