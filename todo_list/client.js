// fetch("http://localhost:7777/tasks")
//     .then(res=> {
//         res
//             .json()
//             .then((body)=>console.log(body))
//             .catch(err=>console.error(err));

//     })
//     .catch(err => console.error(err))
//     .finally(()=>console.info("done."))


// async function client() {
//     try {
//         const res = await fetch("http://localhost:7777/tasks");
//         const body = await res.json();
//     } catch(err) {
//         console.log("ERROR!!!",err)
//     }
//     console.log(body);
// };

// client();


//-------------------------------
//jiny zpusob s axios (misto fetch) - musim nainstalovat npm install axios

const axios = require("axios");
axios.default.get("http://localhost:7777/tasks").then(res => console.log(res.data));


async function client() {
    try {
        const axios = require("axios");
        axios.default.get("http://localhost:7777/tasks").then(res => console.log(res.data));
    } catch(err) {
        console.log("ERROR!!!",err)
    }
    console.log(body);
};

client();

