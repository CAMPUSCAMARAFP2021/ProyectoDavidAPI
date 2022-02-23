const getBalls = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3001/balls", {headers})
    .then(res => res.json())
}

const createBalls = async (ball, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({ball});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3001/balls", requestOptions)
        .then(response => response.json());
}

const deleteBall = async (ball, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3001/balls/" + ball._id, requestOptions)
        .then(response => response.text());
}

export {
    getBalls,
    createBalls,
    deleteBall

}