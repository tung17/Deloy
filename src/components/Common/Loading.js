import React, { Component }  from 'react';
import ReactLoading from "react-loading";
import './css/style.css';

export const Loadding = ()=>(
    <div className="LoadingContainer">
        <ReactLoading className="Loadding" type={"spin"} color={"green"} height={"10%"} width={"10%"}/>
    </div>
)
