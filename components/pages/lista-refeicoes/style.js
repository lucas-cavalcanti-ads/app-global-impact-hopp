import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263140',
    borderRadius: 10,
    color: 'white',
    flexDirection: 'row',
    margin: 10,
    padding: 15,
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
    backgroundColor: '#151A21',
    flex: 1,
    padding: 12
  },  
  containerBotao: {    
    alignContent: 'center',
    alignItems: 'center'
  },      
  containerCard: {
    backgroundColor: '#151A21',
    borderWidth: 0.5,
    flex: 1,
    marginBottom: 5,
    padding: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  containerIcone: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  item: {
    color: 'white',
    flex: 1,
    margin: 10
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5
  },  
  listContainer: {
    backgroundColor: '#151A21',        
    marginTop: 20
  }  
});

export { styles };