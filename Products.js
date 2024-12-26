import { Text, View, Image, StyleSheet } from 'react-native';

function App (){
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
    <Text style={styles.topTitle}>Product Categories</Text>
    </View>


<View>
  <View style={styles.card}> 
    <Image style={styles.img} source={{uri:'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
    <View style={styles.cardTextGroup}>
    <Text style={styles.cardTitle}>Clothing</Text>
    </View>
  </View>

  <View style={styles.card}> 
    <Image style={styles.img} source={{uri:'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
    <View style={styles.cardTextGroup}>
    <Text style={styles.cardTitle}>Accessories</Text>
    </View>
  </View>

  <View style={styles.card}> 
    <Image style={styles.img} source={{uri:'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
    <View style={styles.cardTextGroup}>
    <Text style={styles.cardTitle}>Shoes</Text>
    </View>
  </View>

</View>

    </View>


  );
}

const styles = StyleSheet.create({

  wrapper:{
    flex: 1,
    padding: 20,
    paddingTop: 50,

  },

  topTitle:{
    fontSize: 35,
    fontWeight: 700,
    letterSpacing: -1,
    marginBottom: 0,
  },

  headerWrapper:{
    marginBottom: 16,
  },

  card:{
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 20,
  },

  img:{
    width:'100%', height: 250
  },

  cardTitle:{
    fontSize: 24,
    fontWeight: 600,
    
  },

  cardTextGroup:{
    position:'absolute',
    bottom:10,
    marginLeft: 10,
  },

})

export default App;