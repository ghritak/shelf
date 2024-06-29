import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Colors } from '../../../styles/Colors';
const Today = () => {
  return (
    <View style={{ padding: 30 }}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 6 }}
        renderItem={({ item, index }) => {
          return <CardView key={index} item={item} index={index} />;
        }}
      />
    </View>
  );
};

const CardView = ({ item, index }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: '15%' }}>
        <Text>00:00</Text>
      </View>
      <View style={{ width: '10%', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 50,
            width: 24,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome6 name='location-dot' color='white' />
        </View>
        {index < data.length - 1 && (
          <View
            style={{ width: 2, height: 70, backgroundColor: Colors.primary }}
          />
        )}
      </View>
      <View style={{ width: '60%', marginLeft: 6, marginTop: -6 }}>
        <Text>{item?.name}</Text>
        <Text style={{ marginTop: 3, color: 'gray' }}>{item?.content}</Text>
      </View>
      <View style={{ width: '15%' }}>
        <FontAwesome6 name='cloud-meatball' size={30} />
      </View>
    </View>
  );
};

const data = [
  { name: 'Maldives', content: 'Save the Turtles' },
  { name: 'Goledn Beach', content: 'Surfing on the sea' },
  { name: 'Coconut grove', content: 'BBQ party by the sea' },
  { name: 'Maldives Islands', content: 'Sea Blowing' },
];

export default Today;
