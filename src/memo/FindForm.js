import React, { useState, useEffect, memo } from 'react';
import usePersist from '../Persist';

// FindFormコンポーネント
function FindForm (props) {
    // ステート変数を用意する。
    const [ memo, setMemo ] = usePersist("memo", []);
    const [ fmemo, setFMemo ] = usePersist("findMemo", []);
    const [ message, setMessage ] = useState('');
    const [ mode, setMode ] = usePersist('mode', 'find');

    // doChange関数
    const doChange = (e) => {
        // ステート変数を更新する。
        setMessage(e.target.value);
    }

    // doAction関数
    const doAction = (e) => {
        // メッセージが空の場合は、全件検索
        if (message == '') {
            // ステート変数を設定する。
            setMode('default');
            return;
        }
        // 入力されたデータを含むmemo配列を作り直す。
        let res = memo.filter((item, key) => {
            return item.message.includes(message);
        });
        // ステート変数を更新する。(独自フック呼び出してローカルストレージに保存する。)
        setFMemo(res);
        setMode('find');
        setMessage('');
    }

    // レンダリング
    return (
        <form onSubmit={doAction}>
            <div className="form-control row">
                <input type="text" className="form-control-sm col" onChange={doChange} value={message}/>
                <input type="submit" className="btn btn-primary btn-sm col-2" value="Find"/>
            </div>
        </form>
    );
}

export default FindForm;