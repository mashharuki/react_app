import React, { useState, useEffect } from 'react';
import './App.css';

// アラートを表示する関数コンポーネント
function AlertMessage(props) {
  // ステート変数
  const data = props.data;
  const msg = JSON.stringify(data);

  // レンダリング
  return <div className="alert alert-primary h5 text-primary">
    <h5>
      {props.msg}
    </h5>
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
  const [ tax1, setTax1 ] = useState(0);
  const [ tax2, setTax2 ] = useState(0);

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

  const doChange = (event) => {
    setVal(event.target.value);
  }

  const doAction = () => {
    let res = <div>
      <p>軽減税率(8%) ： {tax1}円</p>
      <p>通常税率(10%) ： {tax2}円</p>
    </div>
    // ステートをセットする。
    setMsg(res);
  }

  // 送信するための関数
  const doSubmit = (event) => {
    // ステートをセットする。
    setForm({name: name, mail: mail, age: age});
    event.preventDefault();
  }

  // 副作用フック(更新時に指定の関数を実行する。)
  useEffect (() => {
    // ステートを更新する。
    setTax1(Math.floor(val * 1.08));
  });

  useEffect (() => {
    // ステートを更新する。
    setTax2(Math.floor(val * 1.1));
  });

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
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Inpit:</label>
          <input type="number" className="form-control" onChange={doChange}/>
        </div>
        <button className="btn btn-primary" onClick={doAction}>
          Calc
        </button>
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
