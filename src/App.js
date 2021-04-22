import React, { Component } from 'react';
import './App.css';

// Appコンポーネントクラス
class App extends Component {
  
  data = []
  // プロパティ
  area = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  }

  // コンストラクター
  constructor (props) {
    super (props)
    // ステートの初期化
    this.state = {
      list: this.data
    }
    this.doAction = this.doAction.bind(this)
  }

  // doAction関数
  doAction (e) {
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y})
    this.setState({
      list: this.data
    })
  }

  // 四角を描くする関数
  draw (d) {
    let s ={
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3",
    }
    return <div style={s}></div>
  }

  // レンダリング
  render () {
    return <div>
        <h1 className="bg-primary text-white display-4">
          React
        </h1>
        <div className="container">
          <p className="subtitle">
            draw rectangle.
          </p>
          <div style={this.area} onClick={this.doAction}>
            {this.data.map((value) => this.draw(value))}
          </div>
        </div>
      </div>
  }
}
// Appコンポーネントを外部に出すこと。
export default App;
