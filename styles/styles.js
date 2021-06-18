const React = require('react-native');
const { StyleSheet } = React;

export default {
    container: {
        flex: 1
      },
      result: {
        backgroundColor: '#131515',
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderBottomColor: '#119da4',
        borderBottomWidth: 1
      },
      calculate: {
        backgroundColor: '#131515',
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
        borderBottomColor: '#119da4',
        borderBottomWidth: 1
      },
      buttons: {
        flex: 7,
        flexDirection: 'row'
      },
      numbers: {
        backgroundColor: '#131515',
        flex: 3,
        borderRightColor: '#119da4',
        borderRightWidth: 1
      },
      operator: {
        backgroundColor: '#131515',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
      },
      resultText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#44a1a0'
      },
      calculateText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#44a1a0'
      },
      row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      number: {
        color: '#44a1a0',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
      }
};