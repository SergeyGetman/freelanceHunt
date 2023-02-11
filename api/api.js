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

export const objAPI = {
    requestGETTUsers: handleFetch,
    getProducts: getStaticProps
}



