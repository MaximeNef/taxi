import Button from "./Button";
import H2 from "./H2";
import H3 from "./H3";
import LastSubsection from "./LastSubsection"
import ButtonWhite from "./buttonWhite";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";
  
interface Props 
{
    isGrey : boolean
    pText1?: string
    pText2?: string
    pText3?: string

}     

const LastSection = ({isGrey} : Props ) =>
{
    useEffect(() => {
        AOS.init({ once: true })
      }, [])
    
    const { t } = useTranslation();

  const LastSubsectionsData = 
  [
    {
        srcImg: t("lastSection.lastSubsectionsData.0.srcImg"),
        h4Text: t("lastSection.lastSubsectionsData.0.h4Text"),
        pText1: t("lastSection.lastSubsectionsData.0.pText1"),
        pText2: t("lastSection.lastSubsectionsData.0.pText2"),
        pText3: t("lastSection.lastSubsectionsData.0.pText3"),
        
        
      },
      {
        srcImg: t("lastSection.lastSubsectionsData.1.srcImg"),
        h4Text: t("lastSection.lastSubsectionsData.1.h4Text"),
        pText1: t("lastSection.lastSubsectionsData.1.pText1"),
        pText2: t("lastSection.lastSubsectionsData.1.pText2"),
        pText3: t("lastSection.lastSubsectionsData.1.pText3"),
        
      },
      {
        srcImg: t("lastSection.lastSubsectionsData.2.srcImg"),
        h4Text: t("lastSection.lastSubsectionsData.2.h4Text"),
        pText1: t("lastSection.lastSubsectionsData.2.pText1"),
        pText2: t("lastSection.lastSubsectionsData.2.pText2"),
        pText3: t("lastSection.lastSubsectionsData.2.pText3"),
        
      }
    ];
    return (
        <div className=" flex flex-col clipPath  bg-cover bg-no-repeat bg-[url('/assets/backgrounds/lastSectionBG.png')]">
            <div className="sm:mt-[200px] mt-[100px]  mx-4 lg:flex flex-col xl:px-[4px] 2xl:px-[50px]">
                <div data-aos="fade-down" data-aos-duration="1000" className="mb-[120px] ">
                    <H3  text={t("lastSection.h3")} />
                    <H2 className="ssm:text-[32px] sm:text-[38px]" color={isGrey} text={t("lastSection.h2")} />
                </div>
                
                <div className="flex flex-col lg:flex-row lg:m-auto">
                    {LastSubsectionsData.map((subsection, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="1000" className="lg:px-[5px] xl:px-[30px] 2xl:px-[50px] ">
                        <LastSubsection 
                            LastSubsectionH4Text={subsection.h4Text}
                            LastSubsectionPText1={subsection.pText1}
                            LastSubsectionPText2={subsection.pText2}
                            LastSubsectionPText3={subsection.pText3}
                            

                            isH4Grey={false}
                            isPGrey={false}
                            isYellow={true} 
                            hasBackground={false} 
                            isShown={false} 
                            hasShadow={false}
                            isBig={false}
                            isThick={true}
                            srcImg={subsection.srcImg}
                            hasMargin={false}

                            />      
                    </div>
                    ))}

                </div>
                <div className="flex flex-col " data-aos="fade-up" data-aos-duration="1000">
                    <ButtonWhite background={true} className="mt-[-90px] m-auto mb-[150px] py-[10px] px-[24px] " />
                </div>
            </div> 
        </div>
    )
}

export default LastSection 