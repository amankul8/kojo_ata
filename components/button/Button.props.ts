import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {buttonType} from "./ButtonType";

export interface buttonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    type: buttonType,
    active: boolean
}