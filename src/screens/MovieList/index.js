import React, { Component } from "react";
import { View, Button, ActivityIndicator } from "react-native";
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
    limit: 12,
    loading: false
  };

  async componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    try {
      this.setState({ loading: true });
      const response = await api.get("/movieTickets", {
        params: {
          skip: this.state.skip,
          limit: this.state.limit
        }
      });

      responseFiltered = response.data.filter(this.isMovieValid);
      this.setState({
        movies: [...this.state.movies, ...responseFiltered],
        skip: this.state.skip + this.state.limit,
        loading: false
      });
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
    }
  };

  isMovieValid(movie) {
    return movie && movie.title && movie.genre && movie.image ? true : false;
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

  renderLoader = () => {
    if (!this.state.loading) return null;
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.movies}
          numColumns={3}
          // vertical
          //   ListHeaderComponent={<View width={20} />}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${item._id.$oid}-${index}`}
          //   showsHorizontalScrollIndicator={false}
          onEndReached={this.loadMovies}
          onEndReachedThreshold={0}
          ListFooterComponent={this.renderLoader}
        />

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("MovieDetail")}
        />
      </View>
    );
  }
}
