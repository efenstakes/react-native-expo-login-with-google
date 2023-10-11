# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)


## Login With Google (How To)

Create an expo app with
```sh
npx create-expo-app -e with-router
```

Install firebase package
npm install --save @react-native-firebase/app @react-native-firebase/auth

Go to
https://rnfirebase.io/auth/social-auth#google

navigate to
https://github.com/react-native-google-signin/google-signin#expo-installation

Install expo dev build
npx expo install expo-dev-client

Create ease build. Docs for creating builds csn be found here: https://docs.expo.dev/develop/development-builds/create-a-build/.

Android
`eas build --profile development --platform android`

iOS
`eas build --profile development --platform ios`

iOS Simulator
`eas build --profile development-simulator --platform ios`

eas.json config for iOS simulator
```
{
  "build": {
    
    // other builds here

    "development-simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    }
  }
}

```


in App.tsx
import 'expo-dev-client'


Install google signin
npx expo install @react-native-google-signin/google-signin

Add  @react-native-google-signin/google-signin to app.json, android section:
```
"plugins": [
    "expo-router",
   "@react-native-google-signin/google-signin"
],
```


Go to firebase console and create an app. Add ios and android apps.

Android
When registering the app, you need your apps package name, Debug signing certificate SHA-1 (optional)

For Debug signing certificate SHA-1 (optional)
Run `eas credentials` on your terminal to get the sha1 signin key

click `platform` i.e android
click the build type ex. `development`
click `Keystore: Manage everything needed to build your project`
click `Set up a new keystore`

on second `Configuration: Build Credentials JR9ByjpwhV `, select `SHA1 Fingerprint` and use it in firebase android register app `Debug signing certificate SHA-1 (optional)`

click next till you are done registering app.
click the android app in the dashboard and click the settings cog beside it.
Go to `Your apps` section at the bottom.

Now on the first `Configuration: Build Credentials (Default)` in the terminal, select `SHA1 Fingerprint` and add it to the `sha certificate fingerprints` for the app whose package is same as yours.

Go to authentication annd enable the auth login types you want.
Download `google-services.json` file now.

In `app.json`, `android` section, add 
    `"googleServicesFile": "./google-services.json",`
To specify location of google services file


Rebuild Project Now
`eas build --profile development --platform android`

After buils is done, scan the QR code given or copy link and open it in your device.

On the site opened, click `install` or click the ellipsis and click `Download Build`

Install and open the app.

In your terminal, start expo dev client
```
npx expo start --dev-client
```

Scan the new QR Code and it will open your app.

```
    GoogleSignin.configure({
    webClientId: '',
  });
```

To get this `webClientId`, go to `google-services.json` file `oauth-client`, `client_type: 3` and copy its `client_id`. That is the `webClientId`.

To save info to an API, go to the `firebase console`, select your project, select the  `Project Overview` settings cog, in the `dashboard`, click `service accounts`.

Select you preferred language.
Download firebase admin config by clicking the `Generate new private file` button.

To get idToken to authenticate on the server, use
```
     const firebaseIdToken = await auth().currentUser.getIdToken();
```

My package name

