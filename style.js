import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Both Page
    container: {
      flex: 1,
      backgroundColor: '#fbbc05',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    startText:{
        color:'#575f5f',
        fontSize:24,
        fontWeight:'bold'
 
     },

    //Game Page
    questionText: {
      color: '#575f5f',
      fontSize: 18,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10
    },
    true: {
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#34A853',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      width: 150,
      marginRight:5
    },
    false: {
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#EA4335',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      width: 150,
      marginRight:5
    },
    again: {
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#EA4335',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      width: 300
    },
    //Home Page
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
  
  });

  export default styles;