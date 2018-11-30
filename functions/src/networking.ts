
//Web fetching 
import * as request from 'request';
import {User} from "./models/users"

/**
 * Retrieve information with request
 * @param {options} options Request options
 * @return {json | error} response of the rquest
 */
export function doRequest(options) {
    return new Promise(function (resolve, reject) {
      request(options, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
  }

/**
 * Retrieve the summary status of the business
 * @return {status} status of the business
 */
export async function getStatus() {
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

/**
 * Retrieve the summary of the devices
 * @return {Device[]} Devices retrieved
 */
export async function getDevices() {
    // const options = {
    //     url: '',
    //     headers: {
    //       'User-Agent': 'request'
    //     }
    // };
    //const list = await doRequest(options)
    return [
        {title: "HP Spectre X25", owner: "Santi Hernandez", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/hpspectre.jpg?alt=media&token=2d09092c-7c2d-43ec-bd79-0596b1596b9f"},
        {title: "HP Pavilion", owner: "Becario", status: "Ult. conx 19/11", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/hppavilion.png?alt=media&token=4c3940cb-d5d5-47d4-a863-c3c366f3b36a"},
        {title: "Macbook Pro 15", owner: "Lucas Fernandez", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/macbookpro.jpg?alt=media&token=6c04c132-933a-449c-94a9-945eec97fe04"},
        {title: "Dell XPS", owner: "Javi Gutierrez", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/dellxps.jpg?alt=media&token=d3e8f99d-4fb0-429e-aa10-b0249921f30f"},
    ]
}

/**
 * Retrieve the summary of the users
 * @return {User[]} Users retrieved
 */
export async function getUsers() {
    // const options = {
    //     url: '',
    //     headers: {
    //       'User-Agent': 'request'
    //     }
    // };
    //const list = await doRequest(options)
    return [
        {name: "Santi Hernandez", computer: "HP Spectre X25", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/santiago_foto.png?alt=media&token=3221114e-3fc2-4109-bd1a-42cd489029ef"},
        {name: "Lucas Fernandez", computer: "Macbook Pro 15", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/Avatar%20Background.png?alt=media&token=316d1cf5-2f34-4ec5-87d8-304e686bdf36"},
        {name: "Javi Gutierrez", computer: "Dell XPS", status: "Conectado", img: "https://firebasestorage.googleapis.com/v0/b/isecurity-176d0.appspot.com/o/javi.png?alt=media&token=b51e634e-c08a-417d-b1de-0f586960b21c"},
    ]
}