/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Button,
  ButtonProps,
  ButtonProperties,
  TextInput,
  TextInputComponent,
  Alert,
  ScrollView,
  TouchableOpacity
  
} from 'react-native';

const widthMobile = Dimensions.get('screen').width
const heightMobile = Dimensions.get('screen').height
//const instructions = Platform.select({
  //ios: 'Press Cmd+R to reload,\n' +
  // 'Cmd+D or shake for dev menu',
//  android: 'Double tap R on your keyboard to reload,\n' +
  //  'Shake or press menu button for dev menu',
//});
type Props = {};

export default class Depositos extends Component<Props> {
  
  static navigationOptions = {
    title: 'Login',
    header: null,
   
  }

  constructor(parametro){
    super(parametro);
    
    this.state = {senha: 'senha', email: 'Email'};
    
  }

  render() {

    return (


      <ImageBackground 
      style={styles.backgroundImage} 
      source={require('../../../resources/All-Coin-Wallets.jpg')}
      imageStyle={{resizeMode: 'stretch'}}
      >

      

      < Text style ={styles.welcome}> Login </Text>

             <TextInput
        style={styles.textInput}
         multiline = {false}
         editable = {true}
         underlineColorAndroid = {'transparent'}
         maxLength = {40}
         onChangeText={(email) => this.setState({email})}
         selectTextOnFocus= {true}
         value={this.state.email}

       />

                   <TextInput
         style={styles.textInput}
         multiline = {false}
         editable = {true}
         underlineColorAndroid = {'transparent'}
         maxLength = {40}
         onChangeText={(senha) => this.setState({senha})}
         value={this.state.senha}
         secureTextEntry={true}
         selectTextOnFocus= {true}

       />
<View style={styles.button}>

</View>
      </ImageBackground>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

   
  },

  button: {
    flex : 1,
    top: 145,
    width: 140

  },

  welcome: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32,
    top: 85

  },
  instructions: {
 textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    
  },
  backgroundImage: {
    width: widthMobile,
    height: heightMobile,
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#bcbec1'
    
  },

  textInput: {
    
textAlign: 'center',
 
marginBottom: 7,
 
height: 40,
backgroundColor: '#ffffff',
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#D50000',
 
 // Set border Radius.
 borderRadius: 6 ,
 width : 250,
 top: 135
 
  }


});
