import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TitleName extends React.Component {
    render() {
        return (
            <div id="titlename">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

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

// Page 2

// class Map extends React.Component {
//     render() {
//         return(
//         <div>
            
//         </div>
//         );
//     }
// }

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

const test_one = [
    {'heading':'KFC','timing':'9pm-11pm'},
    {'heading':'A&W','timing':'10am-11am'},
    {'heading':'Anandham','timing':'8pm-9pm'},
    {'heading':'Sawadikap','timing':'9pm-11pm'},
    {'heading':'Song Fa BKT','timing':'3pm-4pm'},
]

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