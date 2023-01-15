import {HtagProps} from "./Htag.props";
import style from "./Htag.module.css"
import cn from "classnames";
import React from "react";
export const Htag = ({children, tag}: HtagProps):JSX.Element=>{
    switch (tag){
        case 'h1':
            return <h1 className={ cn(style.h1)} >{children}</h1>;
        case 'h2':
            return <h2 className={cn(style.h2)} >{children}</h2>;
        case 'h3':
            return <h3 className={cn(style.h3)} >{children}</h3>;
        case 'h4':
            return <h3 className={cn(style.h4)} >{children}</h3>;
        default:
            return <></>;
    }
}