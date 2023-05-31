interface Props 
{
    text: string, 
    color : boolean 
    className? : string   
}

const P = ({text, color, className} : Props) =>
{
    return(
        
        <p className={`${className} ${color ? "text-theme-light-grey" : "text-white"} font-dosis font-[500] text-[15px] leading-{20px} tracking-[0.8px]  `}>{text}</p>
    )
}

export default P

