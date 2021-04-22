import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  // コンストラクター
  constructor (props) {
    super (props)
    // ステートの初期化
    this.state = {
      msg: 'Hello Component.',
    }
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <p className="subtitle">
            Show message.
          </p>
          <p className="alert alert-warning">
            {this.state.msg}
          </p>
          <p className="alert alert-dark">
            {this.props.msg}
          </p>
        </div>
      </div>
  }
}
// Appコンポーネントを外部に出すこと。
export default App;
