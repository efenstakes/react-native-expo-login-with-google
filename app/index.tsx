import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'expo-dev-client'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const index = () => {

  GoogleSignin.configure({
    webClientId: '834293716338-r6eovllbh7eq5ln06d10h7ov6udh92bd.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    // const { idToken, } = await GoogleSignin.signIn();
    const sInfo = await GoogleSignin.signIn();

    console.log('====================================');
    console.log("sInfo ", sInfo);
    console.log('====================================');
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(sInfo.idToken);
  
    // Sign-in the user with the credential
    const info =  await auth().signInWithCredential(googleCredential);


    console.log('====================================');
    console.log("info ", info);
    console.log('====================================');

    const firebaseIdToken = await auth().currentUser.getIdToken();

    console.log('====================================');
    console.log("firebaseIdToken ", firebaseIdToken);
    console.log('====================================');
  }

  return (
    <View>
      <Text>
        Home No
      </Text>

      <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})