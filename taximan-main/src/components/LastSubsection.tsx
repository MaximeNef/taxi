import Image from "next/image"
import Button from "./Button"
import H4 from "./H4"
import P from "./P"

interface Props 
{
    isPGrey : boolean
    isH4Grey : boolean
    LastSubsectionH4Text : string 
    LastSubsectionPText1? : string 
    LastSubsectionPText2? : string 
    LastSubsectionPText3? : string 

    isYellow : boolean
    hasBackground : boolean
    isShown : boolean
    hasShadow : boolean
    isBig : boolean
    isThick : boolean
    srcImg : string
    hasMargin : boolean
    
}

const LastSubsection = ({ isPGrey, isH4Grey, LastSubsectionH4Text, LastSubsectionPText1, LastSubsectionPText2, LastSubsectionPText3,  isYellow, hasBackground, isShown, hasShadow, isBig, isThick, srcImg, hasMargin}: Props) => 
{
    return(
        <div className="m-auto px-[0px] relative mb-[140px] bg-theme-dark-grey max-w-[360px] lg:w-[370px] lg:h-[280px] text-center rounded-[6px] ">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-theme-dark-grey  w-[95px] h-[95px]"/>
            <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-theme-yellow  w-[80px] h-[80px]">
                <Image className="m-auto mt-[22px]" src={srcImg} alt="logos" width={35} height={35} />      

            </div>
            <div className="mx-4">

                <div className="pt-[65px] pb-[12px] ">
                    <H4  color={isH4Grey} text={LastSubsectionH4Text} />
                </div>

                {LastSubsectionPText1 && <P color={isPGrey} text={LastSubsectionPText1} />}
                {LastSubsectionPText2 && <P color={isPGrey} text={LastSubsectionPText2} />}
                {LastSubsectionPText3 && <P color={isPGrey} text={LastSubsectionPText3} />}


            </div>

            <Button className="mb-[30px]" hoverEffect={false} mr={hasMargin} fontSize={isBig} fontWeight={isThick} color={isYellow} background={hasBackground} showLogo={isShown}  />
        </div>
    )
}

export default LastSubsection