# react-native-apple-authentication
This npm module is used for authentication using **Apple id** in **React Native** apps.
Apple sign-in only works with IOS platform and the setup guide considers the same.

## Getting Started

To install the module, run the following command in your project directory:

`$ npm install --save react-native-apple-authentication`

### Automatic Installation

From react-native version 0.60 we don't need to link any third party module separately but if you found it has not been included with your project then you can run the following:

`$ react-native link react-native-apple-authentication`

### Manual Installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-apple-authentication` and add `AppleSignIn.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libAppleSignIn.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

## Configure Project

## iOS

1. **Sign in with Apple is supportable from `XCode 11` and `iOS 13`. Although you can install XCode 11 on Mac Mojave 10.14.14 and later.** 
2. Before running the project set development team in the `Signing & Capabilities` tab so Xcode can create a provisioning profile that. If you've already created project and provisioning profile then ignore this.
3. **Add the `Sign In with Apple capability` in your project.** This will add an entitlement that lets your app use Sign In with Apple.
4. When you try to sign in, you'll see an `AUTH_ALERT_SIGN_UP_NOT_COMPLETED` error message. Signing in won't work in your application until you create a key with Sign in with Apple enabled in your developer account.
5. To enable Sign In with Apple in your developer account you need to create an `Auth Key` with Sign In with Apple. on your developer account.
6. If you don’t see the Sign in with Apple listed when you create a key the you're probably in an Enterprise team. Just creating the key should sufficent for now, you will only need to download it when you want to support Sign in with Apple from somewhere other than your application.
7. If you're creating a key for grouped app then create a key for your primary App ID in order to implement Sign In with Apple. This key will also be used for any App IDs grouped with the primary. The user will see your primary app's icon at sign in and in their Apple ID account settings.
8. Test this on real iPhone device 

## Usage
```javascript

import { SignInWithAppleButton } from 'react-native-apple-authentication'
export default class App extends React.Component{

  render(){
    return(
    <View style = {styles.container}>
     {SignInWithAppleButton(styles.appleBtn, this.appleSignIn)}
    </View>)

  }

  appleSignIn = (result) => {
    console.log('Resssult',result);
  };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appleBtn: { height: 44, width: 200 }
});
```


