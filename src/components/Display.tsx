import Image from "next/image"
import PlayStation from "@/Public/PlayStation.png"
import Macbook from "@/Public/MacBookPro14.png"
import Headphone from "@/Public/Headphone.png"
import VRimage from "@/Public/VRimage.png"

export default function Display(){
    return (
        <>
        <div className="disParent">

            <div className="disFirstChild bg-white">
                <div className="playStation" style={{width:"45rem", height:"20rem", background:"white"}}>
                    <div className="playStationImg" style={{width:"22rem", height:"20rem"}}>
                    <Image 
                    src={PlayStation} 
           alt="A description of the image" />
                    </div>
                    <div className="playStationText" style={{width:"21rem", height:"8rem", background:"cyan"}}>

                    </div>

                </div>
                <div className="mainFroVisAir">

                <div className="airPods  bg-[#EDEDED]"  style={{width:"22.5rem", height:"17rem"}}>
                    <div className="airpodsImg" style={{width:"6rem", height:"17rem"}}>
                    <Image 
                    src={Headphone} 
           alt="A description of the image" />
                    </div>
                    <div className="airpodsText" style={{width:"10rem", height:"11rem", background:"red"}}></div>
                </div>
                <div className="visionPro bg-[#353535]" style={{width:"22rem", height:"17rem"}}>
                    <div className="visiProImg" style={{width:"8rem", height:"11rem"}}>
                        <Image 
                        src={VRimage}
                        alt=""/>
                    </div>
                    <div className="visiProText" style={{width:"10rem", height:"9rem", background:"white"}}></div>
                </div>
                </div>

            </div>

            <div className="disSecondChild bg-[#EDEDED]">
                
                <div className="leftText" style={{width:"22rem", height:"17rem", background:"green"}}>

                </div>
                <div className="imgBox " style={{width:"18rem", height:"31rem"}}>
                <Image 
                    src={Macbook} 
           alt="A description of the image" />

                </div>

            </div>
        </div>
        faizan
        </>
    )
}