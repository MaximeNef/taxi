import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Props 
{
   className? : string
   background : boolean
}

const ButtonWhite = ({className, background}: Props) => 
{
    const { t } = useTranslation();


    return (
        <button className={`${className} ${background ? "bg-white" : "bg-none"} text-theme-yellow hover:shadow-button hover:scale-105 transition duration-400 ease-in-out rounded-[40px] py-[10px] px-[24px]    `} >
            <div className="flex flex-row">
                <a href="tel:0472 827 372" className="font-inter text-[19px] font-[400] mr-[10px] leading-20 tracking-wider text-center">{t("lastSection.button")}</a>
                 <Image src="assets/logos/phoneYellow.svg" alt="logo telephone" className=".phone-icon" width={20} height={20} />
            </div>
        </button>
    )
}

export default ButtonWhite 

  
