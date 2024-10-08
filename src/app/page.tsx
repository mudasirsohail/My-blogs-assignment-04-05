import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <>
    <Header/>
        <h1 className="mainHeading"> The Blogs </h1>
      <div className="parentContainer">
      <div className="childContainer">
      <div className="imageContainer">
        <img src="html.png" alt="html-picture" className="picture" />  
      </div>
        <h1 className="headings"> HTML </h1>
        <p>  A markup language used to structure content on the web.</p>
          <Link href={"/HTML"}>
        <button className="readmore"> Readmore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
        <img src="css.svg" alt="css-picture" className="picture" />  
      </div>
        <h1 className="headings"> CSS </h1>
        <p> A stylesheet language that describes the presentation of HTML elements.</p>
          <Link href={"/CSS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="js.png" alt="js-pic" className="picture" />
      </div>
        <h1 className="headings"> Javascript </h1>
        <p> A programming language that enables interactive features on web pages.</p>
          <Link href={"/JS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="ts.png" alt="ts-picture" className="picture" />
      </div>
        <h1 className="headings"> Typescript </h1>
        <p> A superset of JavaScript that adds static typing for improved code quality.</p>
          <Link href={"/TS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="nextjs.webp" alt="nextjs-pic" className="picture" />
      </div>
        <h1 className="headings"> Next Js </h1>
        <p> A React framework for building server-rendered applications with ease. </p>
          <Link href={"/NEXTJS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
        <img src="word.webp" alt="word-pic" className="picture" />
      </div>
        <h1 className="headings"> Word </h1>
        <p> A word processing software developed by Microsoft for creating and editing text.</p>
          <Link href={"/WORD"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      </div>
    <footer>
      <div className="Footer">
        <p className="footer-text">Mudasir Sohail</p>
      <div className="social-profiles">
        <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" target="blank">
        <img src="linkedin.png" alt="linkedin-profile" className="footer-icons"/> 
        </a>
        <a href="https://github.com/mudasirsohail" target="blank">
        <img src="github.png" alt="github-profile" className="footer-icons" />
        </a>
        <a href="https://discord.com/channels/@me" target="blank">
        <img src="discord.png" alt="discord-profile"  className="footer-icons"/>
        </a>
      </div>
        <br />
        <p className="footer-text-last"> © Web Developer. All rights deserved</p>
      </div>
    </footer>
    </>
  );
}
