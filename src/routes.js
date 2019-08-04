import { createStackNavigator, createAppContainer } from "react-navigation";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

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
