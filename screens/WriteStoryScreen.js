import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Alert } from 'react-native';


export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        buttonState: 'normal'
      }
    }

    render() {
      const buttonState = this.state.buttonState;
        return(
          <View style={styles.container}>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30}}>Story Hub</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Write a story"/>
            </View>
            <TouchableOpacity 
            style={styles.submitButton}
            onPress={async()=>{}}>
              <Text style={styles.submitButtonText}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{ 
      backgroundColor: '#FBC02D', 
      width: 100, 
      height:50 }, 
    submitButtonText:{ 
      padding: 10, 
      textAlign: 'center', 
      fontSize: 20, 
      fontWeight:"bold", 
      color: 'white' 
  }
  });