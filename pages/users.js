import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users, photo}) => {
    const bgImage = photo[0]?.url

    return (
        <>

            <MainContainer keywords={"page users"}>
                <h1>All users</h1>
                <ul>{users.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={`/users/${idx + 1} `}>
                                <h2>{el.name}</h2>
                                <div style={{
                                    backgroundImage: `${bgImage}`,
                                    width: "150px",
                                    height: "150px",
                                    backgroundColor: "yellow"

                                }} >TEXT IMAGE</div>
                            </Link>
                        </li>
                    )
                })}</ul>

            </MainContainer>
        </>

    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    const responsePhoto = await  fetch("https://jsonplaceholder.typicode.com/photos")
    const photo = await responsePhoto.json();

    return {
        props: {users, photo}, // will be passed to the page component as props
    }
}