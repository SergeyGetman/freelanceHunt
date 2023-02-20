import React from 'react';
import styles from "../style/user.module.scss"

export const Spiner = () => {

    return (
        <>
            <div>
                <div className={styles.loading__spinner}>
                </div>
            </div>
                <div className={styles.serverError__text}>...</div>
        </>

    );
};

