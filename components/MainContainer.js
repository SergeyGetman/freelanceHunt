import cl from "../pages/style.module.css";
import ALinkRef from "./ALinkRef";
import Head from "next/head";
import {useState} from "react";
import {Spiner} from "./Spiner";


const MainContainer = ({children, keywords}) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log('this is isLoading', isLoading)
    const [users, setUsers] = useState({})
    console.log('this is users', users)
    const handleFetch = () => {
        if (users.length < 1) {
            return <Spiner/>
        }
        setIsLoading(true);
        fetch("https://reqres.in/api/users?page=0")
            .then(response => response.json())
            .then((response) => {
                setUsers(response.data)
            })
            .catch(() => {
                    console.error("SErver error");
                    setIsLoading(false);
                }
            )
        setIsLoading(false)

    };



    return (
        <div className={cl.head}>
            <Head>
                <meta keywords={'next_js ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <div className={cl.navbar}>
                <ALinkRef href={"/"} text="Главная">Main</ALinkRef>
                <ALinkRef href={"/users"} text="Пользователи">Users</ALinkRef>
                <ALinkRef href={"/store"} text="Store">Store</ALinkRef>
            </div>
            <div>
                {children}
            </div>
            {!isLoading ? <Spiner /> : ""}
            <button onClick={handleFetch} disabled={isLoading}>Fetch Users</button>

        </div>

    );
};

export default MainContainer;


