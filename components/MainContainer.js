import cl from "../pages/style.module.css";
import ALinkRef from "./ALinkRef";
import Head from "next/head";
import {sizeData} from "../mock/state";

const MainContainer = ({children, keywords }) => {

    const [main, users, store, managers] = sizeData.mainPageNames

    return (
        <div className={cl.head}>
            <Head>
                <meta keywords={'next_js ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <div className={cl.navbar}>
                <ALinkRef href={"/"} text={main.main} />
                <ALinkRef href={"/users"} text={users.users} />
                <ALinkRef href={"/store"} text={store.store} />
                <ALinkRef href={"/listmanagers"} text={managers.managers} />
            </div>
            <div>
                {children}
            </div>
        </div>

    );
};

export default MainContainer;


