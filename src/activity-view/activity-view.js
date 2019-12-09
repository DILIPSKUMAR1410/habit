import React from 'react';
import Header from '../common/header-page';
import { Chart } from "react-google-charts";


const data = [
    ["Task", "Hours per Day"],
    ["Time Elapsed", 11],
    ["Time Left", 7] // CSS-style declaration
];
const options = {
    pieHole: 0.4,
    is3D: false
};

class actvityView extends React.Component {


    render() {

        const paddingTop = {
            paddingTop: '2rem'
        }
        const textCss = {
            fontSize: "1rem",
            color: '#1565c0'
        }
        return (
            <div><Header />
                <div class="container center" style={textCss}>
                    <div class="row">
                        <div class="col s5">
                            <div class="row" style={paddingTop}>
                                <div class="col s12">Habit - Learn Bowling </div>
                            </div>
                            <div class="row">
                                <div class="col s12"> Question- Did you bowl?</div>
                            </div>
                            <div class="row">
                                <div class="col s12">Frequency- Everyday </div>
                            </div>
                        </div>
                        <div class="col s7">
                            <div class="col s12">
                                <Chart
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                    width="100%"
                                    height="100px"
                                    legendToggle
                                />
                            </div>
                            <div class="col s12">
                                <Chart
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                    width="100%"
                                    height="100px"
                                    legendToggle
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default actvityView;
