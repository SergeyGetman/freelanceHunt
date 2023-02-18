import {response} from "express";

const handleFetch = () => {
    return fetch("https://reqres.in/api/users?page=0")
        .then(response => response.json())
        .then((response) => {
            return  response.data
        })
        .catch(() => {
                console.error("Server error");
            }
        )
};


const getStaticProps = () => {
    return  fetch('https://fakestoreapi.com/products').then(r => r.json())
        .then((response) => {
            return response
        })
        .catch(() => {
            console.error("Server error")
        })
}

const getStaticList = () => {
    const users =  fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
    const photo =  fetch("https://jsonplaceholder.typicode.com/photos").then(r => r.json());

    return Promise.all([users, photo]).then(values => {
        return values;
    })
}

const getUsersCircleComponent = () => {
    return  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
        .then(response => {
            console.log("response users", response)
        })
}

export const objAPI = {
    requestGETTUsers: handleFetch,
    getProducts: getStaticProps,
    getListData: getStaticList,
    getUsersCircle: getUsersCircleComponent
}



