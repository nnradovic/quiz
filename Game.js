import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { apiService } from './apiService/apiService';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point:null,
      time: null,
      question: null,
      correct:null,
      questionNumber:null
    };
  }

  componentDidMount(){

     apiService.getQuestions()
    .then(res => {
       console.log(res);
       
       return res
        
    })
    .then(res =>{
      this.setState({
        time:0,
        point:0,
        question:res.results[0].question,
        correctAnswer:res.results[0].correct_answer,
        questionNumber:0
      })
    })

  }
  
  answerOnQuestion = (answer) =>{
    if(answer === this.state.correctAnswer){
  

       apiService.getQuestions()
       .then(res => {
          console.log(res);
          return res  
       })
       .then(res =>{
         this.setState({
           point: this.state.point+1,
           time:0,
           question:res.results[0].question,
           correctAnswer:res.results[0].correct_answer,
           questionNumber:this.state.questionNumber +1
         })
       })
    }else{
      apiService.getQuestions()
      .then(res => {
         console.log(res);
         return res  
      })
      .then(res =>{
        this.setState({
          
          question:res.results[0].question,
          correctAnswer:res.results[0].correct_answer,
          questionNumber:this.state.questionNumber +1
        })
      })
    }
  }
  render() {

    
    return (
      <View style={styles.container}>
        <Text>History Quiz</Text>
        <Text>{this.state.question}</Text>
        <Button
              style={styles.button}
              title='True'
              raised 
              onPress={()=>{this.answerOnQuestion('True')}}
          />
          <Button
              style={styles.button}
              title='False'
              raised 
              onPress={()=>{this.answerOnQuestion('False')}}
          />
          <Text>{this.state.point}</Text>
          { (this.state.questionNumber === 3) ? <Text>Kraj</Text>: <Text> </Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});