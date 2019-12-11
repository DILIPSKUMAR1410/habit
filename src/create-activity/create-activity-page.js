import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';


class Create extends React.Component {
    render() {
        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        const paddingTop = {
            paddingTop: "15%"
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>
                    
                <div class="row" style={paddingTop}>
                <Link to="/addActvity"><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a></Link>
                        </div>
                        <div class="row">
                            <div class="col s12 ">Cultivate a new habit</div>
                        </div>
                    </div>
                </div>
        
        );
    }
}

export default Create;
