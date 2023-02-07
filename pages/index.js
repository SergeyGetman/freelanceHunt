import MainContainer from "../components/MainContainer";
import styles from "../style/user.module.scss"
import {sizeData} from "../mock/state";
import {HockComponent} from "../hock/HockComponent";

function Index () {
    return (

            <MainContainer keywords={sizeData.keywords.mainPage}>
                <div className={styles.main_head}>
                    <h1>{sizeData.keywords.mainPage}</h1>
                </div>
            </MainContainer>


    );
};
export default HockComponent(Index)
