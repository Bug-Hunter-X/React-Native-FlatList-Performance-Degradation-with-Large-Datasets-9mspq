import React, { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
));

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const FlatListSolution = () => {
  const renderItem = ({ item }) => <Item item={item} key={item.id}/>;

  const getItemLayout = (data, index) => (
    {
      length: 50,
      offset: 50 * index,
      index,
    }
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      getItemLayout={getItemLayout}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListSolution;