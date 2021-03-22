import React from 'react'
import { Content } from "./Content";
import { DecorationDiv } from "./DecorationDiv";
import { DecorationLines } from "./DecorationLines";
import { MainButton } from "./MainButton";

export function MainSectionFooter(){
    return (
        <div className="footer-main">
            <DecorationLines/>
            <div className="decoration-div-wrapper">
                <DecorationDiv direction='left'/>
            </div>
            <div className="first-section">
                <div className="container">
                        <div className="contant-wrapper">
                            <div className="footer-card background">
                            </div>
                            <div className="footer-content-wrapper">
                                <div className="footer-content">
                                    <Content section={4} color='dark'/>
                                    <MainButton color='dark-btn'/>
                                </div>
                                <div className="footer-nav-wrapper">
                                    <div className="active">
                                        FAMILY GATHERING
                                        <div className="decoration-line"></div>
                                    </div>
                                    <div>SPECIAL EVENTS</div>
                                    <div>SOCIAL EVENTS</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="second-section background">
                <div className="container">
                    <div className="contant-wrapper">
                        <div className="title">Ready to make a reservation ?</div>
                        <MainButton color='transparent-btn'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

