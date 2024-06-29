import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/styles';
import GuideTabs from '../stacks/GuideTabs';

const GuideScreen = () => {
  return (
    <View style={styles.container}>
      <View style={style.topView}>
        <View style={style.heading}>
          <TouchableOpacity>
            <Ionicons name='arrow-back' size={22} />
          </TouchableOpacity>
          <Text style={style.headerText}>Itinerary Form</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '80%' }}>
        <GuideTabs />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    width: '80%',
    textAlign: 'center',
  },
});

export default GuideScreen;
