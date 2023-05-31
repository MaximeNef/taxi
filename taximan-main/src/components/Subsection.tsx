import H4 from "./H4"
import P from "./P"

interface Props 
{
    subsectionH4Text : string
    subsectionPText1 : string
    subsectionPText2 : string
    subsectionPText3 : string

    isH4Grey : boolean
    isPGrey : boolean
    isLast: boolean
    className? : string
}
const Subsection = ({subsectionH4Text, isH4Grey, subsectionPText1,subsectionPText2,subsectionPText3,  isPGrey, isLast, className}: Props) =>
{
    return(
        <div className="m-auto pr-[0px] pl-[0px] md:px-[10px] lg:px-[30px] xl:px-[60px] ">      
            <H4 className="mb-[20px] mt-[20px]" color={isH4Grey} text={subsectionH4Text} />
            <div className="mx-4">
                <P color={isPGrey} text={subsectionPText1} />
                <P color={isPGrey} text={subsectionPText2} />
                <P className="mb-[20px]" color={isPGrey} text={subsectionPText3} />


            </div>
            {isLast ? null : (
                    <div className={`${className} md:hidden m-auto w-[170px] h-[1px] max-h-[1px] bg-theme-light-grey`}></div>
                    )} 
      </div>
    )
}

export default Subsection