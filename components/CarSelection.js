import { View, Text } from 'react-native'

export default function CarSelection({route}) {
  const {pickupLocation,destinationLocation} = route.params
  console.log('p',pickupLocation)
  console.log('d',destinationLocation)
  return <View>
    <Text>CarSelection</Text>
    <Text> Pickup Location: {pickupLocation.name}</Text>
    <Text> Destination Location: {destinationLocation.coords.location.name}</Text>
  </View>
}