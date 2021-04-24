import React, { Component } from 'react';
import './App.css';

// 変数を初期化
let theme = {
  light: {
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f",
    },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
  dark: {
    styles: {
      backgroundColor: "#336",
      color: "#eef",
    },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
  }
}

// コンテキストを用意する。
const ThemeContext = React.createContext(theme.dark)

// Appコンポーネントクラス
class App extends Component {

  // コンテキストを設定する。
  static contextType = ThemeContext
  
  // レンダリング
  render () {
    return <div style={this.context.styles} >
        <h1 className={this.context.head}>
          React
        </h1>
        <div className="container">
          <Title value="Content page" />
          <Message value="This is Content sample." />
          <Message value="※これはテーマのサンプルです。" />
          <div className={this.context.foot}></div>
        </div>
      </div>
  }
}

// Titleコンポーネントクラス
class Title extends Component {
  // コンテキストを設定する。
  static contextType = ThemeContext

  // レンダリングする。
  render () {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.style}>
          {this.props.value}
        </h2>
      </div>
    )
  }
}

// Messageコンポーネントクラス
class Message extends Component {
  // コンテキストを設定する。
  static contextType = ThemeContext

  // レンダリング
  render () {
    return (
      <div className={this.context.style}>
       <p className={this.context.text}>
        {this.props.value}
       </p>
      </div>
    )
  }
}

// Appコンポーネントを外部に出すこと。
export default App;
