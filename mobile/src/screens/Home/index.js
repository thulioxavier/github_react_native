import React from "react";
import {TouchableOpacity, View } from "react-native";

import {UserContext} from '../../contexts/UserContext';

import { _IsLog } from "../../../constants/icons";
import { Avatar} from "../../components/index";
import {Marck} from '../../partils/index';
import {Scroll, Container, Content, MinCard, Title, Label, HeaderContent, P, Hashtag, Row, HeaderTitle, Icon} from './styles';


const Home = ({navigation}) => {
 
  const {state: user} = React.useContext(UserContext);

  const isLog = () => {
    navigation.navigate('SingIn')
  }
function renderHeader() {
    return (
      <View 
        style={{
            justifyContent: 'center', alignItems: 'center'
        }}
      >
        <HeaderContent>
          <View
            style={{
              marginTop: 40,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Hashtag 
            style={{
                marginLeft: 40,
              }}
            >#{user.login}</Hashtag>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-around",
              }}

              onPress={isLog}
            >
              <P>Sair</P>

              <Icon
                source={_IsLog}
                style={{
                  tintColor: "#D03434",
                  marginRight: 40,
                }}
              />
            </TouchableOpacity>
          </View>
        </HeaderContent>

        <Content>
          <Avatar
            source={{
              uri:`${user.avatar_url}`}}
          />
        </Content>
        </View>
    );
  }

  return (
    <Scroll > 
    {renderHeader()}
    <Container>
        <HeaderTitle>
          <Marck />
          <Title>{user.name ? user.name : 'Sem nome'}</Title>
        </HeaderTitle>
          <P>{user.email ? user.email : "Sem E-mail"}</P>
          <P>{user.location ?  user.location.replace(",", "/") : 'Sem Localização'}</P>
        <Row style={{ marginTop: 45, marginBottom: 50 }}>
          <MinCard>
            <Title style={{ fontSize: 40 }}>{user.followers}</Title>
            <Label>Seguidores</Label>
          </MinCard>
          <MinCard>
            <Title style={{ fontSize: 40 }}>{user.following}</Title>
            <Label>Seguindo</Label>
          </MinCard>
          <MinCard>
            <Title style={{ fontSize: 40 }}>{user.public_repos}</Title>
            <Label>Repos</Label>
          </MinCard>
        </Row>

        <HeaderTitle>
          <Marck />
          <Title>Bio</Title>
        </HeaderTitle>
        <P style={{ textAlign: `justify`, marginBottom: 100 }}>
          {user.bio ? user.bio : 'Sem Bio'}
        </P>
    </Container>

    </Scroll>

  );
};

export default Home;
