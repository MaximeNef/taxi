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
                 <Image src={srcImg} alt="logos" width={60} height={60} className=" mr-[10px] "/>
            <div>
                <H4 color={isH4Grey} text={SecondSubsectionH4Text} className="mb-[5px]" />
                <P  color={isPGrey} text={SecondSubsectionPText} />
            </div>
        </div>
    )
}

export default SecondSubsection