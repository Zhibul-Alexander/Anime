import {Link} from "react-router-dom";
import index from "./index.module.css";
import {InputOriginal} from "../common/Input/index"


export const Header = () =>{
      
    return (
    <div className={index.wrapper}>
        <Link to="/" className={index.headerLink}>Anime</Link>
        <Link to="about" className={index.headerLink} >About</Link>
        <InputOriginal />
    </div>
    )
}