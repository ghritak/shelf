import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Colors } from '../../styles/Colors';
import { data } from '../../constants/guideData';

interface CardViewProps {
  item: { name: string; content: string; time: string };
  index: number;
  currentTime: Date;
  day: 'Today' | 'Yesterday' | 'Tomorrow';
}

const CardView = ({ item, index, currentTime, day }: CardViewProps) => {
  // Get the current date and set hours and minutes to zero for comparison
  const currentDate = new Date(currentTime);
  currentDate.setHours(0, 0, 0, 0);

  // Get the item's date based on the 'day' prop
  const itemDate = new Date(currentTime);
  if (day === 'Yesterday') {
    itemDate.setDate(currentDate.getDate() - 1);
  } else if (day === 'Tomorrow') {
    itemDate.setDate(currentDate.getDate() + 1);
  }

  // Parse item.time to get a Date object with the item's date and time
  const [hours, minutes] = item.time.split(':').map(Number);
  itemDate.setHours(hours, minutes, 0, 0);

  // Determine if the item has passed
  const isPassed = currentTime > itemDate;

  // Check if the next item has passed
  let nextItemPassed = false;
  if (index < data.length - 1) {
    const nextItem = data[index + 1];
    const nextItemDate = new Date(currentTime);
    if (day === 'Yesterday') {
      nextItemDate.setDate(currentDate.getDate() - 1);
    } else if (day === 'Tomorrow') {
      nextItemDate.setDate(currentDate.getDate() + 1);
    }
    const [nextHours, nextMinutes] = nextItem.time.split(':').map(Number);
    nextItemDate.setHours(nextHours, nextMinutes, 0, 0);
    nextItemPassed = currentTime > nextItemDate;
  }

  return (
    <View style={style.cardView}>
      <View style={style.dateCont}>
        <Text>{item?.time}</Text>
      </View>
      <View style={style.bar}>
        <View
          style={[
            style.locationCont,
            {
              backgroundColor: isPassed ? Colors.primary : 'white',
              borderWidth: isPassed ? 0 : 1,
              borderColor: 'gray',
            },
          ]}
        >
          {isPassed && <FontAwesome6 name='location-dot' color='white' />}
        </View>
        {index < data.length - 1 && (
          <View
            style={{
              width: 1.5,
              height: 60,
              backgroundColor:
                isPassed && nextItemPassed ? Colors.primary : '#999',
            }}
          />
        )}
      </View>
      <View style={style.data}>
        <Text style={style.name}>{item?.name}</Text>
        <Text style={style.content}>{item?.content}</Text>
      </View>
      <View style={style.weatherCont}>
        <View style={style.weather}>
          <FontAwesome6 name='cloud-meatball' size={20} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardView: { flexDirection: 'row' },
  dateCont: { width: '15%' },
  bar: { width: '10%', alignItems: 'center' },
  locationCont: {
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: { width: '60%', marginLeft: 6, marginTop: -6 },
  name: { fontWeight: '600' },
  weatherCont: { width: '15%' },
  weather: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  content: { marginTop: 3, color: 'gray' },
});

export default CardView;
