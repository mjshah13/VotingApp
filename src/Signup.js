import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,Dimensions
} from 'react-native';
import firebase from './firebase';
var {height, width} = Dimensions.get('window');

export default class Signup extends React.Component{



  constructor(props) {
    super(props);
   this.state = { 

      firstName: '',
      lastName:'',
      Cnic:'',
      homeAddress:'',
      fatherName:'',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      
    }
    
    
  
  }

  onSignup(){ 
    require("firebase/firestore");
   var auth=firebase.auth();
   var db=firebase.firestore();
   
   var {
     emailAddress,password,firstName,lastName,Cnic,fatherName,homeAddress
   } = this.state
    if(this.state.firstName==='' || this.state.lastName==='' || this.state.Cnic==='' ||this.state.homeAddress==='' ||this.state.fatherName==='' ||this.state.email==='' ||this.state.password==='' || this.state.confirmPassword==='' ){
  alert("All remaining fields are required!");
    }
     
        else if(this.state.password===this.state.confirmPassword) {
          auth.createUserWithEmailAndPassword(emailAddress,password)
          .then((data)=>{
              var useruid= data.user.uid;
              db.collection("Users").doc(useruid).set({
                firstName,
                lastName,
               fatherName,
               Cnic,
               emailAddress,
               homeAddress,
               vote : false
              }).then(()=>{
                alert("Registered!");
          this.props.navigation.replace("Signin");

              })
          })
          .catch(function(err){
            alert(err);
          })
          
          
        }
        else if(this.state.password!==this.state.confirmPassword){
          alert("Password doesn't match");
        }
        else{
          alert("Something went wrong!!");
        }
           
     
      
  }

  

  render() {
    return (
    
   
      <View style={styles.container}>
      
       <Text style={styles.heading}>Registration</Text>
       <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
             placeholder="First Name"
             value={this.state.firstName}
             underlineColorAndroid='transparent'
             onChangeText={(firstName) => this.setState({firstName})}/>
          
        </View>
        <View style={styles.inputContainer}>
         
         <TextInput style={styles.inputs}
             placeholder="Last Name"
             value={this.state.lastName}
             underlineColorAndroid='transparent'
             onChangeText={(lastName) => this.setState({lastName})}/>
       </View>
       <View style={styles.inputContainer}>
         
         <TextInput style={styles.inputs}
             placeholder="Father's Name"
             value={this.state.fatherName}
             underlineColorAndroid='transparent'
             onChangeText={(fatherName) => this.setState({fatherName})}/>
       </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="CNIC # (Without Hyphen)"
              value={this.state.Cnic}
              underlineColorAndroid='transparent'
              onChangeText={(Cnic) => this.setState({Cnic})}/>
        </View>
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Address"
              value={this.state.homeAddress}
              underlineColorAndroid='transparent'
              onChangeText={(homeAddress) => this.setState({homeAddress})}/>
        </View>
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Email Address"
              value={this.state.emailAddress}
              underlineColorAndroid='transparent'
              onChangeText={(emailAddress) => this.setState({emailAddress})}/>
        </View>
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={this.state.confirmPassword}
              underlineColorAndroid='transparent'
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
              
        </View>
        


        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=> this.onSignup()} >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

        </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:height,
    width:width,
    backgroundColor: '#eeeef1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderColor:'#eeeef1',

      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:40,
      marginBottom:20,
    
      
      fontWeight:"bold"
  },
  heading:{
   fontSize:34,
fontWeight:'bold',

marginBottom:15,
color:"#813ad8"
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:150,
        borderRadius:30,
        
  },
  signupButton: {
    backgroundColor: '#813ad8',
    alignItems: 'center'

  },
  signUpText: {
    alignItems: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 20
  }
});
