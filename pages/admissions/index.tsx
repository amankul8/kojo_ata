import Head from 'next/head';
import { Inter } from '@next/font/google';
import {withLayout} from "../../layout/Layout/Layout";

const inter = Inter({ subsets: ['latin'] });

function Admissions() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,500;1,200&display=swap"
                    rel="stylesheet"/>
            </Head>
            <div>
                Admissions
            </div>
        </>
    )
}


export default withLayout(Admissions);