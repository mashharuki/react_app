import React, { useState, useEffect } from 'react';
import usePersist from '../Persist';

// AddFormコンポーネント
function AddForm (props) {
    // ステート変数を用意する。
    const [ memo, setMemo ] = usePersist("memo", []);
    const [ message, setMessage ] = useState('');

    // doChange関数
    const doChange = (e) => {
        // ステート変数を更新する。
        setMessage(e.target.value);
    }

    // doAction関数
    const doAction = (e) => {
        // 配列データを作成
        const data = {
            message: message,
            created: new Date()
        };
        // memo配列に追加する。
        memo.unshift(data);
        // ステート変数を更新する。(独自フック呼び出してローカルストレージに保存する。)
        setMemo(memo);
        setMessage('');
    }

    // レンダリング
    return (
        <form onSubmit={doAction} action="">
            <div className="form-control row">
                <input type="text" className="form-control-sm col" onChange={doChange} value={message} required/>
                <input type="submit" className="btn btn-primary btn-sm col-2" value="Add"/>
            </div>
        </form>
    );
}

export default AddForm;