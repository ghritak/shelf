import React from 'react';
import { FlatList, View } from 'react-native';
import CardView from '../../ui/CardView';
import { data } from '../../../constants/guideData';
const Today = () => {
  const currentTime = new Date();
  return (
    <View style={{ padding: 30 }}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 20 }}
        renderItem={({ item, index }) => {
          return (
            <CardView
              key={index}
              item={item}
              index={index}
              currentTime={currentTime}
              day='Today'
            />
          );
        }}
      />
    </View>
  );
};

export default Today;
