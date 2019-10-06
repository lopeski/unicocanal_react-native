import React from 'react';
import {
  Container,
  Text,
  Content,
  Body,
  Icon,
  Title,
  Card,
  Item,
  CardItem,
} from 'native-base';
import {StyleSheet, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';

const ImgExample = require('./Saude.jpg');

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          type: 'twitter',
          text:
            'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          type: 'youtubeChnel',
          img: ImgExample,
          title: "don't put tools in your food",
          time: 'time ago',
        },
        {
          type: 'instagram',
          img: ImgExample,
          text: 'New way to lose weight! put tools in along with the food',
          time: 'time ago',
        },
      ],
    };
  }
  componentDidMount() {
    // conection with server
    //
    //
  }
  render() {
    return (
      <SafeAreaView style={estilo.Safe}>
        <Container>
          <FlatList
            data={this.state.list}
            renderItem={({item}) => {
              if (item.type === 'youtubeChnel') {
                return (
                  <Item onPress={() => alert(item.type)}>
                    <Content>
                      <Card onPress={() => alert(item.type)}>
                        <CardItem header>
                          <Icon name="logo-youtube" />
                          <Text>Novo video no canal</Text>
                        </CardItem>
                        <CardItem bordered>
                          <Image
                            source={ImgExample}
                            style={{height: 200, width: null, flex: 1}}
                          />
                        </CardItem>
                        <CardItem>
                          <Title>{item.title}</Title>
                        </CardItem>
                        <CardItem footer>
                          <Text note>{item.time}</Text>
                        </CardItem>
                      </Card>
                    </Content>
                  </Item>
                );
              } else if (item.type === 'twitter') {
                return (
                  <Item onPress={() => alert(item.type)}>
                    <Content>
                      <Card>
                        <CardItem header>
                          <Icon name="logo-twitter" />
                        </CardItem>
                        <CardItem bordered>
                          <Text>{item.text}</Text>
                        </CardItem>
                        <CardItem footer>
                          <Text note>{item.time}</Text>
                        </CardItem>
                      </Card>
                    </Content>
                  </Item>
                );
              } else if (item.type === 'instagram') {
                return (
                  <Item onPress={() => alert(item.type)}>
                    <Content>
                      <Card>
                        <CardItem header>
                          <Icon name="logo-instagram" />
                        </CardItem>
                        <CardItem cardBody>
                          <Image
                            source={ImgExample}
                            style={{height: 200, width: null, flex: 1}}
                          />
                        </CardItem>
                        <CardItem bordered>
                          <Body>
                            <Text>{item.text}</Text>
                          </Body>
                        </CardItem>
                        <CardItem footer>
                          <Text note>{item.time}</Text>
                        </CardItem>
                      </Card>
                    </Content>
                  </Item>
                );
              }
            }}
            keyExtractor={item => item.type}
          />
        </Container>
      </SafeAreaView>
    );
  }
}
const estilo = StyleSheet.create({
  Cabeca: {
    backgroundColor: '#0096FF',
  },
  Safe: {
    flex: 1,
  },
  corpo: {
    paddingLeft: 0,
  },
  texto: {
    paddingRight: 70,
  },
  fotof: {
    marginLeft: 0,
  },
});
