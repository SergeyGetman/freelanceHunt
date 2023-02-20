import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../components/styleComponent.module.scss";
import UserCircle from "../../components/UserCircle";
import React, {useEffect, useState} from "react";
import {objAPI} from "../../api/api";



 function HeaderImage () {

     const [usersForCircle, setUsersForCircle] = useState([])
     console.log("this is usersForCircle", usersForCircle)

     useEffect(() => {
         objAPI.getCircle().then(res => {
             setUsersForCircle(res.users)
         })
     },[])

    const router = useRouter()
    const {query} = router

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

                    <div className={styles.general__block_BTN__SignUp}>
                        <button>SIGN IN</button>
                    </div>

                </div>

                <div className={styles.general__block__users}>
                    {usersForCircle?.map((el, idx) => {
                        return (
                            <div key={idx}>
                                <UserCircle
                                image={el.photo}
                                name={el.name}
                                position={el.position}
                                email={el.email}
                                number={el?.phone}
                            />
                            </div>

                        )
                    })}
                </div>




            </div>
        </MainContainer>
    )
}

export default HeaderImage