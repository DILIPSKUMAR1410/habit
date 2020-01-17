import React from 'react';
import Header from '../common/header-page';
import { Link } from 'react-router-dom';


class Create extends React.Component {
    render() {
        const textCss = {
            fontSize: "2rem",

        }
        const paddingTop = {
            paddingTop: "15%"
        }
        const iconsCss = {
            float: 'left',
            width: '6%',
        }
        const plusButton={
            fontSize:'5rem',
            paddingTop:'2rem'
        }
        const plusButtonOuterCss={
            width:'100px',
            height:'100px'
        }
        return (
            <div>
                <div class="row">
                    <Link to="/"> <img style={iconsCss} src={require('../assets/mind.png')}></img></Link>

                </div>
                <div class="container center" style={textCss}>

                    <div class="row" style={paddingTop}>
                        <Link to="/addActvity"><a style={ plusButtonOuterCss} class="btn-floating  waves-effect waves-light red"><i style={ plusButton } class="material-icons">add</i></a></Link>
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
