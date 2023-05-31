

interface Props
{
    className?: string;
    text : string;
}
const H1= ({text, className} : Props) =>
{

    return(
        <h1 className= {`${className} font-relaway text-white font-[800] leading-[60px] tracking-[0.8px]`}>{text}</h1>
    )
}
export default H1