const getBrand = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3001/brand", {headers})
    .then(res => res.json())
}

const createBrand = async (brand, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({brand});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3001/brand", requestOptions)
        .then(response => response.json());
}

const deleteBrand = async (brand, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3001/brand/" + brand._id, requestOptions)
        .then(response => response.text());
}

export {
    getBrand,
    createBrand,
    deleteBrand

}