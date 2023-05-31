const H3 = ({text, className}: { text: string, className? : string }) =>
{
    return(
        
        <h3 className={`${className} text-theme-yellow font-dosis font-[700] text-[13px] leading-{20.5px} tracking-[2.8px] text-center`}>{text}</h3>
    )
}

export default H3

