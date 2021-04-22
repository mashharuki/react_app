import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  // コンストラクター
  constructor (props) {
    super (props)
    // ステートの初期化
    this.state = {
      msg: 'count start!',
      counter: 0,
      flg: true,
    }
    this.doAction = this.doAction.bind(this)
  }

  // doAction関数
  doAction (e) {
    this.setState({
      counter: this.state.counter + 1,
      msg: this.state.counter,
      flg: !this.state.flg
    })
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <p className="subtitle">
            Count number.
          </p>
          {this.state.flg ?
            <div className="alert alert-primary text-right">
              <p className="h5">
                count: {this.state.msg}
              </p>
            </div>
          :
            <div className="alert alert-primary text-left">
              <p className="h5">
                {this.state.msg}です。
              </p>
            </div>
          }
          <div className="alert alert-primary text-center">
            <button className="btn btn-primary" onClick={this.doAction}>
              Click
            </button>
          </div>
        </div>
      </div>
  }
}
// Appコンポーネントを外部に出すこと。
export default App;
