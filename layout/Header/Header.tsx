import style from "./Header.module.css";
import cn from "classnames";
import {HeaderProps} from "./Header.props";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {curSlideType, headerBgColorType, headerContextType} from "./headerContext.interface";
import {buttonType} from "../../components/button/ButtonType";
import {Htag} from "../../components/Htag/Htag";
import {Button} from "../../components/button/Button";
import {Menu} from "../../components/menu/Menu";


export const Header = ({children}:HeaderProps):JSX.Element =>{

    const [slides, setSlides] = useState<headerContextType>({
        context: [
                {
                    _id: 0,
                    title: 'Snap photos and share like never before Snap',
                    image: '/header_images/img_3.jpg',
                    bgColor:'orange' as headerBgColorType,
                    readMoreHref: '#'
                }
            ],
        menu: [
            {
                _id: 0,
                title: 'Item_1',
                butType: 'heart' as buttonType
            },
            {
                _id: 1,
                title: 'Item_2',
                butType: 'cloud' as buttonType
            },
            {
                _id: 2,
                title: 'Item_3',
                butType: 'sunRays' as buttonType
            },
            {
                _id: 4,
                title: 'Item_4',
                butType: 'underLine' as buttonType
            }

        ]
    })

    const [curSlide, setCurSlide] = useState<curSlideType>({
            cur_slide_id: 0,
            image: '/header_images/img_1.jpg',
            readMoreHref: '#',
            title: 'Snap photos and share like never before Snap',
            bg_color: 'orange' as headerBgColorType
        });

    useEffect(()=>{

    })

    return(
        <header className={cn(style.wrapper, {
            [style.bg_orange]: curSlide.bg_color == 'orange',
            [style.bg_yellow]: curSlide.bg_color == 'yellow',
            [style.bg_pink]: curSlide.bg_color == 'pink'
        })}>
            <Menu/>
            <div className={style.graphic_wr}>
                <div className={style.graphics}>
                    <svg width="1" height="1" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
                            <path d="M0.499462 0.000723808C0.499462 0.000723808 0.499383 0.000706717 0.571622 0.00065988L0.919706 0.147156C0.967249 0.170913 0.999841 0.289215 0.999841 0.289215V0.674053C0.999841 0.674053 0.970387 0.79461 0.922843 0.818367L0.571622 1C0.499462 1 0.499462 1 0.571622 1H0C0 1 0 0.701226 0 0.651959V0.31154C0 0.262272 0 -0.0160039 0 0.000723808H0.499462Z"/>
                        </clipPath>
                    </svg>
                    <Image
                        src={curSlide.image}
                        alt={''}
                        fill
                    />
                </div>
            </div>
            <div className={style.info_wrapper}>
                <div className={style.more_info_wr}>
                    <Button type={"border" as buttonType} active={false} >
                        READ MORE
                    </Button>
                </div>
                <div className={style.title_wr}>
                    <Htag tag={'h1'}>
                        <span>
                            Snap photos and share like never before Snap
                        </span>
                    </Htag>
                </div>
                <div className={style.slider_menu_wr}>
                    {
                        slides.menu.length != 0?
                                slides.menu.map((item, i)=>{
                                    return(
                                        <Button type={item.butType} active={item._id==curSlide.cur_slide_id?true:false} key={i}>
                                            {item.title}
                                        </Button>
                                    )
                                })
                            :
                            ''
                    }
                </div>
            </div>
        </header>
    );
};

