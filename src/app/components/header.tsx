import Link from "next/link"
import Home from "../page"

export default function Header(){
    return(

        <div className="header"> 
        <div className="header-button">
                <Link href={"/Home"}> Home </Link>
        </div>       
        </div>
    )
}