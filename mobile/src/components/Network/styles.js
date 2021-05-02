import styled from 'styled-components';

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

`;

export const Img = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 60px;
    border-color: #FFFF;
    border-width: 3px;
    margin-left: -40px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const P = styled.Text`
    max-height: 45px;
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
  margin-left: 25px;
  margin-right: 18px;
`;

export const Item = styled.TouchableOpacity`
    border-bottom-color: #7070705A;
    border-bottom-width: 1px; 
    padding-bottom: 35px;
    margin-top: 30px;
    flex-direction: row;
    align-items: center; 

`;

export const Btn = styled.TouchableOpacity`

`;
export const Start = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center; 
  justify-content: flex-start;
  padding-left: 25px;
`;

export const End = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  padding-right: 50px;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`
export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
`;