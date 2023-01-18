import React from "react";
import style from "./ModalMenu.module.css";
import {large_menu} from "../../../helpers/menu/large_menu_data";
import {Button} from "../../button/Button";
import {buttonType} from "../../button/ButtonType";
import {Switcher} from "../swicher/Switcher";
import cn from "classnames";
import {ftruncate} from "fs";

interface ModalMenuProps{
    active: boolean,
}

export const ModalMenu = ({active, ...props}:{active: boolean}):JSX.Element=>{

    const menu = large_menu('ru');

    return (
        <div className={cn(style.wrapper, {[style.active]: active})} {...props}>
            <div className={style.header}>
                <span>
                    Icon
                </span>
                <Switcher active={active}>
                    Close
                </Switcher>
            </div>
            <div className={style.content}>
                <div className={style.menu_wrapper}>
                    {
                        menu.map((item, index)=>{
                            return(
                                <span key={index}>
                                    <Button type={buttonType.forSlider} active={false}>
                                        {item.item}
                                    </Button>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};