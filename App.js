//import stuff
import React from 'react';
import { Text, View, StyleSheet,Platform,Image,SafeAreaView} from 'react-native';
import { createDrawerNavigator,createAppContainer,createStackNavigator,DrawerItems } from 'react-navigation';
import {Font} from 'expo';
import Signup from './src/Signup';
import Signin from './src/Signin';
import Home from './src/Home';
import Imran from './src/Imran';
import Bilawal from './src/Bilawal';
import Farooq from './src/Farooq';
import Shehbaz from './src/Shehbaz';
import Siraj from './src/Siraj';
import Aboutus from './src/Aboutus';
import { Icon } from 'native-base';

//create stuff
 export default class App extends React.Component{
   state={

    fontLoad:false,
   }
  async componentDidMount() {
    try{
      await Font.loadAsync({
        'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({fontLoad : true})
    }
    catch(e){
      console.log(e);  
    }
  }
    
   
  render(){
    console.disableYellowBox = true;
    var {fontLoad}=this.state;
    return( 
      <View style={styles.container}>
     {fontLoad && 
  <MyApp/>
  
  }
  
      </View>
    );
  }

}


const styles=StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#eeeef1',
    height:'100%',
    width:'100%'
  
    
  
    
  }
});

    
const MyDrawerNavigator = createDrawerNavigator({
  
  Home :{
    screen: Home,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Home',
      drawerIcon: () => (
<Icon name='home'/>
      )},

   
  },
  Imran:{
    screen: Imran,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Imran Khan',
      drawerIcon: () => (
<Icon name='person'/>
      )}
  },
 
  
  Bilawal : {
    screen: Bilawal,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Bilawal Bhutto',
      drawerIcon: () => (
<Icon name='person'/>
      )}
  },
  Farooq: {
    screen: Farooq,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Farooq Sattar',
      drawerIcon: () => (
<Icon name='person'/>
      )}
  },
  Shahbaz:{
    screen: Shehbaz,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Shahbaz Sharif',
      drawerIcon: () => (
<Icon name='person'/>
      )}
  },
  Siraj:{
    screen: Siraj,
    navigationOptions: {
      style: 30,
      drawerLabel: 'Siraj-ul-Haq',
      drawerIcon: () => (
<Icon name='person'/>
      )}
  },
  Aboutus:{
    screen:Aboutus,
    navigationOptions:{

      style: 30,
      drawerLabel: 'About Us',
      drawerIcon: () => (
<Icon name='bulb'/>
      )
    }
  }

    
},{
  contentOptions:{
    labelStyle: {
fontSize:18,
fontWeight: 'bold',

    },
    inactiveBackgroundColor: 'white',
    inactiveTintColor: 'black',
    activeBackgroundColor:'#eeeef1',
    activeTintColor: '#813ad8',
    itemsContainerStyle: {
      marginBottom: 20

    },
    iconContainerStyle: {
      opacity: 1
    }
  }
});
const AppNavigator = createStackNavigator({
  Signin:{ 
    screen: Signin,
  },
  Signup: {
    screen: Signup,
 },
 Home : {
    screen : MyDrawerNavigator
 },
 Imran : {
   screen : Imran
 },
 
Bilawal_Bhutto : {
  screen: Bilawal
},
Farooq_Sattar: {
  screen: Farooq
},
Shahbaz_Sharif:{
  screen: Shehbaz
},
Siraj_ul_Haq:{
  screen: Siraj
},
Aboutus:{
  screen: Aboutus
}

},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
const  MyApp = createAppContainer(AppNavigator);