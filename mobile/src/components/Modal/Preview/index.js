import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";

import { UserContext } from '../../../contexts/UserContext';
import { _IsLog, _Back } from "../../../../constants/icons";
import { Marck } from '../../../partils/index';
import {
  Scroll,
  Container,
  Content,
  MinCard,
  Title,
  Label,
  HeaderContent,
  P,
  Row,
  HeaderTitle,
  Icon,
  Img
} from './styles';


const Preview = ({ modalVisible, offVisible, preview , salve }) => {


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
              marginTop: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity style={{ flexDirection: "row", alignContent: "center", justifyContent: "flex-start", width: '25%', }} onPress={offVisible}>
              <Icon source={_Back} style={{ tintColor: "#FFFF", }} />
            </TouchableOpacity>
            <View style={{ width: '50%', justifyContent: 'center', alignContent: "center", }}>
              <P style={{ marginLeft: 0, marginRight: 0 }}>#{preview.login}</P>
            </View>
            <TouchableOpacity style={{ flexDirection: "row", alignContent: "center", justifyContent: "flex-end", width: '25%', }} onPress={salve} >
              <P style={{ marginLeft: 0 }}>Salvar</P>
              <Icon source={_IsLog} style={{ tintColor: "#5CBC29", transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
          </View>
        </HeaderContent>

        <Content>
          <Img
            source={{
              uri: `${preview.avatar_url}`
            }}
          />
        </Content>
      </View>
    );
  }

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <Scroll >
        {renderHeader()}
        <Container>
          <HeaderTitle>
            <Marck />
            <Title>{preview.name ? preview.name : 'Sem nome'}</Title>
          </HeaderTitle>
          <P>{preview.email ? preview.email : "Sem E-mail"}</P>
          <P>{preview.location ? preview.location.replace(",", "/") : 'Sem Localização'}</P>
          <Row style={{ marginTop: 45, marginBottom: 50 }}>
            <MinCard>
              <Title style={{ fontSize: 40 }}>{preview.followers}</Title>
              <Label>Seguidores</Label>
            </MinCard>
            <MinCard>
              <Title style={{ fontSize: 40 }}>{preview.following}</Title>
              <Label>Seguindo</Label>
            </MinCard>
            <MinCard>
              <Title style={{ fontSize: 40 }}>{preview.public_repos}</Title>
              <Label>Repos</Label>
            </MinCard>
          </Row>

          <HeaderTitle>
            <Marck />
            <Title>Bio</Title>
          </HeaderTitle>
          <P style={{ textAlign: `justify`, marginBottom: 100 }}>
            {preview.bio ? preview.bio : 'Sem Bio'}
          </P>
        </Container>

      </Scroll>
    </Modal>

  );
};

export default Preview;
