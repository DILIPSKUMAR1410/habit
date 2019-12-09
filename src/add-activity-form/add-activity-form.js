import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';


class AddActivity extends React.Component {
    render() {

        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>
                    <div class="section">
                        New Habit
                    <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input placeholder="Habit name" id="habit_name" type="text" class="validate" />
                                        <label for="Habit_name">Habit Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="run_today" type="text" class="validate" />
                                        <label for="run_today">Did you run today</label>
                                    </div>
                                </div>
                                <div class="row center">
                                    <div class="col s12">
                                    <Link to="/myList">  <a class="center waves-effect waves-light btn-small blue darken-3" >Add</a></Link>
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
