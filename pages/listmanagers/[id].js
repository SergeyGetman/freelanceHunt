import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import Link from "next/link";
import styles from "../../components/styleComponent.module.scss";



 function HeaderImage () {

     const data = [1,2,3,4,5]

    const router = useRouter()
    const {query} = router
     console.log("this is queryID", query)

    return (
        <MainContainer>
            <div className={styles.general__block}>
             <h1>THIS IS MY OUTS </h1>
                <div className={styles.general__block_BTN}>
                    <button>USERS</button>
                    <button>SIGN IN</button>
                </div>

                <div className={styles.general__block__headerIMG} >
                    <div className={styles.general__block__headerIMG__AllText}>
                        <div className={styles.general__block__headerIMG_textHEADER}>
                            Test assignment for front-end developer
                        </div>
                        <div className={styles.general__block__headerIMG_textLogan}>
                            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                        </div>
                    </div>

                </div>




            </div>
        </MainContainer>
    )
}

export default HeaderImage