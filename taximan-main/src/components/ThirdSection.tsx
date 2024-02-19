import Image from "next/image";
import H2 from "./H2";
import H3 from "./H3";
import SecondSubsection from "./SecondSubsection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

interface Props {
  isGrey: boolean;
}

const ThirdSection = ({ isGrey }: Props) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const { t } = useTranslation();

  const SecondSubsectionsData = [
    {
      h4Text: t("thirdSection.secondSubsectionsData.0.h4Text"),
      pText: t("thirdSection.secondSubsectionsData.0.pText"),
      srcImg: t("thirdSection.secondSubsectionsData.0.srcImg"),
    },
    {
      h4Text: t("thirdSection.secondSubsectionsData.1.h4Text"),
      pText: t("thirdSection.secondSubsectionsData.1.pText"),
      srcImg: t("thirdSection.secondSubsectionsData.1.srcImg"),
    },
    {
      h4Text: t("thirdSection.secondSubsectionsData.2.h4Text"),
      pText: t("thirdSection.secondSubsectionsData.2.pText"),
      srcImg: t("thirdSection.secondSubsectionsData.2.srcImg"),
    },
  ];

  return (
    <div className='my-[150px] px-5 '>
      <div data-aos='fade-down' data-aos-duration='1000'>
        <H3
          className=' m-auto max-w-[200px]  mb-[-8px]'
          text={t("thirdSection.h3")}
        />
        <H2
          color={isGrey}
          text={t("thirdSection.h2")}
          className='ssm:text-[32px] sm:text-[38px]'
        />
      </div>
      <div className='justify-center ssm:mt-[40px] xsm:mt-[80px] xsm:flex flex-row xsm:items-center m-auto  xsm:px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px]'>
        <Image
          data-aos='fade-up'
          data-aos-duration='1000'
          className='ssm:pt-[0px] ssm:mb-[60px] xsm:pt-[0px] xl:w-auto xl:max-w-[600px] h-auto '
          src='/assets/pictures/photovoiture.png'
          alt="image d'une voiture"
          width='0'
          height='0'
          sizes='100vw'
          style={{ width: "100%", height: "auto" }}
        />
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='xsm:w-[50%] xl:min-w-[400px] xl:w-auto md:ml-[150px]'
        >
          {SecondSubsectionsData.map((subsection, index) => (
            <div
              key={index}
              className={` ${index % 3 === 1 ? "flex flex-row-reverse " : ""}`}
            >
              <SecondSubsection
                SecondSubsectionH4Text={subsection.h4Text}
                SecondSubsectionPText={subsection.pText}
                isH4Grey={true}
                isPGrey={true}
                srcImg={subsection.srcImg}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='mt-[50px] w-full flex flex-col'
      >
        <Button
          className='w-auto m-auto'
          mr={true}
          fontSize={true}
          fontWeight={false}
          color={false}
          background={true}
          showLogo={true}
          hoverEffect={true}
        />
      </div>
    </div>
  );
};

export default ThirdSection;
