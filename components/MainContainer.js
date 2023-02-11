import cl from "../pages/style.module.css";
import ALinkRef from "./ALinkRef";
import Head from "next/head";


const MainContainer = ({children, keywords }) => {

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
                <ALinkRef href={"/listmanagers"} text="listmanagers">list managers</ALinkRef>
            </div>
            <div>
                {children}
            </div>


        </div>

    );
};

export default MainContainer;


