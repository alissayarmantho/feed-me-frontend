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
                value="Find Me Food" />
            </div>
        );
    }
}

class Page1 extends React.Component {
    render() {
        return (
        <div id="mainarea">
            <TitleName title="Feed Me" />
            <SearchBar />
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

// class ResultsTable extends React.Component {
//     render() {
//         return(
//             <div>

//             </div>
//         )
//     }
// }



class App extends React.Component {
    render() {
        return (
            <div id="page">
                <Page1 />
            </div>
        );
    }
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );