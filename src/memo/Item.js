// メモ項目のコンポーネント
import React, { useState, useEffect } from 'react';

// Itemコンポーネント
function Item(props) {
    // スタイル用の定数
    const th = {
        width: "100px"
    }
    const td = {
        textAlign: "right",
        width: "150px"
    }
    // 作成日を格納するための変数
    let d = new Date(Date.parse(props.value.created));
    // 表示変換
    let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

    // レンダリング
    return (
        <tr>
            <th style={th}>
                No, {props.index}
            </th>
            <td>
               {props.value.message} 
            </td>
            <td style={td}>
                {f}
            </td>
        </tr>
    );
}

export default Item;