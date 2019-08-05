import React, { Component } from "react";
import { View, Button } from "react-native";
import {
  FlatList,
  MovieCard,
  Title,
  Genre,
  ImageContainer,
  Image
} from "./styles";

import api from "../../services/api";

export default class MovieList extends Component {
  state = {
    movies: [],
    skip: 0,
    limit: 12
  };

  async componentDidMount() {
    try {
      const response = await api.get("/movieTickets", {
        params: {
          skip: this.state.skip,
          limit: this.state.limit
        }
      });

      this.setState({ movies: response.data });

      console.log(this.state.movies);
    } catch (err) {
      console.log(err);
    }
  }

  renderItem = ({ item }) => (
    <MovieCard onPress={() => console.log("click")}>
      <ImageContainer>
        <Image source={{ uri: item.image }} />
      </ImageContainer>
      <Title numberOfLines={1}>{item.title}</Title>
      <Genre numberOfLines={1}>{item.genre}</Genre>
    </MovieCard>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.movies}
          numColumns={3}
          // vertical
          ListHeaderComponent={<View width={20} />}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${item._id.$oid}`}
          // showsHorizontalScrollIndicator={false}
        />

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("MovieDetail")}
        />
      </View>
    );
  }
}
