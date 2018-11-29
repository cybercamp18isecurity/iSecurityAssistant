"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
//Google Assistant deps
const actions_on_google_1 = require("actions-on-google");
const app = actions_on_google_1.dialogflow({ debug: true });
//Export Cloud Functions
exports.fulfillment = functions.https.onRequest(app);
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
function getStatus() {
    return __awaiter(this, void 0, void 0, function* () {
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
        };
    });
}
app.intent('Get Security Status', (conv) => __awaiter(this, void 0, void 0, function* () {
    // Get the data
    const data = yield getStatus();
    console.log("data: " + data);
    // Text or Speech Response
    conv.close(new actions_on_google_1.SimpleResponse({
        text: `Estado empresa`,
        speech: `${data.description}`,
    }));
    // Card Response
    conv.close(new actions_on_google_1.BasicCard({
        title: `Problemas con la conexión`,
        image: new actions_on_google_1.Image({
            url: `${data.img}`,
            alt: 'Status report'
        }),
        text: `${data.description}`
    }));
}));
//# sourceMappingURL=index.js.map