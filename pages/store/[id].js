import React from 'react';
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import style from "../../style/user.module.scss"

const CurrentStorePurchase = ({prod}) => {

    const router = useRouter()
    const {query} = router

    return (
        <MainContainer>
            <div className={style.storeBlock}>
                <h2>
                    {`Article: ARTX${query?.id}`}
                </h2>

                <img src={prod.image} alt="image"/>

                <div className={style.listStoreItem}>
                    {prod.title}
                </div>

                <div className={style.listStore}>
                    {"PRICE $: " + prod.price}
                    <button type="button">BUY NOW</button>
                </div>
                <div className={style.listStore}>
                    {"DESCRIPTION: " + prod.description}
                </div>
            </div>

        </MainContainer>
    );
};

export default CurrentStorePurchase;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const prod = await response.json()

    return {
        props: {prod}, // will be passed to the page component as props
    }
}