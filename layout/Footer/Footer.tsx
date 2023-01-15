import style from "./Footer.module.css";
import cn from "classnames";
import {footerInfo} from "../../helpers/footer/footerInfo";
import Telegram from "./icons/telega.svg";
import Instagram from "./icons/insta.svg";
import Whatsapp from "./icons/whApp.svg";
import Tiktok from "./icons/tiktok.svg";
import Google from "./icons/google.svg";
import Twogis from "./icons/twogis.svg";
import Facebook from "./icons/facebook.svg";

export const Footer = ():JSX.Element=>{

    const footerData = footerInfo('ru');

    return(
        <div className={cn(style.wrapper)}>
            <div className={style.firstBlock}>
                <div className={style.menu_wrapper}>
                    {
                        footerData.menu?
                            footerData.menu.map((item, i)=>{
                                return(
                                    <div key={i}>
                                        {item.item}
                                    </div>
                                )
                            }):
                            ''
                    }
                </div>
            </div>
            <div className={style.secondBlock}>
                <div className={style.infoWrapper}>
                    <div className={style.icons}>
                        {
                            footerData.icons?
                                footerData.icons.map((item, i)=>{
                                    return(
                                        <div className={style.icon} key={i}>
                                            {
                                                (() => {
                                                    switch (item.icon) {
                                                        case 'telegram':
                                                            return (<Telegram></Telegram>);
                                                            break;
                                                        case 'whatsapp':
                                                            return (<Whatsapp></Whatsapp>);
                                                            break;
                                                        case 'instagram':
                                                            return (<Instagram></Instagram>);
                                                            break;
                                                        case 'google':
                                                            return (<Google></Google>);
                                                            break;
                                                        case 'tiktok':
                                                            return (<Tiktok></Tiktok>);
                                                            break;
                                                        case 'twogis':
                                                            return (<Twogis></Twogis>);
                                                            break;
                                                        case 'facebook':
                                                            return (<Facebook></Facebook>);
                                                            break;
                                                        default:
                                                            return null
                                                    }
                                                })()
                                            }
                                        </div>
                                    )
                                }):
                                ''
                        }
                    </div>
                    <div className={style.organizationName}>
                        {
                            footerData.organizationName?
                                footerData.organizationName:
                                ''
                        }
                    </div>
                    <div className={style.location}>
                        {
                            footerData.location?
                                footerData.location:
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}