import * as functions from 'firebase-functions';

//Google Assistant deps
import { dialogflow, SimpleResponse, BasicCard, Button, Image, BrowseCarousel, BrowseCarouselItem } from "actions-on-google";
import {getStatus, getUsers, getDevices} from "./networking"
import {getCarouselDevices, getCarouselUsers} from "./carouselProcess"
import {concatDevices, concatUsers} from "./utils"

const app = dialogflow({debug: true});
//Export Cloud Functions
export const fulfillment = functions.https.onRequest(app)


/**
 * Get the security sumamry information
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Security Status', async (conv) => {
    // Get the data
    const status = await getStatus();

    // Text or Speech Response
    conv.ask(new SimpleResponse({ 
        text: `Estado empresa`,
        speech: `${status.description}`,
    }));

    // Card Response
    conv.ask(new BasicCard({
        title: `${status.title}`,
        image: new Image({ 
            url: `${status.img}`,
            alt: 'Status report' 
        }),
        text: `${status.description}`
    }));
});

/**
 * Retrieve the users
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Users', async (conv) => {
    const users = await getUsers();
    const usersCarrousel = getCarouselUsers(users)
    const hasScreen = conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');

    conv.ask(new SimpleResponse({
        speech: 'Estos son tus usuarios',
        text: 'Estos son tus usuarios:',
      }));

    if(hasScreen){
        conv.ask(new BrowseCarousel({
            items: usersCarrousel
        }))
    } else {
        conv.ask(concatUsers(...users))
    }
})

/**
 * Retrieve the devices
 * @param {DialogflowConversation} conv DialogflowConversation instance
 * @return {void}
 */
app.intent('Get Devices', async (conv) => {
    const devices = await getDevices();
    const devicesCarousel = getCarouselDevices(devices)
    const hasScreen = conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');

    conv.ask(new SimpleResponse({
        speech: 'Estos son tus dispositivos',
        text: 'Estos son tus dispositivos:',
    }));

    if(hasScreen){
        conv.ask(new BrowseCarousel({
            items: devicesCarousel
        }))
    } else {
        conv.ask(concatDevices(...devices))
    }
})


