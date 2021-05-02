// ベースとなるApp.js
import './App.css';
import MemoPage from './memo/MemoPage';

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
          Memo.
        </h4>
        <MemoPage />
      </div>
    </div>
  );
}

// Appコンポーネントを外部に出すこと。
export default App; 
