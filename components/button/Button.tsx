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
        case 'simple':
            return (
                <button className={cn(style.button, style.simple)} {...props} >
                    {children}
                </button>
            ); break;
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
        case 'cloud':
            return (
                <button className={cn(style.button)} {...props} >
                    <Cloud className={cn(style.svg, style.cloud,{
                        [style.active]: active
                    })}/>
                    {children}
                </button>
            ); break;
        case 'underLine':
            return (
                <button className={cn(style.button)} {...props} >
                    <UnderLine className={cn(style.svg, style.underLine)}/>
                    {children}
                </button>
            ); break;
        case 'sunRays':
            return (
                <button className={cn(style.button)} {...props} >
                    <SunRays className={cn(style.svg, style.sunRays)}/>
                    {children}
                </button>
            ); break;
        case 'heart':
            return (
                <button className={cn(style.button)} {...props} >
                    <Heart className={cn(style.svg, style.heart)}/>
                    {children}
                </button>
            ); break;
        case 'border':
            return (
                <button className={cn(style.button)} {...props} >
                    <Border className={cn(style.svg, style.border)}/>
                    {children}
                </button>
            ); break;
        default:
            return <></>
    }
}