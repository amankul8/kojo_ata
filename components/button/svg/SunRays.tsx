import React, {DetailedHTMLProps, HTMLAttributes} from "react";

interface cloudProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement>{}

export const SunRays = ({className}:cloudProps):JSX.Element =>{
    return(
        <svg className={className} viewBox="0 0 129 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1698 4.37526C20.7859 7.16926 25.6255 9.96326 30.2415 12.6403M47.1714 1C49.1506 4.14368 51.3491 7.17042 53.3283 10.3118M79.2733 11.1269C79.2733 7.86747 79.2733 4.608 79.2733 1.23274M97.3013 11.1269C100.379 8.56568 103.458 6.00558 106.536 3.44432M120.388 11.8252C125.445 9.14695 130.282 6.46989 135.339 3.79284M162.384 7.28505C154.908 8.68263 148.093 10.8931 142.377 13.804M147.431 20.9042C154.029 20.4387 160.405 19.9733 167 19.3908M143.034 27.7717C150.289 29.402 157.325 31.0312 164.58 32.6615M120.607 35.6882C125.445 37.6659 130.282 39.6459 135.119 41.5078M101.7 36.6192C101.7 38.7138 102.579 40.8096 104.118 42.6726M78.173 45C79.933 42.5557 81.0312 39.8775 81.6909 37.2004M55.3075 36.6192C53.1091 38.1325 47.3927 41.9733 45.4135 43.4866M33.9808 35.4543C28.2644 37.0835 23.2078 39.1793 18.8109 41.7394M22.1075 19.6236C15.0717 19.5078 8.03585 19.2751 1 19.1581M22.3267 28.5868C17.2701 29.5178 12.4327 30.4487 7.3761 31.3808"/>
        </svg>
    );
};