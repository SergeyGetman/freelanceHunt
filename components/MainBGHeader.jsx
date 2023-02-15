import React from 'react';
import styles from "./styleComponent.module.scss"
import {useRouter} from "next/router";
import Link from "next/link";

export const MainBgHeader = () => {

    const router = useRouter()
    const {query} = router

    return (
        <div>
            <Link href={`${router.pathname}/test-assigment`}>
                <div className={styles.textStyleSheet}>GO INSIDE TEST TASK</div>
            </Link>
        </div>
    );
};
