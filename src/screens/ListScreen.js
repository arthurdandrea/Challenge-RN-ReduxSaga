import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import booksActions from '../store/actions/books';

const keyExtractor = (item) => item.id;

class ListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'List',
    headerStyle: {
      backgroundColor: '#fce100',
    },
  };

  renderItem = ({ item }) => <ListItem
      onPress={() => {
        //this.props.navigation.navigate('Detail', { bookId: item.id });
      }}
      imageUri={
        item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''
      }
    />;

  renderFooter = () => (
      this.props.loading ?
      <View><ActivityIndicator /></View> :
      null
    );

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return <View style={styles.listContainer}>
      <FlatList
        data={this.props.books}
        keyExtractor={keyExtractor}
        numColumns={3}
        renderItem={this.renderItem}
        ListFooterComponent={this.renderFooter}
        contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 10 }}
        style={styles.list}
      />
    </View>;
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  loading: state.books.loading
});

const mapDispatchToProps = {
  getBooks: booksActions.getBooksRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#fce100'
  },
  list: {
    flexWrap: 'wrap'
  }
});
