import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Format of the app below

[Page 1]
-- TitleName [the name of the website, put it as a component in case we wanna change name]
-- SearchBar [the input text and submit button]
-- Page 1 [combines both, along with "Not searching for food? Sign up to be our partner"]

[Page 2]
-- Map [commented out, haven't started work on the map yet]
-- Result [the individual component representing important info regarding each food location]
-- ResultsTable [shows 5 results at once]
-- Page2 [shows location entered, resultsTable, and backbutton]

[App]
-- Switches between Page 1 and Page 2 based on handleClick() -> this is fired off whenever
the submit button or back button is clicked

*/

///////////////
// Constants //
///////////////

// this is placeholder info to fill up the resultsTable
const test_one = [
    {'heading':'KFC','timing':'9pm-11pm'},
    {'heading':'A&W','timing':'10am-11am'},
    {'heading':'Anandham','timing':'8pm-9pm'},
    {'heading':'Sawadikap','timing':'9pm-11pm'},
    {'heading':'Song Fa BKT','timing':'3pm-4pm'},
]

////////////
// Page 1 //
////////////

// -- TitleName [the name of the website, put it as a component in case we wanna change name]
class TitleName extends React.Component {
    render() {
        return (
            <div id="titlename">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

// -- SearchBar [the input text and submit button]
class SearchBar extends React.Component {
    render() {
        return (
            <div id="searchbar">
                <input id="locationinsert" 
                type="text"
                placeholder="Type your location here" />
                <input id="locationsubmit" 
                type="submit" 
                value="Find Me Food"
                onClick={this.props.onClick} />
            </div>
        );
    }
}

// -- Page 1 [combines both, along with "Not searching for food? Sign up to be our partner"]
class Page1 extends React.Component {
    render() {
        return (
        <div id="mainarea">
            <TitleName title="Feed Me" />
            <SearchBar onClick={this.props.onClick}/>
            <div>
                <u>Not searching for food? Sign up to be our partner!</u>
            </div>
        </div>
        );
    }
}

////////////
// Page 2 //
////////////

// -- Map [commented out, haven't started work on the map yet]
// class Map extends React.Component {
//     render() {
//         return(
//         <div>
            
//         </div>
//         );
//     }
// }

// -- Result [the individual component representing important info regarding each food location]
class Result extends React.Component {
    render() {
        return (
            <div id='result'>
                <div class = 'result_serialnumber'>
                    {this.props.serialnumber}

                </div>
                <div class='result_main'>
                    <div className='result_maininfo'>
                        <p className='maininfo_heading'>
                        {this.props.heading}
                        </p>
                        <p className='maininfo_timing'>
                        {"Timing:\n"} <br /><br /> {this.props.timing}
                        </p>

                    </div>
                    <div className='result_moreinfo'>
                        <p>
                            More Info
                        </p>

                    </div>

                </div>
            </div>
        )
    }
}

// -- ResultsTable [shows 5 results at once]
class ResultsTable extends React.Component {
    renderResult(i) {
        return (
            <Result
            serialnumber={i+1}
            heading={this.props.results[i]['heading']}
            timing={this.props.results[i]['timing']} />
        );
    }
    render() {
        return(
            <div id="results_table">
                {this.renderResult(0)}
                {this.renderResult(1)}
                {this.renderResult(2)}
                {this.renderResult(3)}
                {this.renderResult(4)}
            </div>
        )
    }
}

// -- Page2 [shows location entered, resultsTable, and backbutton]
class Page2 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.results);
        this.state = {
            results: props.results,
        };
    };
    render() {
        return (
            <div id="resultarea">
                <p>Location: {this.props.location}</p>
                <ResultsTable results={this.state.results} />
                <button class="back_button" onClick={this.props.onClick}>
                    BACK
                </button>
            </div>
        );
    }
}

// -- Switches between Page 1 and Page 2 based on handleClick() -> this is fired off whenever
// the submit button or back button is clicked
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onPage1 : true,
            location: '',
        }
    }

    handleClick() {
        if (this.state.onPage1) {
            if (document.getElementById('locationinsert').value.length === 0) {
                document.getElementById('locationinsert').placeholder = 'NO LOCATION ENTERED!'
                return
            } else {
                this.setState({
                    onPage1: false,
                    location: document.getElementById('locationinsert').value,
                })
            }
            
        } else {
            this.setState({
                onPage1: true,
                location: null,
            });
        }
    }

    render() {
        if (this.state.onPage1) {
            return (
                <div id="page">
                    <Page1 onClick={() => this.handleClick()}/>
                </div>
                );
            } else {
                return (
                    <div id="page">
                        <Page2
                        results={test_one} 
                        onClick={() => this.handleClick()}
                        location={this.state.location}
                        />
                    </div>
                );
            }
    }
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );