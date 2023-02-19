import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Images from "../components/Images";
import {sizeData} from "../mock/state";
import {objAPI} from "../api/api";
import {useEffect} from "react";

const Users = ({users, photo }) => {


    useEffect(() => {
        objAPI.getCircle().then(res => {
            console.log("this is res DATA", res)
        })
    },[])


    return (
        <>
            <MainContainer keywords={sizeData.keywords.pageUser}>
                <h1>All users</h1>
                <ul>{users?.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={`/users/${idx + 1} `}>
                                <img src={`${photo[idx].url}`} alt="logo"/>
                                <h2>{el.name}</h2>
                                <Images/>
                            </Link>
                        </li>
                    )
                })}</ul>
            </MainContainer>
            <h1>QWEQWEQWE</h1>
        </>

    );
};

export default Users;

export async function getStaticProps(context) {

    console.log('this is context', context)

  return await objAPI.getListData()?.then(arrayData => {
        return {
            props: {
                users: arrayData[0],
                photo: arrayData[1]
            }
        }
    })
}



