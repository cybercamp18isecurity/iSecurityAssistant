# iSecurity Assistant

Virtual Assistan for iSecurity

## Getting Started

Virtual Assistant uses Google Actions to run a personal assistant that uses NPL and Intent Recognition, in addition to Cloud Functions, to retrieve the status of a business and display it throught a variety of devices.

### Prerequisites

You need to have a code editor like Visual Studio Code or Atom to edit the cloud functions, also create a new Action in Google Action with a new project in Firebase.

* [Google Actions](https://developers.google.com/actions/) - Host of the virtual assistant
* [Firebase](https://firebase.google.com) - Cloud functions


### Installing

Download npm, node and the project, then install firebase tools and init the project

* [NPM](https://www.npmjs.com) - Package manager for node
* [Node.js](https://nodejs.org/en/) - Javascript framework for server side


Go to the project and run

```
npm install firebase-tools -g
```

Then initialize functions

```
firebase init functions
cd functions
```

Lastly, we will add the Actions on Google package, which also provides everything we need to work with Dialogflow.

```
npm install actions-on-google --save
```


## Deployment

Deploy the function to firebase

```
firebase deploy --only functions
```

Copy the url of the cloud function in the console of firebase

Paste it in the fullfilment part of Dialogflow

* [Dialogflow](https://dialogflow.com) - Build natural and rich conversational experience

## Authors

* **Lucas Fernandez** - *Initial work* - [Github](https://github.com/lucferbux)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Angular Firebase, best page to learn Angular

