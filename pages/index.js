import MainContainer from "../components/MainContainer";
import styles from "../style/user.module.scss"

const Index = () => {
    return (
        <>
            <MainContainer keywords={"Main Page"}>
                <div  className={styles.main_head}>
                    <h1>Main page</h1>
                </div>
            </MainContainer>
        </>


    );
};
export default Index;