import Link from "next/link"
import Image from 'next/image';
import LogoName from '@/app/Public/Logo.png'
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export default function Header(){
    return (
        <>
        <div className="navbar">
            <div className="logoName" style={{width: "4rem", height:"1rem"}}>
            <Image         src={LogoName} 
        alt="A description of the image"/>
            </div>
            <div className="searchBar">
            <div><CiSearch /></div>
            <input type="text" placeholder="search here" />
            </div>
            <div className="Head">
                <ul>
                    <Link href={""}> <li>Home</li> </Link>
                    <Link href={""}> <li>About</li> </Link>
                    <Link href={""}> <li>Contact Us</li> </Link>
                    <Link href={""}> <li>blog</li> </Link>
                </ul>
            </div>
            <div className="icons">
            <AiOutlineHeart/>
            <IoCartOutline/>
            <IoPersonOutline/>
            </div>
        </div>
        </>
    )
}