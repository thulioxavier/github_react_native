import styled from 'styled-components';


export const Container = styled.View`
  flex: 1;
  background-color: #292929 ;
  justify-content: center;
`;
export const Scroll = styled.ScrollView`
    background-color: #292929 ;
    height: 100%;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  top: -50px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #ffff;
  text-transform: uppercase;
`;

export const P = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: #ffff;
  margin-left: 25px;
  margin-right: 18px;
`;

export const Hashtag = styled.Text`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #ffff;
  margin-left: 25px;
  margin-right: 18px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #5252525d;
`;

export const MinCard = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 17px;
  color: #ffff;
`;

export const HeaderContent = styled.View`
  width: 100%;
  height: 140px;
  background-color: #1f1f1f;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
