import {useRouter} from "next/router";
import style from "../../style/user.module.scss"
import MainContainer from "../../components/MainContainer";
import {sizeData} from "../../mock/state";
import {useState} from "react";

export default function User({user}) {

    const [checkBorder, setCheckBorder] = useState(false)
    const router = useRouter()
    const {query} = router;
    const {address} = user;

    const setChangeBorder = (e) => {
        if (!checkBorder) {
            sizeData.height = sizeData.height.slice(+checkBorder, sizeData.height.length - 1)
            if (sizeData.height.length === 0) {
                return sizeData.height[0]
            }
        }
        setCheckBorder(!checkBorder)
    }

    return (
        <MainContainer keywords={user.name}>
            <div className={style.block}>
                <h1>
                    {`Пользователь number ${query.id}`}
                </h1>
                <div className={style.text_info}>
                    {`Name User: ${user.name}`}<br/>
                    {`Address: ${address.city}`}<br/>
                    {`Street: ${address.street}`}
                </div>

                <div className={style.positions_geo}>
                    {`PositionLAT: ${address.geo.lat}`}
                    {`PositionLNG: ${address.geo.lng}`}
                </div>

                <div className={style.avatarListBorder}>
                    {sizeData.height.map((el, idx) => {
                        return (
                            checkBorder ? <div key={idx} onClick={setChangeBorder} className={style.avatarList}
                                               style={{height: `${sizeData.height[idx]}`}}/>
                                : <div onClick={setChangeBorder} className={style.avatarList}
                                       style={{
                                           height: `${sizeData.height[idx]}`, border: "3px solid red"
                                       }}/>
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