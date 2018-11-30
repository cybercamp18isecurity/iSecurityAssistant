
import {User} from "./models/users"

/**
 * Concatenates a list of users into a single string.
 * @param {User[]} users The users to concat
 * @return {string} The concatenated users.
 */
export const concatUsers = (...users) => users.map((user) => user.name.trim()).join(' ');


/**
 * Concatenates a list of devices into a single string.
 * @param {User[]} messages The devices to concat
 * @return {string} The concatenated devices.
 */
export const concatDevices = (...devices) => devices.map((device) => device.title.trim()).join(' ');