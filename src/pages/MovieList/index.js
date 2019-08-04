import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class MovieList extends Component {
  render() {
    return (
      <View>
        <Text>Movie List</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('MovieDetail')}
        />
      </View>
    );
  }
}
