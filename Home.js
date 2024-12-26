import { Text, View, Image, StyleSheet } from 'react-native';

function App (){
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
    <Text style={styles.topTitle}>Hello Ovini!</Text>
    </View>


<View>
  <View style={styles.card}> 
    <Image style={styles.img} source={{uri:'https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
    <View style={styles.cardTextGroup}>
    <Text style={styles.cardTitle}>Trending Now!</Text>
    </View>
  </View>

  <View style={styles.box}>
          
          <View style={styles.box1}>
                <Text style={styles.textInside1}>Up to 50% year end discount sale</Text>
  
      </View>
      <View style={styles.box2}>
                <Text style={styles.textInside2}>Free delivery for order above Rs. 3000</Text>
  
      </View>
      <View style={styles.box3}>
                <Text style={styles.textInside3}>Redeem your loyalty points </Text>
  
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
    paddingTop: 90,

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
    width:'100%', height: 300
  },

  cardTitle:{
    fontSize: 24,
    fontWeight: 600,
    
  },

  cardTextGroup:{
    position:'absolute',
    marginLeft: 10,
    paddingTop: 5,
  },

  box1:{
    
    backgroundColor: "#B6B5D8",
    marginTop: 40,
    paddingBottom: 20,
    paddingTop:20,
    paddingLeft: 90,
    paddingRight: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  box2:{
    
    backgroundColor: "#B6B5D8",
    marginTop: 40,
    paddingBottom: 20,
    paddingTop:20,
    paddingLeft: 80,
    paddingRight: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  box3:{
    
    backgroundColor: "#B6B5D8",
    marginTop: 40,
    paddingBottom: 20,
    paddingTop:20,
    paddingLeft: 110,
    paddingRight: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  textinside1: {
    fontSize: 40,
    fontWeight: "450",
    textAlign: 'center',
    textDecorationColor: "#0000"
  },

  textinside2: {
    fontSize: 40,
    fontWeight: "450",
    textAlign: 'center',
    textDecorationColor: "#0000"
  },

  textinside3: {
    fontSize: 50,
    fontWeight: "450",
    textAlign: 'center',
    textDecorationColor: "#0000"
  },

})

export default App;