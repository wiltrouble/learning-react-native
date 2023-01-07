import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const PullToRefreshScreen = () => {
  const [refreshing, setrefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      console.log('finished');
      setrefreshing(false);
      setData('hi world!');
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

const styles2 = StyleSheet.create({});
