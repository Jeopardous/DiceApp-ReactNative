import React from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity,Alert } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      uri1:require("./src/images/dice1.png"),
      uri2:require("./src/images/dice2.png"),
      uri3:require("./src/images/dice3.png"),
      uri4:require("./src/images/dice4.png"),
      uri5:require("./src/images/dice5.png"),
      uri6:require("./src/images/dice6.png"),
      dNumber:"Dice Code",
    };
  }

  getRandomNumber=()=>{
    
    return Math.floor(Math.random() * 6)+1;
  };

  playButtonPressed=()=>{
    //Alert.alert("Hey"+this.getRandomNumber());
    var rNumber=this.getRandomNumber();



    switch(rNumber){
        case 1:
        this.setState({uri1: require("./src/images/dice1.png")});
        this.setState({uri2: require("./assets/icon.png")});
        this.setState({uri3: require("./assets/icon.png")});
        this.setState({uri4: require("./assets/icon.png")});
        this.setState({uri5: require("./assets/icon.png")});
        this.setState({uri6: require("./assets/icon.png")});
        this.setState({dNumber:"dice code: "+rNumber})
  
        break;
        case 2:
        this.setState({uri1: require("./src/images/dice2.png")});
        this.setState({uri2: require("./src/images/dice2.png")});
        this.setState({uri3: require("./assets/icon.png")});
        this.setState({uri4: require("./assets/icon.png")});
        this.setState({uri5: require("./assets/icon.png")});
        this.setState({uri6: require("./assets/icon.png")});
        break;
        case 3:
        this.setState({uri1: require("./src/images/dice3.png")});
        this.setState({uri2: require("./src/images/dice3.png")});
        this.setState({uri3: require("./src/images/dice3.png")});
        this.setState({uri4: require("./assets/icon.png")});
        this.setState({uri5: require("./assets/icon.png")});
        this.setState({uri6: require("./assets/icon.png")});
        break;
        case 4:
        this.setState({uri1: require("./src/images/dice4.png")});
        this.setState({uri2: require("./src/images/dice4.png")});
        this.setState({uri3: require("./src/images/dice4.png")});
        this.setState({uri4: require("./src/images/dice4.png")});
        this.setState({uri5: require("./assets/icon.png")});
        this.setState({uri6: require("./assets/icon.png")});
        break;
        case 5:
        this.setState({uri1: require("./src/images/dice5.png")});
        this.setState({uri2: require("./src/images/dice5.png")});
        this.setState({uri3: require("./src/images/dice5.png")});
        this.setState({uri4: require("./src/images/dice5.png")});
        this.setState({uri5: require("./src/images/dice5.png")});
        this.setState({uri6: require("./assets/icon.png")});
        break;
        case 6:
        this.setState({uri1: require("./src/images/dice6.png")});
        this.setState({uri2: require("./src/images/dice6.png")});
        this.setState({uri3: require("./src/images/dice6.png")});
        this.setState({uri4: require("./src/images/dice6.png")});
        this.setState({uri5: require("./src/images/dice6.png")});
        this.setState({uri6: require("./src/images/dice6.png")});
        break;
        default:
        this.setState({uri: ""});
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
      <Text>{this.setState.dNumber}</Text>
        <Image 
        style={styles.image1}
        source={this.state.uri1}
        />
        <Image 
        style={styles.image2}
        source={this.state.uri2}
        />
        <Image 
        style={styles.image3}
        source={this.state.uri3}
        />
        <Image 
        style={styles.image4}
        source={this.state.uri4}
        />
        <Image 
        style={styles.image5}
        source={this.state.uri5}
        />
        <Image 
        style={styles.image6}
        source={this.state.uri6}
        />
        <TouchableOpacity onPress={this.playButtonPressed}>
        <Text style={styles.gamebutton}>Play game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E83350',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamebutton:{
    marginTop:20,
    borderWidth:2,
    borderRadius:5,
    fontSize:20,
    paddingVertical:15,
    borderColor:'#FFF',
    paddingHorizontal:30,
    color:'#FFFFFF',
    backgroundColor:'#4BCFFA'
  },
  image1:{
      width: 80,height:80,
      borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
      alignItems:"flex-start"
  },
  image2:{
    width: 80,height:80,
    alignItems:"flex-start",
    borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
},
image3:{
  width: 80,height:80,
  alignItems:"flex-start",
  borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
},
image4:{
  width: 80,height:80,
  alignItems:"flex-start",
  borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
},
image5:{
  width: 80,height:80,
  alignItems:"flex-start",
  borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
},
image6:{
  width: 80,height:80,
  alignItems:"flex-start",
  borderColor:'#000000',
      borderWidth:2,
      borderRadius:5,
},
});
