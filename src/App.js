import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: {
                1 : 'http://jpgwall.com/files/attach/images/146/654/006/6a46ce6f58e67000a2e8eeb792ada450.jpg',
                2 : 'http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2014/03/2014030510463316367-540x811.jpg',
                3 : 'http://cfile21.uf.tistory.com/image/22495D495713B3243B3645'
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
        return  (
            <div>
                <img src={this.state.value[this.state.cnt]} width="500" height="500"></img>
                <br />
                <button onClick={this._incLike}>좋아요</button>
                <a> 좋아요 {this.state.like}개</a>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
