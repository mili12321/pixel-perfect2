import React from 'react'
import { Content } from "./Content";
import { MainButton } from "./MainButton";

export function Header(){
    return (
            <div className="header-container background">
                <div className="container">
                    <div className="logo">dine</div>
                    <Content section={0} color='light'/>
                    <MainButton color='dark-btn'/>
                </div>
            </div>
    )
}
