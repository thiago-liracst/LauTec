import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    container: {
        width: '100%',
        height: '85%',
        backgroundColor: '#c0c0c0'
    },

    buttons: {
        width: '98%',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    buttonNew:{
        backgroundColor: '#9c0000',
        padding: 20,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '45%',
      },

      buttonNewImovel:{
        backgroundColor: '#9c0000',
        padding: 20,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '95%',
      },
    
      textButtonNew: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 3,
      },

    buttonProp: {
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 8,
    },

    textButtonProp: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

})