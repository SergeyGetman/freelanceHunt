import style from "./style.module.css"
import Link from "next/link";

export default function Error(){
    return (
        <div className={style.error}>
            <h1>This page doesn't found </h1>
            <Link href={'/'}>
                <button type="button">Go Home</button>
            </Link>

        </div>

    )
}