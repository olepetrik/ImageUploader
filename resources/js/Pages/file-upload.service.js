import * as axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

function upload(formData) {
    const url = `${BASE_URL}/api/images/upload`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
}

function getImages(userId) {
    const url = `${BASE_URL}/api/images/get/user/${userId}`;
    return axios.get(url)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/api/images/${img.id}` })));
}

export { upload }
