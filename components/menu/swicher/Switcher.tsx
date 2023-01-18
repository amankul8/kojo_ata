import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import style from "./Switcher.module.css"
import Image from "next/image";

interface propsSwitcher extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active: boolean,
    children: ReactNode
}

export const Switcher = ({children, active ,...props}:propsSwitcher):JSX.Element=>{
    return (
        <div className={style.wrapper} {...props}>
            {children}
            <div className={style.image_wrapper}>
                <Image height={25} width={25} src="/menu_icon.png" alt=""/>
            </div>
        </div>
    )
}