import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import {objAPI} from "../api/api";
import {Spiner} from "../components/Spiner";


const Store = ({ListOfProducts}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([])

    objAPI.getProducts().then(users => {
        setListOfProducts(users)
        setIsLoading(false)
    })


    const renderRate = (number) => {
        let strStar = "";
        for(let i = 1; i <= 5; i++){
            strStar += number > i ? "★" : "☆"
        }
        return strStar
    }

    return (
        <MainContainer children={ListOfProducts}>
            <div className={styles.title}> S.T.O.R.E </div>
            {isLoading ? <Spiner /> :
                <div className={styles.wrapper}>
                    {listOfProducts?.map((el, idx) => {
                        return (
                            <div key={idx} className={styles.listItem}>
                                <Link href={`/store/${idx + 1}`}>


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
                                </Link>
                                <button type="button">BUY NOW</button>
                            </div>

                        )
                    })}

                </div>
            }
        </MainContainer>
    );
};

export default Store;

