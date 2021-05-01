import React, { useState, useEffect } from 'react';
import './App.css';
import usePersist from './Persist';

// 合計計算用の関数コンポーネント
function AlertMessage(props) {
  // ステートフックを設定
  const [ name, setName ] = useState("");
  const [ mail, setMail ] = useState("");
  const [ age, setAge ] = useState(0);
  const [ mydata, setMydata ] = usePersist("mydata", null);

  // 以下、それぞれ値を更新する関数
  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeMail = (event) => {
    setMail(event.target.value);
  }

  const onChangeAge = (event) => {
    setAge(event.target.value);
  }

  const onAction = (e) => {
    const data = {
      name: name,
      mail: mail,
      age: age
    }
    // ステート変数を更新する。
    setMydata(data);
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5 className="mb-4">
      {JSON.stringify(mydata)}
    </h5>
    <div className="form-group">
      <label className="h6">Name:</label>
      <input type="text" className="form-control" onChange={onChangeName}/>
    </div>
    <div className="form-group">
      <label className="h6">Mail:</label>
      <input type="mail" className="form-control" onChange={onChangeMail}/>
    </div>
    <div className="form-group">
      <label className="h6">Age:</label>
      <input type="number" className="form-control" onChange={onChangeAge}/>
    </div>
    <button className="btn btn-primary" onClick={onAction}>
      Saved it!
    </button>
  </div>
}

// App関数コンポーネント
function App() {
  
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
      </div>
    </div>
  );
}

// Appコンポーネントを外部に出すこと。
export default App; 
