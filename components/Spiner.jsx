import React, {useEffect} from 'react';
import styles from "../style/user.module.scss"

export const Spiner = () => {

    useEffect(() => {
        document.body.style.background = 'azure'
    })

    return (
        <>
            <div>
                <div className={styles.loading__spinner}>
                </div>
            </div>
            <div className={styles.serverError}>
                SERVER ERROR
                <div className={styles.serverError__text}>...</div>
            </div>
        </>

    );
};

