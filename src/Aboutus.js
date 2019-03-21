import React from "react";
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
import Headercomp from './Headercomp';


var {height, width} = Dimensions.get('window');

export default class Aboutus extends React.Component{

render(){

    return(
<View >
<Headercomp title="About us"/>

<View style={styles.container}>

<Image style={styles.image} source={require('../assets/aboutus.jpg')}></Image>
<Text style={styles.texts}>Just over a month ago, we became fascinated about making an voting app that can allow users of Pakistan to vote at home easily. 
What if you could vote at home without facing trouble of waiting in a long queue on voting day.
while there are many applications, but we wanted to build an application that is unique and can provide ease to nation.
</Text>
 <View style={styles.container}>
     
     
         <Text style={styles.text}>Areeba Ashraf (2017-CE-155)</Text>
        <Text  style={styles.text} >Muhammad Maaz (2017-CE-136)</Text>
     <Text  style={styles.text}>Basma Waheed (2017-CE-112)</Text>
        <Text  style={styles.text}>Ahmed Iqbal (2017-CE-107)</Text>
     
     
 </View>
</View>

</View>

    )
}

}

const styles= StyleSheet.create({

container:{
height:height,
width:width,
    flex:1,
    
    alignItems: "center",
    
    backgroundColor: '#eeeef1'
},
image:{
width: width,
height:200,

},
text:{
fontSize:24,
fontWeight:'bold',
color: '#813ad8',
fontFamily: 'Roboto_medium',
padding: 5



},
texts:{
    
        fontSize:18,
        fontWeight:'bold',
        color: '#813ad8',
        fontFamily: 'Roboto_medium',
        padding: 10
        
        
    
}


})