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
const networking_1 = require("./networking");
const carouselProcess_1 = require("./carouselProcess");
const utils_1 = require("./utils");
const app = actions_on_google_1.dialogflow({ debug: true });
//Export Cloud Functions
exports.fulfillment = functions.https.onRequest(app);
/**
 * Get the security sumamry information
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Security Status', (conv) => __awaiter(this, void 0, void 0, function* () {
    // Get the data
    const status = yield networking_1.getStatus();
    // Text or Speech Response
    conv.ask(new actions_on_google_1.SimpleResponse({
        text: `Estado empresa`,
        speech: `${status.description}`,
    }));
    // Card Response
    conv.ask(new actions_on_google_1.BasicCard({
        title: `${status.title}`,
        image: new actions_on_google_1.Image({
            url: `${status.img}`,
            alt: 'Status report'
        }),
        text: `${status.description}`
    }));
}));
/**
 * Retrieve the users
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Users', (conv) => __awaiter(this, void 0, void 0, function* () {
    const users = yield networking_1.getUsers();
    const usersCarrousel = carouselProcess_1.getCarouselUsers(users);
    const hasScreen = conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');
    conv.ask(new actions_on_google_1.SimpleResponse({
        speech: 'Estos son tus usuarios',
        text: 'Estos son tus usuarios:',
    }));
    if (hasScreen) {
        conv.ask(new actions_on_google_1.BrowseCarousel({
            items: usersCarrousel
        }));
    }
    else {
        conv.ask(utils_1.concatUsers(...users));
    }
}));
/**
 * Retrieve the devices
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Devices', (conv) => __awaiter(this, void 0, void 0, function* () {
    const devices = yield networking_1.getDevices();
    const devicesCarousel = carouselProcess_1.getCarouselDevices(devices);
    const hasScreen = conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');
    conv.ask(new actions_on_google_1.SimpleResponse({
        speech: 'Estos son tus dispositivos',
        text: 'Estos son tus dispositivos:',
    }));
    if (hasScreen) {
        conv.ask(new actions_on_google_1.BrowseCarousel({
            items: devicesCarousel
        }));
    }
    else {
        conv.ask(utils_1.concatDevices(...devices));
    }
}));
//# sourceMappingURL=index.js.map