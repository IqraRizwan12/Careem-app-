import { View, Text, Button, Image } from 'react-native'

export default function Dashboard({navigation}) {
  return <View style={{flex:1,justifyContent:'space-evenly',alignItems:'center',backgroundColor:'lightgreen'}}>
    {/* <Text>Dashboard</Text> */}
    <Image source={{uri: 'https://insights.datadarbar.io/wp-content/uploads/2022/05/Careem-1.jpeg'}} style={{width:390,height:200}}/>
    <Button title='Book a ride!' color='green' onPress={()=>navigation.navigate('Pickup')} />
  </View>
}