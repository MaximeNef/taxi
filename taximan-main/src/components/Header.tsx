import Image from "next/image"
import ButtonWhite from "./buttonWhite"
import LanguageSwitcher from "./LanguageSwitcher"

const Header = ( ) => 
{
    return (
        <div  className="w-full z-10 bg-theme-yellow flex flex-row  items-center py-[10px] px-[19px]  fixed top-0 left-0 right-0 ">
            <div className="flex flex-row items-center">
                <Image  
                className=" xsm:w-[190px] "
                src="assets/logos/logo.svg" 
                alt="logo d'un telephone"
                width={150}
                height={150}
                />
            </div>
            <Image  className="absolute xsm:hidden sm:block top-[18px] right-[20px]"
                    src="assets/logos/phoneLogo.svg" 
                    alt="logo d'un hibou"
                    width={28}
                    height={28} />
            <ButtonWhite  background={true} className="xsm:block ssm:hidden  w-auto absolute top-[15px] right-[20px] py-[10px] px-[24px]  "/>
            <LanguageSwitcher className="fixed z-20 bottom-[10%] right-[10px] " />

        </div>

    )
}

export default Header