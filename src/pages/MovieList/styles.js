import styled from 'styled-components';
import { Dimensions } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

const heightCard = (height - 20 - 80) / rows - 10;
const widthCard = (width - 20) / cols - 10;

const ScrollView = styled.ScrollView`
         
`;

const Container = styled.View`
    flex: 1;                             
    flexDirection: row;
    flexWrap: wrap;
    paddingTop: 20;
`;

const MovieCard = styled.TouchableOpacity`
    marginLeft: 10;
    marginBottom: 10;
    height: ${heightCard};
    width: ${widthCard};
`;

const ImageContainer = styled.View`
    
`;

const Image = styled.Image`
    borderRadius: 10;
    height: 160;
    width: 112;
`;

const Text = styled.Text`
    fontFamily: 'Avenir';
`;

const Title = styled(Text)`
    fontSize: 14px;
    marginTop: 5px;
`;

const Genre = styled(Text)`
    fontSize: 12px;
`;

export { ScrollView, Container, MovieCard, Title, Genre, ImageContainer, Image };
