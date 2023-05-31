import Image from "next/image"
import Button from "./Button"
import H1 from "./H1"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";



interface Props
{
    buttonTextColor : boolean,
    hasBackground : boolean,
    isShown : boolean,
    isBig : boolean,
    isThick : boolean,
    hasMargin : boolean
    
}
const Hero = ({buttonTextColor, hasBackground, isShown, isBig, isThick, hasMargin}: Props) => 
{
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const { t } = useTranslation();
    return (
      <div className=" hero-bg-custom h-screen w-full sm:bg-[url('/assets/backgrounds/bg-smallScreen.png')] xsm:bg-[url('/assets/backgrounds/bg-bigScreen.png')] flex pr-[20px] pl-[20px] lg:pl-[60px]  " >
        <div className="sm:mt-[200px] xsm:mt-[280px] w-full">
          <div data-aos="fade-down"   data-aos-duration="1000">
            <H1  className="ssm:text-[35px] sm2:text-[44px] leading-[50px]  md:text-[65px]  md:leading-[80px] md:tracking-wider  w-auto md:w-[800px] " text={t("hero.title")} />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" >
            <Button className="mt-[26px] mb-[0px]" mr={hasMargin} fontSize={isBig} fontWeight={isThick}  color={buttonTextColor} background={hasBackground} showLogo={isShown} hoverEffect={true}/>
          </div>
          <div className="m-auto sm:mt-[70px] mb-[0px] w-[40px]">
           <button onClick={() => handleClick('section-to-scroll-to')}>
              <Image 
                className="animate-bounce absolute bottom-[40px]"
                src="assets/logos/swipeDown.svg" 
                alt="petites fleches vers le bas"
                width={30}
                height={30}
              /> 
            </button>  

          </div>    
        </div>
      </div>
    );
  };
  
  function handleClick(sectionId: string) 
  {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }
  
  
  export default Hero