import React, {useState} from 'react';
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import style from "../../style/user.module.scss"
import {Context} from "../../context/Context";
import {sizeData} from "../../mock/state";

const CurrentStorePurchase = ({prod}) => {
    console.log("this is prod", prod)

    const [active, setActive] = useState("")

    const changeColor = (el) => (event) => {
        setActive(el)
        return el
    }

    const BGColor = sizeData.bgColorLayoutPosition;
    const router = useRouter()
    const {query} = router



    return (

        <Context.Provider value={sizeData}>
            <MainContainer>
                <div className={style.storeBlock}>
                    <h2>
                        {`Article: ARTX${query?.id}`}
                    </h2>

                    <div >
                        <div className={style.textStoreItem}>
                            Change your color
                        </div>

                        {BGColor.map((el, idx) => {
                            return (
                                <div key={idx} onClick={changeColor(el)} style={{backgroundColor: `${el}`}} className={
                                    active === el ? style.colorPosizition__active : style.colorPosizition}>
                                </div>
                            )
                        })}
                    </div>


                    <div>
                        <img src={prod.image} alt="image"/>
                    </div>

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

        </Context.Provider>
    );
};

export default CurrentStorePurchase;

export async function getServerSideProps({params}) {
    console.log('this is params', params)
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const prod = await response.json()

    return {
        props: {prod}, // will be passed to the page component as props
    }
}



