import {buttonType} from "../../components/button/ButtonType";

export enum headerBgColorType{
    yellow = 'yellow',
    orange = 'orange',
    pink = 'pink'
};

export interface sliderMenuType{
    _id: number,
    title: string,
    butType: buttonType
}

export interface sliderContextType{
    _id: number
    image: string,
    title: string,
    readMoreHref: string,
    bgColor: headerBgColorType,
}
export interface headerContextType{
    context: sliderContextType[],
    menu: sliderMenuType[],
}

export interface curSlideType{
    image: string,
    title: string,
    readMoreHref: string,
    cur_slide_id: number,
    bg_color: headerBgColorType
}
