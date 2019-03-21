        import React, { Component } from 'react';
        import { View ,StyleSheet,Image,ImageBackground,Dimensions,ScrollView} from 'react-native';

        import { Text } from 'native-base';
        import Headercomp from './Headercomp';
        import firebase from './firebase';

        var {height, width} = Dimensions.get('window');
        export default class Imran extends React.Component{

        state = {
        votes : ''
        }
        componentDidMount(){
        var { votes } = this.state
        require("firebase/firestore");
        var db=firebase.firestore();

        db.collection('Candidates').where('Name' , '==' , 'Siraj-ul-Haq')
        .onSnapshot((snapshot)=>{
        snapshot.docChanges().forEach((change)=>{
          votes = change.doc.data().Votes
          this.setState({votes})
        })
        })

        }
        render(){

        var { votes } = this.state

        return(



        <View style={styles.Container}>
        <Headercomp title='Siraj-ul-Haq'/>
        <ScrollView>
        <View style={{alignItems:'center'}}>

        <ImageBackground style={styles.pro} source={require('../assets/jamiatFlag.png')}>
          



        <View>
        <Image  style={styles.candidate} source={require('../assets/Siraj.jpg')} ></Image>

        </View>

        </ImageBackground>
        <View style={styles.name} >
        <Text style={styles.title} >Siraj-Ul-Haq</Text>
        </View>
        <View style={styles.info}>
        <Text style={{fontSize: 24, color: 'blue', fontWeight: 'bold'}} >

        About

        </Text>
        </View>

        <View style={styles.info}>
        <Text style={styles.font} >
        Party: Jamaat-e-Islami



        </Text>
        </View>
        <View style={styles.info}>
        <Text style={styles.font} >

        PS: 67 (Steel Town)

        </Text>
        </View>
        <View style={styles.info}>
        <Text style={styles.font} >

        NA: 269 (Nagan)
        </Text>
        </View>
        <View style={styles.info}>
        <Text style={{fontSize: 24, color: 'blue', fontWeight: 'bold'}} >

        Votes
        </Text>
        </View>
        <View style={styles.vote}>
        <Text style={{fontSize: 40,fontWeight: 'bold',color: 'green'}}>{votes}</Text>

        </View>

        </View>
        </ScrollView>
        </View>


        );
        }
        }




        const styles=StyleSheet.create({
        Container:{
        width: width,
        height: height,

        flex:1,
        backgroundColor: '#813ad8',


        },
        title:{
        fontWeight:'bold',
        color: "green",


        fontSize: 34
        },
        name :{ 
        width: "90%",
        height: 40,
        borderRadius: 20,
        backgroundColor: "#eeeef1",
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
        },
        pro:{

        width:width,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center'


        },
        candidate:{
        marginTop: 20,

        width: 150,
        height:150,
        borderRadius: 150,





        },
        info:{
        width: "75%",
        height: 35,
        borderRadius: 20,
        backgroundColor: '#eeeef1',
        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 5,
        marginTop: 5,


        },
        font: {
        fontSize: 18,
        color:  'green',
        fontWeight: 'bold',




        },
        vote:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: "50%",
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 5

        }

        })


