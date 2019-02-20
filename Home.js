import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity } from 'react-native';
import styles from './style'


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
