import React, {DetailedHTMLProps, HTMLAttributes} from "react";

interface cloudProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement>{}

export const Heart = ({className}:cloudProps):JSX.Element =>{
    return(
        <svg className={className} viewBox="0 0 129 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.3858 51.2856C44.154 46.6807 29.5586 41.9148 18.6176 35.7213C7.67028 29.525 0.00748155 22.062 1.10441 14.2813C1.83464 10.6268 4.3889 6.81693 10.5912 4.27513C19.3478 0.781585 32.8494 0.46386 44.5238 1.41561C49.9959 1.73476 55.468 2.36878 59.4827 3.95741C66.4153 6.65736 66.7819 11.2608 66.4153 15.2317C69.3331 11.7381 74.0749 8.40413 80.2835 6.02048C86.4858 3.63968 95.2393 2.05106 103.632 2.20921C112.025 2.36878 120.782 4.43186 124.797 7.60911C128.805 10.7849 128.445 14.5962 126.981 18.0912C123.697 25.2378 115.31 31.7476 104.726 37.3057C94.1424 42.8637 73.7114 50.492 60.9401 55.0954"/>
        </svg>
    );
};

