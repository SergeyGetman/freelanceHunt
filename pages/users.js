import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Images from "../components/Images";
import {sizeData} from "../mock/state";
import Store from "./store";

const Users = ({users, photo }) => {


    return (
        <>
            <MainContainer keywords={sizeData.keywords.pageUser}>
                <h1>All users</h1>
                <ul>{users.map((el, idx) => {
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
                <Store />
            </MainContainer>
        </>

    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    const responsePhoto = await fetch("https://jsonplaceholder.typicode.com/photos")
    const photo = await responsePhoto.json();

    return {
        props: {users, photo }, // will be passed to the page component as props
    }
}