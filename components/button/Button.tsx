import {buttonProps} from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";
import React from "react";
import {Cloud} from "./svg/Cloud";
import {UnderLine} from "./svg/UnderLine";
import {Heart} from "./svg/Heart";
import {SunRays} from "./svg/SunRays";
import {Border} from "./svg/Border";


export const Button = ({children, active, type, className, ...props}: buttonProps):JSX.Element =>{


    switch (type){

        case 'cancel':
            return (
                <button className={cn(style.button, style.cancel)} {...props} >
                    {children}
                </button>
            ); break;
        case 'back':
            return (
                <button className={cn(style.button, style.back)} {...props} >
                    {children}
                </button>
            ); break;
        case 'submit':
            return (
                <button className={cn(style.button, style.submit)} {...props} >
                    {children}
                </button>
            ); break;
        case 'forSlider':
            return (
                <button className={cn(style.button, style.submit)} {...props} >
                    {children}
                </button>
            ); break;
        default:
            return <></>
    }
}