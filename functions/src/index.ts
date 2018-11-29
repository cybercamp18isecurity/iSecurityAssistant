import * as functions from 'firebase-functions';


//Web fetching 

import * as request from 'request';

//Google Assistant deps
import { dialogflow, SimpleResponse, BasicCard, Button, Image } from "actions-on-google";
const app = dialogflow({debug: true});


//Export Cloud Functions
export const fulfillment = functions.https.onRequest(app)


// function doRequest(options) {
//     return new Promise(function (resolve, reject) {
//       request(options, function (error, res, body) {
//         if (!error && res.statusCode == 200) {
//           resolve(JSON.parse(body));
//         } else {
//           reject(error);
//         }
//       });
//     });
//   }


async function getStatus() {
    // const options = {
    //     url: '',
    //     headers: {
    //       'User-Agent': 'request'
    //     }
    // };
    //const list = await doRequest(options)

    return {
        title: "Estado correcto",
        description: "No hay ningún problema con la empresa, todo está correcto",
        img: "https://2.bp.blogspot.com/-iKEIPiGJRHk/Vx6iFC6B3cI/AAAAAAAAJ_E/M6D-4bPquqwGSobih7g2_62_7dc_0IibwCK4B/s320/Ok.jpg"
    }
}

app.intent('Get Security Status', async (conv) => {

    // Get the data
    const data = await getStatus();

    console.log("data: " + data)

    // Text or Speech Response
    conv.close(new SimpleResponse({ 
        text: `Estado empresa`,
        speech: `${data.description}`,
    }));

    // Card Response
    conv.close(new BasicCard({
        title: `Problemas con la conexión`,
        image: new Image({ 
            url: `${data.img}`,
            alt: 'Status report' 
        }),
        text: `${data.description}`
    }));
});
