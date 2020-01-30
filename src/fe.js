import React, { Component } from "react";
import axios from 'axios';

class fe extends Component {
    state = { date: "", days: "", country: "", states: "", selectedFile: null };

    dateChanged = event => {
        this.setState({ date: event.target.value });
    };
    daysChanged = event => {
        this.setState({ days: event.target.value });
    };
    countryChanged = event => {
        this.setState({ country: event.target.value });
    };
    statesChanged = event => {
        this.setState({ states: event.target.value });
    };



    onSubmit = () => {
        if (this.state.date === '') {
            alert("INPUT DATE");

        }
    };



    render() {
        var countryStateInfo = {
            "United States of America": {
                "Texas": {
                },
                "Alaska": {
                },
                "California": {
                },
                "Florida": {
                },
                "Hawaii": {

                }
            },
            "India": {
                "Assam": {
                },
                "Gujarat": {
                },
                "Tamil Nadu": {
                },
                "Kerala": {
                },
                "Andhra Pradesh": {

                }
            },
            "Australia": {
                "New South Wales": {
                },
                "Queensland": {
                },
                "Victoria": {
                },
                "Tasmania": {
                },
                "Western Australia": {

                }
            },
            "China": {
                "Shandong": {
                },
                "Hainan": {
                },
                "Fujian": {
                },
                "Jiangsu": {
                },
                "Henan": {

                }
            },

            "Japan": {
                "Honshu": {
                },
                "Hokkaido": {
                },
                "Kyushu": {
                },
                "Shikoku": {
                },
                "Fikushima": {

                }
            },

        }


        window.onload = function () {

            //Get html elements
            var countySel = document.getElementById("countySel");
            var stateSel = document.getElementById("stateSel");

            //Load countries
            for (var country in countryStateInfo) {
                countySel.options[countySel.options.length] = new Option(country, country);
            }

            //County Changed
            countySel.onchange = function () {

                stateSel.length = 1; // remove all options bar first

                if (this.selectedIndex < 1)
                    return; // done

                for (var state in countryStateInfo[this.value]) {
                    stateSel.options[stateSel.options.length] = new Option(state, state);
                }
            }
            stateSel.onchange = function () {
                if (this.selectedIndex < 1)
                    return;
            }


        }

        var today = new Date();
        var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        var date1 = new Date(date);
        var date2 = new Date(this.state.date);
        // To calculate the time difference of two dates 
        var Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates 
        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

        this.state.days = ({ Difference_In_Days });

        return (
            <div>

                <form method="POST" action="https://5723ldr9p6.execute-api.us-east-1.amazonaws.com/shtoday/shtoday">

                    <table>
                        <h2 style={{ marginLeft: "570px" }}>Date</h2>
                        <input
                            type="date"
                            style={{ marginLeft: "550px", textEmphasisColor: "grey" }}
                            name="date"
                            onChange={this.dateChanged}
                        />
                        <br />
                        <br />
                        <h2 style={{ marginLeft: "570px" }}>Days</h2>
                        <input
                            type="text" id='daysdone'
                            style={{ marginLeft: "550px", textEmphasisColor: "grey" }}
                            name="days" value={Difference_In_Days} onChange={this.daysChanged} disabled

                        />
                        <h2 style={{ marginLeft: "570px" }}>Country</h2>
                        <select style={{ marginLeft: "550px", textEmphasisColor: "grey" }}
                            id="countySel" size="1" name="country">
                            <option value="" selected="selected">-- Select Country --</option>
                        </select>
                        <br />
                        <br />
                        <h2 style={{ marginLeft: "570px" }}>State</h2>
                        <select style={{ marginLeft: "550px", textEmphasisColor: "grey" }}
                            id="stateSel" size="1" name="states">
                            <h3 style={{ marginLeft: "570px" }}>State</h3>
                            <option value="" selected="selected">-- Select State --</option>
                        </select>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input type="file" style={{ marginLeft: "570px", textEmphasisColor: "grey" }}
                        />
                        <br />
                        <br />
                        <br></br>
                        <input
                            type="submit"
                            style={{ marginLeft: "590px", textEmphasisColor: "grey" }}
                            onClick={this.onSubmit}
                        />
                    </table>
                </form>
            </div>

        );
    }
}
export default fe;