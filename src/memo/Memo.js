// メモ履歴の表示用コンポーネント　
import React, { useState, useEffect } from 'react';
import usePersist from '../Persist';
import Item from './Item';

// Memoコンポーネント
function Memo (props) {
    // ステート変数を用意する。
    const [ memo, setMemo ] = usePersist("memo", []);
    const [ fmemo, setFMemo ] = usePersist("findMemo", []);
    const [ mode, setMode ] = usePersist('mode', 'default');
    // 配列データを格納するための変数
    let data = [];

    switch (mode) {
        // デフォルト表示の場合
        case 'default':
            data = memo.map((value, key) => {
                // Itemコンポーネントに引数を渡して読み込む
                <Item key={value.message} value={value} index={key + 1}/>
            });
            // ステート変数を更新する。
            setMode('default');
            break;

        // 検索結果表示の場合
        case 'find':
            data = fmemo.map((value, key) => {
                // Itemコンポーネントに引数を渡して読み込む
                <Item key={value.message} value={value} index={key + 1}/>
            });
            break;

        default:
            data = memo.map((value, key) => {
                // Itemコンポーネントに引数を渡して読み込む
                <Item key={value.message} value={value} index={key + 1}/>
            });
    }

    // レンダリング
    return (
        <table className="table mt-4">
            <tbody>
                {data}
            </tbody>
        </table>
    );
}

export default Memo;