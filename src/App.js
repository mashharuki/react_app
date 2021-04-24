import React, { Component } from 'react';
import './App.css';

// 変数を初期化
let data = {
  title : 'React-Context',
  message : 'this is sample message.'
}

// コンテキストを用意する。
const SampleContext = React.createContext(data)

// Appコンポーネントクラス
class App extends Component {

  // プロバイダー用の変数を用意する。　
  newdata = {
    title : '新しいタイトル',
    message : 'これは新しいメッセージです。'
  }
  
  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <Title />
          <Message />
          <hr />
          <SampleContext.Provider value={this.newdata}>
            <Title />
            <Message />
          </SampleContext.Provider>
          <hr />
          <Title />
          <Message />
        </div>
      </div>
  }
}

// Titleコンポーネントクラス
class Title extends Component {
  // コンテキストを設定する。
  static contextType = SampleContext

  // レンダリングする。
  render () {
    return (
      <div className="card p-2 my-3">
        <h2>
          {this.context.title}
        </h2>
      </div>
    )
  }
}

// Messageコンポーネントクラス
class Message extends Component {
  // コンテキストを設定する。
  static contextType = SampleContext

  // レンダリング
  render () {
    return (
      <div className="alert alert-primary">
       <p>
        {this.context.message}
       </p>
      </div>
    )
  }
}

// Appコンポーネントを外部に出すこと。
export default App;
