import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263140',
    borderRadius: 10,
    color: 'white',
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    textAlign: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#151A21',
    flex: 1,
    justifyContent: 'center',
    padding: 16,    
  },
  containerBotao: {    
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  containerCard: {
    backgroundColor: '#151A21',
    padding: 30,
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },  
  containerInput: {
    alignItems: 'baseline',
    flexDirection: 'row'
  },  
  inputStyle: {
    backgroundColor: 'none',
    borderBottomColor: 'gray',    
    borderRadius: 1,
    color: 'white',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 5,
    width: 300
  }

});

export { styles };