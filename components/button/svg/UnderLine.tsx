import React, {DetailedHTMLProps, HTMLAttributes} from "react";

interface cloudProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement>{}

export const UnderLine = ({className}:cloudProps):JSX.Element =>{
    return(
        <svg className={className} viewBox="0 0 129 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.56773C38.1932 1.05874 75.8068 1.36515 113 2.48389C79.5891 2.3821 46.3884 2.99287 13.1876 3.50186C42.8161 3.80724 72.4425 4.21443 102.281 4.51982C75.3844 4.82623 48.4876 5.0288 21.8009 5.33521C42.3938 5.13059 63.1968 5.437 83.7896 6.25137"/>
        </svg>
    );
};

