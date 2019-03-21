import React from 'react';
import { View } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';




 

  class Headercomp extends React.Component{
onSignout(){

this.props.navigation.replace("Signin");
}
 componentDidMount(){
   console.log('TitleProps' , this.props);
   
 }
    render(){
        
        return(
          <View style={{ zIndex : 100}}>
            <Header style={{backgroundColor: '#813ad8'}}>
            
            <Left>
            <Button transparent>
              <Icon name='menu' 
              onPress={()=> this.props.navigation.toggleDrawer()}
               />
            </Button>
          </Left>
          <Body style={{justifyContent:'center',alignItems:'center'}}>
            <Title style={{fontSize:24,fontWeight:'bold'}} >{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=> this.onSignout()}>
              <Text style={{fontSize:14,fontWeight:'bold'}}>Signout</Text>
            </Button>
          </Right>
          
            

            
            
            </Header>
            
            </View>
           




  

        )
        
    }

}
export default withNavigation(Headercomp);

 