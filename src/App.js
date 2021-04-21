import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <p className="subtitle">
            This is sample component.
          </p>
          <p>
            これはサンプルのコンポーネントです。
          </p>
          <p>
            簡単なメッセージを表示する。
          </p>
        </div>
      </div>
  }
}
// Appコンポーネントを外部に出すこと。
export default App;
