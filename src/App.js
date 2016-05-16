import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };

        this._updateValue = this._updateValue.bind(this);
    }

    _updateValue(){
        this.setState({
            value: Math.round(Math.random()*100)
        });
    }

    componentDidMount(){
        setInterval(this._updateValue, 1000);
    }

    render(){
        return  (
            <div>
                <h2>number : {this.state.value}</h2>
                <button onClick={this._updateValue}>go</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
