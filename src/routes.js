import { createStackNavigator, createAppContainer } from "react-navigation";
import MovieList from "./screens/MovieList";
import MovieDetail from "./screens/MovieDetail";

const RootStack = createStackNavigator({
  MovieList: {
    screen: MovieList
  },
  MovieDetail: {
    screen: MovieDetail
  }
});

const Routes = createAppContainer(RootStack);

export default Routes;
