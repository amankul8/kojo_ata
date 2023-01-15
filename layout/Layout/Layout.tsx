import {LayoutProps} from "./Layout.props";
import style from "./Layout.module.css"
import {FunctionComponent} from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export const Layout = ({children}: LayoutProps):JSX.Element => {
    return(
        <div className={style.wrapper}>
            <div className={style.slider}>
                <Header>
                    Header
                </Header>
            </div>
            <div className={style.content}>
                {children}
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    );
};


export const withLayout = <T extends Record<string, unknown >>(Component: FunctionComponent<T>) =>{
    return function withLayoutComponent(props: T){
        return(
                <Layout >
                    <Component {...props}/>
                </Layout>
        )
    };
};
