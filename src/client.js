const axios = require('axios');

// TODO make this use the json api
let muraDocURL = 'https://docs.murasoftware.com/index.cfm/_api/json/v1/v10/content/';

async function getPage() {
    try {    
        let result = await axios.default.get(muraDocURL);
        console.log(result.data.data.items.length);
        let items = result.data.data.items;
        for (let item  of items) {
            console.log(item);
        }
    } catch (error) {
        console.log(error);
    }
}

getPage();

export { getPage };