import React from 'react'
import { MainHeader } from "./MainHeader";
import { PixelMain } from "./PixelMain";
import { MainSectionFooter } from "./MainSectionFooter";

export function Main(){
    return (
        <>
            <MainHeader/>
            <PixelMain/>
            <MainSectionFooter/>
        </>
    )
}

