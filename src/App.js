import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  // コンストラクター
  constructor (props) {
    super ()
    // 変数に値をセットする。
    this.title = props.title
    this.message = props.message
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <p className="subtitle">
            {this.title}
          </p>
          <p>
            {this.message}
          </p>
        </div>
      </div>
  }
}
// Appコンポーネントを外部に出すこと。
export default App;
