import Button from "./Button"
import H2 from "./H2"
import H3 from "./H3"
import P from "./P"
import Subsection from "./Subsection"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";

interface Props 
{
    isH2Grey : boolean
    isPGrey : boolean
    buttonTextColor : boolean,
    hasBackground : boolean,
    isShown : boolean,
    isBig : boolean,
    isThick : boolean,
    hasMargin : boolean
    
}


const WelcomeSection = ({isH2Grey, isPGrey, buttonTextColor, hasBackground, isShown, isBig, isThick, hasMargin}: Props) =>
{
      
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const { t } = useTranslation();

  const subsectionsData = [

    {
      h4Text: t("welcomeSection.subsectionsData.0.h4Text"),
      pText1: t("welcomeSection.subsectionsData.0.pText1"),
      pText2: t("welcomeSection.subsectionsData.0.pText2"),
      pText3: t("welcomeSection.subsectionsData.0.pText3")
    },
    {
      h4Text: t("welcomeSection.subsectionsData.1.h4Text"),
      pText1: t("welcomeSection.subsectionsData.1.pText1"),
      pText2: t("welcomeSection.subsectionsData.1.pText2"),
      pText3: t("welcomeSection.subsectionsData.1.pText3")
    },
    {
      h4Text: t("welcomeSection.subsectionsData.2.h4Text"),
      pText1: t("welcomeSection.subsectionsData.2.pText1"),
      pText2: t("welcomeSection.subsectionsData.2.pText2"),
      pText3: t("welcomeSection.subsectionsData.2.pText3")
    }
  ];



    return (
        <div  className=" mx-5 mt-[50px] text-center flex flex-col">
          <div id="section-to-scroll-to" className="mt-[0px] w-full h-[100px] "></div>
          <div data-aos="fade-down"   data-aos-duration="1000" className="m-auto">
            <H3 className=" mb-[-8px]" text={t("welcomeSection.h3")} />
            <H2 color={isH2Grey} text={t("welcomeSection.h2")} className="ssm:text-[32px] sm:text-[38px] ssm:w-auto sm:w-auto sm2:w-[350px]"/>
            <P className="mt-[20px] ssm:w-auto sm:w-auto sm2:w-[350px] md:w-[350px]" color={isPGrey}  text={t("welcomeSection.p")} />
            
          </div>
            <div  className="sm:mt-[40px] xsm:mt-[80px] flex  flex-col md:flex-row m-auto">
            {subsectionsData.map((subsection, index) => (
               <div key={index} data-aos="fade-up" data-aos-duration="1000" className=" md:subsection-wrapper">           
                 <Subsection
                  subsectionH4Text={subsection.h4Text}
                  subsectionPText1={subsection.pText1}
                  subsectionPText2={subsection.pText2}
                  subsectionPText3={subsection.pText3}
                  isH4Grey={true}
                  isPGrey={true}
                  isLast={index === subsectionsData.length - 1}
                />
              </div>
            ))}
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  >
                <Button className="w-auto mt-[50px]" mr={hasMargin} fontSize={isBig} fontWeight={isThick} color={buttonTextColor} background={hasBackground} showLogo={isShown} hoverEffect={true} />
            </div>
        </div>
    )
}

export default WelcomeSection 