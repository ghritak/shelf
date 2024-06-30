import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/styles';
import GuideTabs from '../stacks/GuideTabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type GuideScreenRouteParams = {
  screen?: 'Today' | 'Yesterday' | 'Tomorrow';
};

const GuideScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<{ params: GuideScreenRouteParams }>>();
  return (
    <View style={styles.container}>
      <View style={style.topView}>
        <View style={style.heading}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name='arrow-back' size={22} />
          </TouchableOpacity>
          <Text style={style.headerText}>Itinerary Form</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '80%' }}>
        <GuideTabs initialTab={route.params?.screen || 'Today'} />
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
