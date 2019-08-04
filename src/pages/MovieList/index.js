import React, { Component } from "react";
import { View, Text, Button, ScrollView } from "react-native";

import api from "../../services/api";

export default class MovieList extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const response = await api.get("/movieTickets", {
        params: {
          skip: 0,
          limit: 10
        }
      });

      this.setState({ movies: response.data });

      console.log(this.state.movies);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.movies.map((movie, index) => <Text>{movie.title}</Text>)}
        </ScrollView>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("MovieDetail")}
        />
      </View>
    );
  }
}
