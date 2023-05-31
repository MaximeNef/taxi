import Image from "next/image"
import H4 from "./H4"
import P from "./P"

interface Props 
{
    SecondSubsectionH4Text : string
    SecondSubsectionPText: string

    isH4Grey : boolean
    isPGrey : boolean
    srcImg: string

}

const SecondSubsection = ({SecondSubsectionH4Text, isH4Grey, SecondSubsectionPText, isPGrey, srcImg}: Props) =>
{
    return(
        <div className=" flex flex-row mb-[50px]">      
            <div className="flex rounded-[50px] mr-[10px] bg-theme-yellow w-[50px] h-[50px]">
                 <Image src={srcImg} alt="logos" width={30} height={30} className=" m-auto "/>
            </div>
            <div>
                <H4 color={isH4Grey} text={SecondSubsectionH4Text} className="mb-[5px]" />
                <P  color={isPGrey} text={SecondSubsectionPText} />
            </div>
        </div>
    )
}

export default SecondSubsection