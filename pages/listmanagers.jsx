import React, {useState} from 'react';
import MainContainer from "../components/MainContainer";
import {Spiner} from "../components/Spiner";
import Link from "next/link";
import {objAPI} from "../api/api";

const Listmanagers = () => {
    const [isLoading, setIsLoading] = useState(Boolean);
    let [users, setUsers] = useState([])

    const handleClick = () => {
        setIsLoading(true);
        objAPI.requestGETTUsers().then(userList => {
            setUsers(userList)
            setIsLoading(false)
        })
    }

    return (
        <MainContainer>
            <h1>List Managers</h1>
            {isLoading ? <Spiner /> : users?.map(e => {
                return (
                    <Link href={"/listmanagers"}>
                        <div key={e.id}>
                            {e.id}
                        </div>
                    </Link>

                )
            })}
            <button onClick={handleClick} disabled={isLoading}>Fetch Users</button>
        </MainContainer>
    );
};

export default Listmanagers;