import cl from "../pages/style.module.css";
import ALinkRef from "./ALinkRef";
import Head from "next/head";


const MainContainer = ({children, keywords}) => {
    return (
        <div className={cl.main_page}>
            <Head>
                <meta keywords={'this test next_js ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <div className={cl.navbar}>
                <ALinkRef href={"/"} text="Главная">Main</ALinkRef>
                <ALinkRef href={"/users"} text="Пользователи">Users</ALinkRef>
            </div>
            <div>
                {children}
            </div>
        </div> 
    );
};

export default MainContainer;