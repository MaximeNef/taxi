interface Props 
{
    text: string, 
    color : boolean
    className? : string 
}
const H4 = ({text, color, className}: Props) =>
{
    return(
        
        <h4 className={`${className} ${color ? "text-theme-grey" : "text-white"} font-raleway font-[600] text-[22px] leading-{35.7px} tracking-{0.9px}  `}>{text}</h4>
    )
}

export default H4

