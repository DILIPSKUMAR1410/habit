import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';
import M from 'materialize-css';



class myList extends React.Component {

    myList = () => {
        const updateDeleteCss = {
            float: "right",
            paddingLeft: "0.5rem",

        }

        let list = [];
        for (let i = 0; i < 3; i++) {
            list.push(<li class="collection-item">
               <span> <Link to="/activityView"> Learn Bowling</Link></span> <span style={updateDeleteCss}><a class="center waves-effect waves-light btn-small modal-trigger blue darken-3" href="#delete">Delete</a></span>
                <span style={updateDeleteCss}><a class="center waves-effect waves-light btn-small modal-trigger blue darken-3" href="#update">Update</a></span>
            </li>)

        }
        return list;

    }
    render() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });
        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>

                    <div class="row">
                        <div class="col s12">My List, 2nd December 2019</div>

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
                        <a href="#!" class="modal-close waves-effect waves-light  btn-flat">Delete</a>
                    </div>
                </div>
            </div>



        );
    }
}

export default myList;
