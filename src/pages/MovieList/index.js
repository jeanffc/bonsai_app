import React, { Component } from "react";
import { View, Button } from "react-native";
import { ScrollView, Container, MovieCard, Title, Genre, ImageContainer, Image } from "./styles";

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
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <Container>
                {this.state.movies.map((movie, index) => (
                    <MovieCard key={movie._id.$oid} onPress={() => console.log("click")}>
                        <ImageContainer>
                            <Image source={{ uri: movie.image }} />
                        </ImageContainer>
                        <Title numberOfLines={1}>{movie.title}</Title>
                        <Genre numberOfLines={1}>{movie.genre}</Genre>
                    </MovieCard>
                ))}   
          </Container>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("MovieDetail")}
        />
        </ScrollView>
        
      </View>
    );
  }
}
