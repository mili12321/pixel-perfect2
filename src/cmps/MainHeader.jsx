import React from 'react'
import { Content } from "./Content";
import { DecorationDiv } from "./DecorationDiv";
import { DecorationLines } from "./DecorationLines";

export function MainHeader(){
    return (
        <div className="header-main">
           <div className="container">
                <div className="main-card-wrapper">
                    <div className="decoration-div-wrapper">
                        <DecorationDiv direction='left'/>
                    </div>
                    <div className="main-card-img background">
                    </div>
                    <div className="main-card-content-wrapper">
                        <Content section={1} color='dark'/>
                    </div>
                </div>
                <div className="main-card-wrapper2">
                    <DecorationLines/>
                    <div className="decoration-div-wrapper">
                        <DecorationDiv direction='right'/>
                    </div>
                    <div className="main-card-img background">
                    </div>
                    <div className="main-card-content-wrapper">
                        <Content section={2} color='dark'/>
                    </div>
                </div>
           </div>
        </div>
    )
}

