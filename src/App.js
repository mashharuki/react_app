import React, { useState } from 'react';
import './App.css';

// Appコンポーネントクラス
function App() {
  // ステートフックを設定
  const [message] = useState("Welcome to Hooks!");

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
        <div className="alert alert-primary text-center">
          <p className="h5">
            {message}.
          </p>
        </div>
      </div>
    </div>
  );
}

// Appコンポーネントを外部に出すこと。
export default App;
