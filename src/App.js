import React, { useState, useEffect } from 'react';
import './App.css';

// 税率計算を行うフック
const useTax = (t1, t2) => {
  // ステート変数を設定する。
  const [ price, setPrice ] = useState(1000);
  const [ tx1 ] = useState(t1);
  const [ tx2 ] = useState(t2);
  
  // 更新する。
  const tax = () => {
    return Math.floor(price * (1.0 + tx1 / 100));
  }

  const reduced = () => {
    return Math.floor(price * (1.0 + tx2 / 100));
  }

  return [ price, tax, reduced, setPrice ];
}

// アラートを表示する関数コンポーネント
function AlertMessage(props) {
  // ステート変数
  const [ price, tax, reduced, setPrice ] = useTax(10, 8);

  // 値が変わった時に呼び出す関数
  const DoChange = (e)  => {
    let p = e.target.value;
    // ステートをセットする。
    setPrice(p);
  }

  // レンダリング
  return <div className="alert alert-primary h5">
      <p className="h5">
        軽減税率(8%) ： {tax()}円
      </p>
      <p className="h5">
        通常税率(10%) ： {reduced()}円
      </p>
      <div className="form-group">
        <label className="form-group-label">
          Price:
        </label>
        <input type="number" className="form-control" onChange={DoChange} value={price} />
      </div>
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
        <AlertMessage />
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
