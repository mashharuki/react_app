import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  
  // 変数を初期化する。
  input = ''

  // コンストラクター
  constructor (props) {
    super (props)
    this.state = {
      title : 'input form',
      message : 'type your name.',
      max : 10,
    }
    // メソッドをバインドする。
    this.doCheck = this.doCheck.bind(this)
  }

  // チェックするための関数
  doCheck (event) {
    // アラートを表示する。
    alert(event.target.value + "は長すぎます。(最大" + this.state.max + "文字)")
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <h4>
            {this.state.title}
          </h4>
          <Message maxlength={this.state.max} onCheck={this.doCheck} />
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

  // コンストラクター
  constructor (props) {
    super(props)
    // メソッドをバインドする。
    this.doChange = this.doChange.bind(this)
  }

  // 変更するための関数
  doChange (e) {
    if (e.target.value.length > this.props.maxlength) {
      // チェック関数を実行する。
      this.props.onCheck(e)
      // 強制的に10文字に変更させる。
      e.target.value = e.target.value.substr(0, this.props.maxlength)
    }
  }

  // レンダリング
  render () {
    return <div className="form-group">
       <label>input:</label>
       <input type="text" className="form-control" onChange={this.doChange} />
      </div>
  }
}

// Appコンポーネントを外部に出すこと。
export default App;
