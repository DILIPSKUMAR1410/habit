import React from 'react';
import Header from '../common/header-page';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import animationData from '../assets/biking.json';
import { UserSession, AppConfig } from "blockstack";
import Lottie from 'react-lottie';

const appConfig = new AppConfig();
const optionsGetFile = {
    decrypt: false
}
const options = {
    pieHole: 0.4,
    is3D: false,
    backgroundColor: { fill: 'transparent' }
};
let habitList;

const userSession = new UserSession({ appConfig: appConfig });

class actvityView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habits: undefined,
            loading: true
        };

    }

    currentDate(date) {
        let dateObj = new Date(date);
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

    listActvity() {
        let selectedHabit = sessionStorage.getItem('selectedHabit');
        let habits = this.state.habits;
        if (habitList === undefined) {
            if (selectedHabit) {

                habits.map(habit => {
                    if (habit.habitName === selectedHabit) {
                        habitList = habit;
                        habitList.startDate = this.currentDate(habitList.startDate);
                        habitList.endDate = this.currentDate(habitList.endDate);

                    }

                })

            }
        }
        return habitList;


    }
    componentDidMount() {
        userSession.getFile('habits.json', optionsGetFile).then((res) => {
            console.log(res);
            let habits = JSON.parse(res)
            this.setState({ habits: habits, loading: false, })

        })
    }
    getChartOneDetails() {

        let startDate = new Date(this.listActvity().startDate);
        let endDate = new Date(this.listActvity().endDate);
        let today = new Date();
        today = new Date(this.currentDate(today));


        let diffEndToday = (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
        let diffTodayStart = ((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
        let diffEndStart = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

        let timeLeft = diffEndToday / diffEndStart
        let timeElapsed = diffTodayStart / diffEndStart;

        return [
            ["Task", "Hours per Day"],
            ["Time Left", timeLeft],
            ["Time elapsed", timeElapsed]
        ];


    }

    getChartTwoDetails() {
        let chartTaskLeft = parseInt(this.listActvity().noOfHrs) - this.listActvity().updateHrs;
        let chartTaskAchieved = this.listActvity().updateHrs / parseInt(this.listActvity().noOfHrs);
        return [
            ["Task", "Hours per Day"],
            ["Task Left", chartTaskLeft],
            ["Task Achieved", chartTaskAchieved]
        ];

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
        const paddingTopBike = {
            paddingTop: "10%"
        }
        const iconsCss = {
            width: '20%',
        }

        const paddingTop = {
            paddingTop: '2rem'
        }
        const textCss = {
            fontSize: "1rem",

        }
        const floatRight = {
            float: "right"
        }
        return (
            !this.state.loading ? <div>
                <div class="row">
                    <div class="col s3">
                        <Link to="/"> <img style={iconsCss} src={require('../assets/mind.png')}></img></Link>
                    </div>
                    <div class="col s5">
                    </div> <div class="col s2">
                        <Link to="/myList"><img style={iconsCss} src={require('../assets/man-user.png')}></img></Link>

                    </div> <div class="col s2">
                        <Link to="/addActvity"><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a></Link>

                    </div>
                </div>
                <div class="container center" style={textCss}>
                    <div class="row">
                        <div class="col s5">
                            <div class="row" style={paddingTop}>
                                <div class="col s12"><b>Habit - {this.listActvity().habitName} </b></div>
                            </div>
                            <div class="row">
                                <div class="col s12"> Question- {this.listActvity().question}</div>
                            </div>
                            <div class="row">
                                <div class="col s12">Frequency- {this.listActvity().freequency} </div>
                            </div>
                            <div class="row">
                                <div class="col s12">Begin Date- {this.listActvity().startDate} </div>
                            </div>
                            <div class="row">
                                <div class="col s12">End Date- {this.listActvity().endDate} </div>
                            </div>
                        </div>
                        <div class="col s7">
                            <div class="col s12">
                                <Chart
                                    chartType="PieChart"
                                    data={this.getChartOneDetails()}
                                    options={options}
                                    width="100%"
                                    height="100px"
                                    legendToggle
                                />
                            </div>
                            <div class="col s12">
                                <Chart
                                    chartType="PieChart"
                                    data={this.getChartTwoDetails()}
                                    options={options}
                                    width="100%"
                                    height="100px"
                                    legendToggle
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div style={paddingTopBike}> <Lottie options={defaultOptions}
                height={400}
                width={400}
            /></div>

        );
    }
}

export default actvityView;
