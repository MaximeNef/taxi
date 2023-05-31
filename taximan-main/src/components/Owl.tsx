import Image from "next/image"
interface Props 
{
    position : boolean
    width : boolean
    height : boolean
    children : boolean

}

const Owl = ({position, width, height, children } : Props) =>
{
    return(
        <div className={`${position ? "fixed top-0 left-0 right-0" : "none" } bg-theme-yellow flex flex-row  items-center pt-[26px] pl-[19px]  `} >
            <Image 
            src="assets/logos/OwlLogo.svg" 
            alt="logo d'un hibou"
            width={width ? 35 : 55}
            height={height ? 35 : 55}
            />
            <div className="font-bebas text-white text-[16px] font-[400] leading-5 tracking-[0.8px]">
                <p>Uilenspiegel</p> 
                <p>Taxi</p>
            </div>
            {children}
        </div>
    )
}

export default Owl