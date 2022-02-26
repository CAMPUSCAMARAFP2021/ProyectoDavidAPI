const getMeet = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3001/meet", {headers})
    .then(res => res.json())
}

const createMeet = async (meet, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({meet});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3001/meet", requestOptions)
        .then(response => response.json());
}

const deleteMeet = async (meet, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3001/meet/" + meet._id, requestOptions)
        .then(response => response.text());
}

export {
    getMeet,
    createMeet,
    deleteMeet

}