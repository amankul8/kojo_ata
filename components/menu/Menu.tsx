import {short_menu} from "../../helpers/menu/short_menu_data";
import {menu_item_type} from "../../helpers/menu/menu.interface";
import Error from "next/error";
import Link from "next/link";
import cn from "classnames";
import style from "./Menu.module.css";
import Image from "next/image"
import {useRouter} from "next/router";
import {ModalMenu} from "./modalManu/ModalMenu";

export const Menu = ({}):JSX.Element =>{

    const menu = short_menu('ru');

    const route = useRouter();

    if(menu.length!=0){
        return (
            <div className={style.menu_wrapper}>
                <div className={style.icon_wrapper}>
                    icon
                </div>
                <div className={style.menu_icon_wrapper}>
                    {menu.map((item:menu_item_type , i:number)=>
                        <Link href={item.url} key={i} className={cn(style.menu_item, {
                            [style.active]: route.pathname==item.url
                        })}>
                                {item.item}
                        </Link>
                    )}

                    <span className={style.login}>
                            <Image src={'/menu_icon.png'} width={25} height={25} key='' alt={''}/>
                    </span>
                </div>

                <ModalMenu/>
            </div>
        )
    }else{
        return <Error statusCode={404} />;
    };

};