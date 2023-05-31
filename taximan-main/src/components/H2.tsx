
interface Props 
{
    text: string, 
    color : boolean    
    className? : string
}

const H2 = ({text, color, className} : Props) =>
{
    return(
        
        <h2 className={`${color ? "text-theme-grey" : "text-white"} ${className} font-raleway font-[900] text-[38px] leading-[53px] tracking-wide text-center `}>{text}</h2>
    )
}

export default H2

