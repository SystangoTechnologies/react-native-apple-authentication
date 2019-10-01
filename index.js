import { NativeModules, requireNativeComponent ,Platform } from 'react-native';

const { AppleAuthentication } = NativeModules;

export const RNSignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');

export const SignInWithAppleButton = (buttonStyle, callBack) => {
  if(Platform.OS === 'ios'){
    return <RNSignInWithAppleButton style={buttonStyle} onPress={async () => {
    
        await RNCAppleAuthentication.requestAsync({
          scopes: [RNCAppleAuthentication.Scope.FULL_NAME, RNCAppleAuthentication.Scope.EMAIL],
        }).then((response) => {
          callBack(response) //Display response
          }, (error) => {
            callBack(error) //Display error
           
        });

  }} />
  }else{
  return null

  }
   
}

export default AppleAuthentication;
