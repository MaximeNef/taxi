import Image from 'next/image';
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";

interface Props 
{
   color : boolean 
   background : boolean
   showLogo : boolean
   className? : string
   fontSize : boolean
   fontWeight : boolean
   mr : boolean
   hoverEffect?: boolean
}

const Button = ({color, background, showLogo, className, fontSize, fontWeight, mr, hoverEffect}: Props) => 
{
    const { t } = useTranslation();

    const hoverStyles = hoverEffect
      ? "hover:shadow-button transition duration-400 hover:scale-105 ease-in-out"
      : "";

    return (
        <button className={`${className} ${background ? "bg-button-yellow" : "bg-none"} ${hoverStyles} rounded-[40px] py-[10px] px-[24px] `}>
            <div className="flex flex-row">
                <a href="tel: 0472 827 372" className={`${color ? "text-theme-yellow" : "text-white"} font-inter ${fontSize ? "text-[19px]" : "text-[16px]"} ${fontWeight ? "font-semibold" : "font-medium"} leading-20 tracking-wider text-center  ${mr ? "mr-[12px]" : "mr-[0px]"} ` }> {t("button.buttonText")}</a>
                {showLogo ? ( <Image src="assets/logos/phoneLogo.svg" alt="logo telephone" width={20} height={20} />) : null}
            </div>
        </button>
    )
}

export default Button 