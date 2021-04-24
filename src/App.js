import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  
  // 変数を初期化する。
  input = ''

  // コンストラクター
  constructor (props) {
    super (props)
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <Message title="Children">
            これはコンポーネント内のコンテンツです。
            マルチでテキストを分割し、リストにして表示します。
            改行は必要ありません。
          </Message>
        </div>
      </div>
  }
}

// Messageコンポーネントクラス
class Message extends Component {
  
  li = {
    fontSize : "14pt",
    fontWeight : "bold",
    color : '#090'
  }

  // レンダリング
  render () {
    // 変数を初期化
    let content = this.props.children
    let arr = content.split('。')
    let arr2 = []
    // 配列arr2に値を詰める。
    for (let i = 0;i < arr.length; i++ ) {
      if (arr[i].trim() != '') {
        arr2.push(arr[i]);
      }
    }
    // arr2の値を使ってmapを作成する。
    let list = arr2.map( (value, key) => (
      <li className="list-group-item" style={this.li} key={key}>
        {key + 1}. {value}.
      </li>
    ))
      
    return <div>
        <h2>
          {this.props.title}
        </h2>
        <ol className="list-group">
          {list}
        </ol>
      </div>
  }
}

// Appコンポーネントを外部に出すこと。
export default App;
