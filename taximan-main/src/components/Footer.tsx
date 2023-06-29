import Image from "next/image"
import { useTranslation } from "react-i18next";
  
const Footer = () =>
{
    const { t } = useTranslation();

    return(
        <div className="bg-theme-yellow flex flex-col text-white pb-[35px] ssm:pt-[16px] xsm:py-[50px] sm:tracking-[0.8px]  ">
            <div className="ssm:flex flex-col md:flex-row-reverse">
                <div className="flex flex-row ssm:m-auto lg:mr-[120px]">
                    <Image className="xsm:w-[270px] xsm:pt-[10px]"
                    src="assets/logos/logo.svg" 
                    alt="logo d'un hibou"
                    width={150}
                    height={150}
                    />
        
                </div>
                <div className="text-left flex flex-col ssm:m-auto lg:ml-[120px]  ">
                    <p className="text-center ssm:text-[20px] xsm:text-[33px] font-raleway mt-[30px] mb-[20px] font-[600] ">{t("footer.pContact")}</p>
                    <div className="flex flex-row ssm:m-auto md:m-[0px] ">
                        <Image className="mr-[6px]  xsm:w-[23px] xsm:pb-[4px]" src="assets/logos/phoneLogo.svg" 
                        alt="logo d'un téléphone"
                        width={15}
                        height={15}
                        />      
                        <a href="tel: 0032/489.59.36.82" className="font-dosis ssm:text-[15px] xsm:text-[18px]"> {t("footer.pPhone")}</a>          
                    </div>
                    <div className="mt-[5px] flex flex-row ssm:m-auto md:m-[0px] ssm:mt-[5px]">
                        <Image className="mr-[6px] xsm:w-[23px]"
                        src="assets/logos/mail.svg" 
                        alt="logo d'un mail"
                        width={15}
                        height={15}
                        />      
                        <a href="mailto:gabymilles@yahoo.com" className="font-dosis ssm:text-[15px] xsm:text-[18px]">gabymilles@yahoo.com</a>          
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer 