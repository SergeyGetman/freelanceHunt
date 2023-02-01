import cl from "../pages/style.module.css";
import A from "./A";
import Head from "next/head";


const MainContainer = ({children, keywords}) => {
    return (
        <div className={cl.main_page}>
            <Head>
                <meta keywords={'this test next_js ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <div className={cl.navbar}>
                <A href={"/"} text="Главная">Main</A>
                <A href={"/users"} text="Пользователи">Users</A>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default MainContainer;