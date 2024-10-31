import Image from "next/image"
import HeroPhone from "@/Public/Iphoneimage.png"

export default function Hero(){
    return (
        <>
        <div className="mainContainer">
        <div className="textCon">
            <h1>Pro.Beyond.</h1>
            <h2>IPhone 14<span style={{fontWeight:"bold"}}> Pro</span></h2>
            <p>Created to change everything for the better. For everyone</p>
            <button>Shop Now</button>

        </div>
        
        <div className="secondChild">
                 <Image 
                 src={HeroPhone} 
        alt="A description of the image" />
        </div>

        </div>
        </>
    )
}