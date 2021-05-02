import React, { useState, useEffect, memo } from 'react';
import usePersist from '../Persist';

// DelFormコンポーネント
function DelForm (props) {
    // ステート変数を用意する。
    const [ memo, setMemo ] = usePersist("memo", []);
    const [ num, setNum ] = useState(0);

    // doChange関数
    const doChange = (e) => {
        // ステート変数を更新する。
        setNum(e.target.value);
    }

    // doAction関数
    const doAction = (e) => {
        // 選択されたデータ飲みを消して新しいmemo配列を作り直す。
        let res = memo.filter((item, key) => {
            return key != num;
        });
        // ステート変数を更新する。(独自フック呼び出してローカルストレージに保存する。)
        setMemo(res);
        setNum(0);
    }

    // 選択肢を作る
    let items = memo.map((value, key) => (
        <option key={key} value={key}>
            {value.message.substring(0 ,10)}
        </option>
    ));

    // レンダリング
    return (
        <form onSubmit={doAction}>
            <div className="form-group row">
                <select type="text" className="form-control-sm col" onChange={doChange} defaultValue="-1">
                    {items}    
                </select>
                <input type="submit" className="btn btn-primary btn-sm col-2" value="Del"/>
            </div>
        </form>
    );
}

export default DelForm;