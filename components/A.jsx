import Link from "next/link";
import style from "../style/A.module.css"

export default  function A({text, href}) {
    return (
        <Link href={href}>
            <h2 className={style.link}>{text}</h2>
        </Link>
    )
}