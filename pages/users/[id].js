import {useRouter} from "next/router";
import style from "../../style/user.module.scss"
import MainContainer from "../../components/MainContainer";
import {sizeData} from "../../mock/state";
import {useRef, useState} from "react";

export default function User({user}) {

    const {name, addressUser, street, positionLAT, PositionLNG} = sizeData.infoUser;

    const [checkBorder, setCheckBorder] = useState(false)
    const router = useRouter()
    const {query} = router;
    const {address} = user;

    const myContainer = useRef(null);

    const setChangeBorder = () => {

        if (!checkBorder) {
            sizeData.height = sizeData.height.slice(0, sizeData.height.length)
            if (sizeData.height.length === 0 || sizeData.height.length === 1) {
                return sizeData.height[0]
            }
        }
        setCheckBorder(!checkBorder)
    }

    return (
        <MainContainer keywords={user.name}>
            <div className={style.block}>
                <h1>
                    {`${sizeData.infoUser.numberUser} ${query.id}`}
                </h1>
                <div className={style.text_info}>
                    {`${name}: ${user.name} \n`}
                    {`${addressUser}: ${address.city} \n`}
                    {`${street}: ${address.street}`}
                </div>

                <div className={style.positions_geo}>
                    {`${positionLAT}: ${address.geo.lat}\n`}
                    {`${PositionLNG}: ${address.geo.lng}`}
                </div>

                <div className={style.avatarListBorder}>
                    {sizeData.height.map((el, idx) => {
                        return (
                            !checkBorder ? <div key={idx} onClick={setChangeBorder} className={style.avatarList}
                                               style={{height: `${sizeData.height[idx]}`}}/>
                                : <div ref={myContainer} className={style.avatarListDisabled} style={{height: `${sizeData.height[idx]}`}} />
                        )
                    })
                    }
                </div>


            </div>
        </MainContainer>

    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}