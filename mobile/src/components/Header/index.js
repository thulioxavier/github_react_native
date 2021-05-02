import React from 'react';
import { _Back } from "../../../constants/icons";

import {
    HeaderContent,
    Icon, 
    TitleHeader,
    Buttom,
    Area,
    Content, 
} from './styles';

const Header = ({cont, title, backScreen}) => {
    return(
        <>
         <HeaderContent>
            <Buttom 
              onPress={backScreen}
            >
                <Icon source={_Back} style={{tintColor: '#FFFF'}}/>
            </Buttom>

            <Content>
                <TitleHeader> {cont} {title} </TitleHeader>
            </Content>

            <Area/>
        </HeaderContent>
        </>
    );
}

export default Header;