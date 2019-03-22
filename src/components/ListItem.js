import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import ImageWithPlaceholder from './ImageWithPlaceholder';

export default class ListItem extends PureComponent {
  render() {
    return <TouchableOpacity
      onPress={this.props.onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <ImageWithPlaceholder uri={this.props.imageUri} />
    </TouchableOpacity>;
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: (width - 20) / 3,
    height: (width - 20) / 2.3,
    padding: 8,
    marginBottom: 10
  },
});
