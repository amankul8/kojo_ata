
import React, {DetailedHTMLProps, HTMLAttributes} from "react";

interface cloudProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement>{}

export const Border = ({className}:cloudProps):JSX.Element =>{
    return(
        <svg className={className} viewBox="0 0 129 56" xmlns="http://www.w3.org/2000/svg" >
            <path d="M5.65504 10.1393C5.30969 15.3652 4.79247 20.5894 4.44712 25.8137C4.27524 27.088 4.27524 28.3622 5.13781 29.3828C6.69107 31.4222 10.6554 31.6776 13.9338 31.8032C46.6988 32.4403 79.8092 31.5479 112.576 28.8721C116.371 28.6167 120.683 27.9796 122.75 25.8137C124.82 23.6486 123.958 20.7159 122.75 18.1674C121.372 15.1107 119.647 12.0507 117.75 9.12036C116.543 7.20898 115.162 5.29679 112.576 4.02254C110.166 2.87555 107.058 2.62102 104.13 2.3665C69.81 -0.0547443 34.9729 0.709644 1 4.915"/>
        </svg>
    );
};