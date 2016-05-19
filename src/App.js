import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: {
                1 : 'http://jpgwall.com/files/attach/images/146/654/006/6a46ce6f58e67000a2e8eeb792ada450.jpg',
                2 : 'http://i.imgur.com/jZAULzg.jpg',
                3 : 'http://pds.joins.com/news/component/htmlphoto_mmdata/201604/18/htm_2016041873048527468.jpg'
            },
            cnt: 1,
            like: 0
        };

        this._updateValue = this._updateValue.bind(this);
        this._incLike = this._incLike.bind(this);
    }

    _updateValue(){
        this.setState({
            cnt: (this.state.cnt + 1) % 3 + 1
        });
    }

    componentDidMount(){
        setInterval(this._updateValue, 2000);
    }

    _incLike() {
        this.setState({
            like: this.state.like + 1
        });
    }

    render(){
        let solid = {
            border: 'solid',
            padding: 0
        };
        return  (
            <div>
                <img src={this.state.value[this.state.cnt]} width="300px" height="300px"></img>
                <br />
                <span>좋아요 {this.state.like}개</span>
                <div style={this.solid}></div>
                <input type="button" onClick={this._incLike} value="좋아요"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
