import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity } from 'react-native';

export default class Friends extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.startText}>Hello, take our Quizz!!!</Text>
                <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() =>
                    this.props.navigation.navigate('Game')
                }
                underlayColor='#fff'>
                <Text style={styles.loginText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbbc05',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText:{
       color:'#575f5f',
       fontSize:24,
       fontWeight:'bold'

    },
    loginScreenButton:{
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#EA4335',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:300
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      }
});