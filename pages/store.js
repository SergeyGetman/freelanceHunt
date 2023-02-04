import React, {useState} from 'react';
import styles from "./style.module.css"

const Store = ({ListOfProducts}) => {

    const renderRate = (number) => {
        let strStar = "";
        for(let i = 1; i <= 5; i++){
            strStar += number > i ? "★" : "☆"
        }
        return strStar
    }



    return (
        <div>
            <div className={styles.title}> S.T.O.R.E </div>

            <div className={styles.wrapper}>
                {ListOfProducts?.map((el, idx) => {
                    return (
                        <div className={styles.listItem}>

                            <img src={el.image} alt=""/>
                            <div className={styles.price}>
                                {el.title}
                            </div>

                            <div className={styles.rating}>
                                {renderRate(el.rating.rate) }
                            </div>

                            <div>
                                {el.price}
                            </div>
                            <button type="button">BUY NOW</button>
                        </div>

                    )
                })}

            </div>
        </div>
    );
};

export default Store;

export async function getStaticProps(context) {
    const ListOfProducts = await fetch('https://fakestoreapi.com/products').then(r => r.json())

    return {
        props: {ListOfProducts}, // will be passed to the page component as props
    }
}