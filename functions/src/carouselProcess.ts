import { dialogflow, SimpleResponse, BasicCard, Button, Image, BrowseCarousel, BrowseCarouselItem } from "actions-on-google";
import {User} from "./models/users"
import {Device} from "./models/devices"

/**
 * Transform list of devices into a Carousel
 * @param {Device[]} devices The devices to transform
 * @return {BrowseCarouselItem[]} List of BrowseCarouselItem
 */
export function getCarouselDevices(devices: Device[]) {
    var devicesCarousel = []
    for(var device of devices) {
        devicesCarousel.push(
            new BrowseCarouselItem({
                title: device.title.toString(),
                description: device.status.toString(),
                url: "https://firebasestorage.googleapis.com",
                image: new Image({
                    url: device.img,
                    alt: "device img"
                }),
                footer: device.owner.toString()
            }) 
        )
    }
    return devicesCarousel 
}

/**
 * Transform list of users into a Carousel
 * @param {User[]} users The users to transform
 * @return {BrowseCarouselItem[]} List of BrowseCarouselItem
 */
export function getCarouselUsers(users: User[]) {
    var usersCarrousel = []
    for(var user of users) {
        usersCarrousel.push(
            new BrowseCarouselItem({
                title: user.name.toString(),
                description: user.status.toString(),
                url: "https://firebasestorage.googleapis.com",
                image: new Image({
                    url: user.img,
                    alt: "device img"
                }),
                footer: user.computer.toString()
            })      
        )
    }
    return usersCarrousel
}