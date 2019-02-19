import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello take our history Quizz!!!</Text>
        <Button
          title="Play Game"
          onPress={() =>
            this.props.navigation.navigate('Game')
          }
        />
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