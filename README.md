#Calagator React Native

This is a calagator app built with React Native. It works on both iOS, and Android.


![http://i.imgur.com/loA0P1Q.gif](http://i.imgur.com/loA0P1Q.gif)
![http://i.imgur.com/ruWLkzX.gif](http://i.imgur.com/ruWLkzX.gif)

#### Install

//Assuming you have react native setup already, get started [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
* Clone the repo
* npm install
* npm install -g rnpm
* rnpm link

For Android edit `{{APIKEY}}` in `android/app/src/main/AndroidManifest.xml` and replace it with your google android api maps key.
To get that key follow these instructions

Go to [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=maps_android_backend&keyType=CLIENT_SIDE_ANDROID&pli=1) and select your project, or create one.  
In `Overview -> Google Maps API -> Google Maps Android API ` -> Check if it's enabled  
Create a new key by clicking on `Create credentials -> API Key -> Android Key`, enter the name of the API key and your SHA1 key, generated before, and create it.


All data provided by the amazing [http://calagator.org/](http://calagator.org/)
A great Android Calagator app already exists here [https://github.com/ubiquill/Calagator-Android](https://github.com/ubiquill/Calagator-Android)
I drew some inspiration from it so thanks ubiquill for building it.
