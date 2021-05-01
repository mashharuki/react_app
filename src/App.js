import React, { useState, useEffect } from 'react';
import './App.css';

// カウントするための独自フック
function useCounter() {
  // ステート変数
  const [ num, setNum ] = useState(0);
  // 加算する
  const count =  () => {
    setNum(num + 1);
  }
  // 値を得る変数と値を更新する関数を返す。
  return [num, count];
}

// アラートを表示する関数コンポーネント
function AlertMessage(props) {
  // ステート変数
  const [ counter, plus ] = useCounter(0);

  // レンダリング
  return <div className="alert alert-primary h5 text-primary">
    <h4>
      count: {counter}.
    </h4>
    <button onClick={plus} className="btn btn-primary">
      count
    </button>
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

  useEffect (() => {
    let res = <div>
      <p>軽減税率(8%) ： {tax1}円</p>
      <p>通常税率(10%) ： {tax2}円</p>
    </div>
    // ステートをセットする。
    setMsg(res);
  }, [tax1, tax2]);

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
        <div className="form-group">
          <label>Inpit:</label>
          <input type="number" className="form-control" onChange={doChange}/>
        </div>
        <button className="btn btn-primary">
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
