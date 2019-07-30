import React from 'react';
import './css/style.css'

export const OrderRecord = ({ID,Name,STT,Count,Price,Status,DeleteClick})=>
{
    return(
        <tr>
            <td>{ID}</td>
            <td>{Name}</td>
            <td>{STT}</td>
            <td>{Count}</td>
            <td>{Price}</td>
            <td><img src="https://img.icons8.com/color/36/000000/filled-trash.png" onClick={()=>{DeleteClick(ID -1)}} className="record_action"/></td>
            <td>{(Status)?<img src="https://img.icons8.com/color/24/000000/verified-account.png"></img>:
        <img src="https://img.icons8.com/dusk/24/000000/delete-sign.png"></img>}</td>
        </tr>
    )
}