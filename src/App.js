import React, { useState, useEffect } from 'react';
import './App.css';

// 合計計算の関数
const total = (a) => {
  let re = 0;
  // 合計する。
  for ( let i = 0; i <= a; i++ ) {
    re += i;
  }
  return re;
}

// 消費税計算の関数
const tax = (a) => {
  return Math.floor(a * 1.1);
}

// 数値を計算しメッセージを返す独自フック関数
function useCalc (num = 0, func = (a) => { return a }) {
  // ステート変数を設定
  const [ msg, setMsg ] = useState(null);

  const setValue = (p) => {
    let res = func(p);
    // ステートに値をセット
    setMsg(<p className="h5">※ {p} の結果は、{res}です。</p>);
  }
  return [msg, setValue];
}

// デフォルトの関数コンポーネント
function PlainMessage (props) {
  // ステート変数を用意する。(変数と関数なし)
  const [ msg, setCalc ] = useCalc();
  // 値が更新されたときの処理
  const onChange = (e) => {
    setCalc(e.target.value);
  } 

  return <div className="p-3 h5">
    <h5>
      {msg}
    </h5>
    <input type="number" onChange={onChange} className="form-control"/>
  </div>
}

// 合計計算用の関数コンポーネント
function AlertMessage(props) {
  // ステート変数を用意する。(変数:0, 関数:total関数)
  const [ msg, setCalc ] = useCalc(0, total);

  // 値が更新されたときの処理
  const onChange = (e) => {
    setCalc(e.target.value);
  } 

  return <div className="alert alert-primary h5 text-primary">
    <h5>
      {msg}
    </h5>
    <input type="number" onChange={onChange} className="form-control" min="0" max="10000"/>
  </div>
}

// 消費税計算用の関数コンポーネント
function CardMessage(props) {
  // ステート変数を用意する。(変数:0, 関数:tax関数)
  const [ msg, setCalc ] = useCalc(0, tax);

  // 値が更新されたときの処理
  const onChange = (e) => {
    setCalc(e.target.value);
  } 

  return <div className="card p-3 h5 border-primary">
    <h5>
      {msg}
    </h5>
    <input type="range" onChange={onChange} className="form-control" min="0" step="100" max="10000"/>
  </div>
}

// App関数コンポーネント
function App() {
  // ステートフックを設定
  const [ name, setName ] = useState("");
  const [ mail, setMail ] = useState("");
  const [ age, setAge ] = useState(0);
  const [ form, setForm ] = useState({ 
    name: 'no name', 
    mail: 'no mail', 
    age: 0 
  });
  const [ val, setVal ] = useState(1000);
  const [ msg, setMsg ] = useState(<p>set a price...</p>);

  // 以下、それぞれ値を更新する関数
  const doChangeName = (event) => {
    setName(event.target.value);
  }

  const doChangeMail = (event) => {
    setMail(event.target.value);
  }

  const doChangeAge= (event) => {
    setAge(event.target.value);
  }

  // 送信するための関数
  const doSubmit = (event) => {
    // ステートをセットする。
    setForm({name: name, mail: mail, age: age});
    event.preventDefault();
  }

  // レンダリング
  return (
    <div>
      <h1 className="bg-primary text-white display-4">
        React
      </h1>
      <div className="container">
        <h4 className="my-3">
          Hooks sample
        </h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
        <form onSubmit={doSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" onChange={doChangeName}/>
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" className="form-control" onChange={doChangeMail}/>
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="text" className="form-control" onChange={doChangeAge}/>
          </div>
          <input tyoe="submit" className="btn btn-primary" value="Click" />
        </form>
      </div>
    </div>
  );
}

// Appコンポーネントを外部に出すこと。
export default App; 
