import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View>
         <Image style={{width: '100%', height:300}} source={{uri:'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
      </View>
      <View style={styles.box}>
        
        <Text style={styles.text}>User Name</Text>
        <View style={styles.box4}>

    </View>
   
        <Text style={styles.secondarytext}>Password</Text>
        <View style={styles.box5}>

    </View>
    </View>
      <View style={styles.box2}>
      <Text style={styles.textinside1}>Login</Text>

      </View>
      <View style={styles.box3}>
      <Text style={styles.textinside2}>Sign Up</Text>
      </View>
     </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box:{
    
    backgroundColor: "#0000",
    padding: 30,
    paddingTop: 100,
  },


  box2:{
    
    backgroundColor: "#B6B5D8",
    marginTop: 40,
    paddingBottom: 10,
    paddingTop:10,
    marginLeft: 40,
    marginRight: 40,
  },


  box3:{
    
    backgroundColor: "#B6B5D8",
    marginTop: 40,
    paddingBottom: 10,
    paddingTop:10,
    marginLeft: 40,
    marginRight: 40,
  },
  

  box4:{
    
    backgroundColor: "#D3D3D3",
    marginTop: 10,
    paddingBottom: 20,
    paddingTop:30,
    marginLeft: 5,
    marginRight: 5,
  },


  box5:{
    
    backgroundColor: "#D3D3D3",
    marginTop: 10,
    paddingBottom: 20,
    paddingTop:30,
    marginLeft: 5,
    marginRight: 5,
  },


text: {
  fontSize: 20,
  fontWeight: "400",
  textAlign: 'left',
  paddingTop: 10,

},


secondarytext: {
  fontSize: 20,
  fontWeight: "400",
  textAlign: 'left',
  paddingTop: 40,
  paddingBottom: 20,

},


textinside1: {
  fontSize: 30,
  fontWeight: "450",
  textAlign: 'center',
  textDecorationColor: "#0000"
},


textinside2: {
  fontSize: 30,
  fontWeight: "450",
  textAlign: 'center',
  textDecorationColor: "#0000"
},

});
