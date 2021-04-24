import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  // 配列データを定義する。
  data = [
    "This is list sample",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ]

  // コンストラクター
  constructor (props) {
    super (props)
    // ステートの初期化
    this.state = {
      list: this.data
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
            Show List.
          </p>
          <List title="サンプル・リスト" data={this.data} />
        </div>
      </div>
  }
}

// Listコンポーネントクラス
class List extends Component {
  // 変数を初期化する。
  number = 1

  // レンダリングする。
  render () {
    // ステートの値を格納する。
    let data = this.props.data
    return (
      <div>
        <p className="h5 text-center">
          {this.props.title}
        </p>
        <ul className="list-group">
          {data.map((item, key) => 
            <li className="list-group-item" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

// Itemコンポーネントクラス
class Item extends Component {

  itm = {
    fontsize : "16pt",
    color : "#00f",
    textDecoration : 'underline',
    textDecorationColor : '#ddf'
  }

  num = {
    fontWeight : "bold",
    color : "red"
  }

  // レンダリングする。
  render () {
    return (
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}

// Appコンポーネントを外部に出すこと。
export default App;
