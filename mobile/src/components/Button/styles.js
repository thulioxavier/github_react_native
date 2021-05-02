import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
    height: 55px;
    width: 340px;
    background-color: #FFCE00;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
`;

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;
