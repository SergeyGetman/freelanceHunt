import Link from "next/link";
import style from "../style/A.module.css"

export default  function ALinkRef({text, href, handleClick}) {
    return (
        <Link href={href}>
            <h2 onClick={handleClick} className={style.link}>{text}</h2>
        </Link>
    )
}