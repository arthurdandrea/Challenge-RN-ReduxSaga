import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, ScrollView, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';
import ImageWithPlaceholder from '../components/ImageWithPlaceholder';

class DetailsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Detail',
    headerStyle: {
      backgroundColor: '#fce100',
    },
  };

  state = {
    rateValue: 0,
  };

  render() {
    if (!this.props.book) {
      return null;
    }

    const {
      title,
      authors,
      description,
      imageLinks,
    } = this.props.book.volumeInfo;
    const { listPrice } = this.props.book.saleInfo;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.cover}>
                <ImageWithPlaceholder
                  uri={imageLinks ? imageLinks.thumbnail : ''}
                />
              </View>

              <View style={styles.details}>
                <View>
                  <Text style={styles.title}>{title}</Text>
                  {authors && (
                    <Text style={styles.author}>
                      by {`${authors.join(', ')}`}
                    </Text>
                  )}
                </View>

                <View style={styles.priceRateContainer}>
                  {listPrice && (
                    <Text style={styles.price}>
                      ${listPrice.amount.toFixed(2)}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.pagesButtonsContainer}>
              <View style={styles.pagesContainer}>
                <Text style={styles.pagesText}>216 pages</Text>
              </View>

              <View style={styles.buttonsContainer}>
                <View style={{ paddingRight: 10 }}>
                  <Button onPress={() => {}} text="BUY" />
                </View>

                <Button onPress={() => {}} text="LIKE" />
              </View>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ books }, props) => {
  const bookId = props.navigation.getParam('bookId', null);
  const book = books.data && bookId && books.data.find((book) => book.id === bookId);
  return { book };
};

export default connect(mapStateToProps)(DetailsScreen);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
  },
  main: {
    backgroundColor: '#fce100',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cover: {
    width: (width - 20) / 3,
    height: (width - 20) / 2.3,
  },
  details: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    color: '#666',
  },
  priceRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 6,
  },
  pagesButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  pagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagesText: {
    color: '#333'
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  descriptionContainer: {
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  descriptionText: {
    fontSize: 17,
    lineHeight: 30,
    color: '#666',
  },
});
