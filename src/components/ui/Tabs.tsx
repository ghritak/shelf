import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { screenWidth } from '../../utils/sizes';
import { useEffect, useRef } from 'react';
import { Colors } from '../../styles/Colors';

const Tabs = ({ data, activeTab, setActiveTab }) => {
  const tabWidth = screenWidth / data.length;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: data.indexOf(activeTab) * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.tabCont}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveTab(item)}
          style={styles.tab}
        >
          <TabBarLabel title={item.title} date={item.date} />
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.indicator,
          {
            width: tabWidth - 60,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const TabBarLabel = ({ title, date }) => {
  return (
    <View style={styles.tab}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabCont: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'white',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth / 3,
    paddingVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  date: {
    color: 'gray',
  },
  indicator: {
    height: 2,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
  },
});

export default Tabs;
