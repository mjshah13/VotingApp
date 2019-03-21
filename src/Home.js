import React from 'react';
import { TouchableHighlight,View ,Picker,Text,StyleSheet,Dimensions} from 'react-native'
import Headercomp from './Headercomp';
import firebase from './firebase';

var {height, width} = Dimensions.get('window');
       

export default class Home extends React.Component {
  
  state={
    Candidateprovincial: '',
    Candidatenational:'',
    userUid : ''
    
  }
  
  componentDidMount(){
    var userUid = firebase.auth().currentUser.uid
    this.setState({userUid})
    
  }
  
  onVote=()=>{
    require("firebase/firestore");
    var auth=firebase.auth();
    var db=firebase.firestore();
    var { userUid,Candidatenational,Candidateprovincial } = this.state
    if(this.state.Candidatenational==='' || this.state.Candidateprovincial===''){
      alert("Please select a candidate");
      return
    }
    db.collection('Users').doc(userUid).get()
      .then((data)=>{
          
          if(data.data().vote) {
            alert("Already Voted!");
            return
          }

          db.collection('Candidates').where('Name' , '==' , Candidatenational)
          .get()
          .then((data)=>{
              data.forEach((doc)=>{
                  votes = doc.data().Votes
                  uid = doc.id
    
                  db.collection("Candidates").doc(uid).set({
    
                    Votes : votes + 1
                  } , {merge : true})
                  db.collection('Users').doc(userUid).set({
                    vote : true
                  } , {merge : true})
              })
        
            })

          db.collection('Candidates').where('Name' , '==' , Candidateprovincial)
          .get()
          .then((data)=>{
              data.forEach((doc)=>{
                  votes = doc.data().Votes
                  uid = doc.id
    
                  db.collection("Candidates").doc(uid).set({
    
                    Votes : votes + 1
                  } , {merge : true})
                  db.collection('Users').doc(userUid).set({
                    vote : true
                  } , {merge : true})
              })
          })
    alert("Successfully voted!");
      })
    
      

  
  
}

render() {
  
  
  
    return (
      <View style={{backgroundColor:'#eeeef1',height:'100%',width:'100%'}}>
        <Headercomp title={'Home'} />
         <View style={styles.container}>
         <View style={{alignItems:'center',borderRadius:25,width:'90%',height:50,backgroundColor:'#813ad8',marginBottom:80}}>
              <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}> Voting Area</Text>
</View>
      
      <View style={styles.heading}>
        <Text style={styles.text}>Select Candidate For Provincial Assembly</Text>
      </View> 
      <Picker
  selectedValue={this.state.Candidateprovincial}
  style={styles.picker}
  onValueChange={(itemValue) =>
    this.setState({Candidateprovincial: itemValue})
  }>
  <Picker.Item label="Select Candidate" value = ""/>
  <Picker.Item label="Imran Khan" value="Imran Khan" />
  <Picker.Item label="Bilawal Bhutto" value="Bilawal Bhutto" />
  
  <Picker.Item label="Farooq Sattar" value="Farooq Sattar" />
  <Picker.Item label="Shahbaz Sharif" value="Shahbaz Sharif" />
  <Picker.Item label="Siraj-ul-Haq" value="Siraj-ul-Haq" />
</Picker>

 
<View style={styles.heading}>
        <Text style={styles.text}>Select Candidate For National Assembly</Text>
      </View> 
      <Picker
  selectedValue={this.state.Candidatenational}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({Candidatenational: itemValue})
  }>
  <Picker.Item label="Select Candidate" value = ""/>
  <Picker.Item label="Imran Khan" value="Imran Khan" />
  <Picker.Item label="Bilawal Bhutto" value="Bilawal Bhutto" />

  <Picker.Item label="Farooq Sattar" value="Farooq Sattar" />
  <Picker.Item label="Shahbaz Sharif" value="Shahbaz Sharif" />
  <Picker.Item label="Siraj-ul-Haq" value="Siraj-ul-Haq" />
</Picker>

<View style={{alignItems:'center',justifyContent:'center'}}>


<TouchableHighlight style={[styles.buttonContainer, styles.signinButton]} onPress={() =>  this.onVote()}>
          <Text style={styles.signinText}>Vote</Text>
        </TouchableHighlight>
        </View>
</View>

</View>




    )
  }
}
const styles= StyleSheet.create({
container: {
  flex:1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
width: width
},
heading:{
  width: width,
  height: 35,
  alignItems: 'center',
  borderRadius: 10,
  

},
text:{
  fontWeight:'bold',
  fontSize: 16,
  color: '#813ad8'
},
picker:{
  height: 50,
  width: 300,
  alignItems:'center',
  marginBottom:20
  

},

      
buttonContainer: {
  height:45,
      
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
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

})


