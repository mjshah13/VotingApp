import React from 'react';

import {TextInput, View, StyleSheet,Image,Text ,TouchableHighlight,Dimensions} from 'react-native';

import firebase from './firebase';


var {height, width} = Dimensions.get('window');


var myBackground = require('../assets/logonew.png');


 class Signin extends React.Component{


    constructor(props) {
        super(props);
        
        this.state = {
          emailAddress: '',
          password: '',

        };
        this.onLogin = this.onLogin.bind(this);
      }

  

      onLogin() {
        require("firebase/firestore");
   var auth=firebase.auth();
   var db=firebase.firestore();
        const { emailAddress, password } = this.state;
        

        if(emailAddress === ""){
          alert('Please enter emailAddress#')
          return 
        }
        else if(password===""){
          alert('Please enter password')
          return
        }
        else{
          
  
          auth.signInWithEmailAndPassword(emailAddress,password).then((data)=>{
            
           
            this.setState({emailAddress:'',password:''})
            this.props.navigation.replace('Home') 
          })
          .catch((err)=>{
            alert(err);
          })
        }

      
      }


 

      
  
    
      render() {
      
        return (
      
          <View style={styles.container}>

           <Image style={{height:350,width:350}} source={myBackground}></Image>
           <View style={styles.inputcontainer}>
           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
            <TextInput
              value={this.state.emailAddress}
              onChangeText={(emailAddress) => this.setState({ emailAddress })}
              
              placeholder={'***Email'}
              
            />
            </View>
            <View style={styles.inputcontainer}>
             <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput
            
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'***Password'}
              secureTextEntry={true}
              
            />
          </View>
            
    
          <TouchableHighlight style={[styles.buttonContainer, styles.signinButton]} onPress={() =>  this.onLogin()}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableHighlight>
    
            <View>
              <Text> Didn't Sign In?
                 
                 <Text style={styles.link}
      onPress={() => this.props.navigation.navigate("Signup")}>
  SignUp Now!
</Text></Text>
       
    
    
            </View>
            
            </View>
      
          
          
        )
      }
    }
    
    const styles = StyleSheet.create({
      container:{
      height:height,
      width:width,
        backgroundColor: "#eeeef1",
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          
            borderWidth:2,
          borderColor: '#eeeef1'
            
            
      },
      inputcontainer:{
        borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center',
      
      },
      
      
      buttonContainer: {
        height:45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:20,
            width:150,
            borderRadius:30,
            
      },
      signinButton: {
        backgroundColor: '#813ad8',
      },
      signinText: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 20
      
      },
    
      link:{
    color:'#813ad8',
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    

      }
      
    
    
    }
    
    
      
      
    );

    
    export default  Signin;
