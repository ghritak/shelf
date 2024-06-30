import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Yesterday from '../screens/guide/Yesterday';
import Today from '../screens/guide/Today';
import Tomorrow from '../screens/guide/Tomorrow';
import Tabs from '../ui/Tabs';
import { screenWidth } from '../../utils/sizes';
import { getDateString } from '../../utils';

const data = [
  { title: 'Yesterday', date: getDateString(-1) },
  { title: 'Today', date: getDateString(0) },
  { title: 'Tomorrow', date: getDateString(1) },
];

const GuideTabs = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(
    data.find((tab) => tab.title === initialTab) || data[0]
  );

  useEffect(() => {
    const tab = data.find((item) => item.title === initialTab);
    if (tab) {
      setActiveTab(tab);
    }
  }, [initialTab]);

  return (
    <View>
      <Tabs data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab?.title === 'Yesterday' ? <Yesterday /> : null}
      {activeTab?.title === 'Today' ? <Today /> : null}
      {activeTab?.title === 'Tomorrow' ? <Tomorrow /> : null}
    </View>
  );
};

const style = StyleSheet.create({
  tab: { alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '500', marginBottom: 3 },
  date: { color: 'gray' },
  tabBarStyle: { width: screenWidth / 3 - 60, marginHorizontal: 30 },
});

export default GuideTabs;
