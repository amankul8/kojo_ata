import React from "react";
import style from "./ModalMenu.module.css";


export const ModalMenu = ():JSX.Element=>{

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <span>
                    Icon
                </span>
                <span>
                    Close
                </span>
            </div>
            <div className={style.content}>
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
                <span>Icon 4</span>
                <span>Icon 5</span>
            </div>
        </div>
    )
};