import React from 'react';
import { HeaderTitle, Item, Title, P, Star, Lock, Icon, HeaderInfo, Img, Btn } from './styles';
import {_Star, _UnLock, _Lock, _Next} from '../../../constants/icons';

import {Marck} from '../../partils/index';

const Network = ({data, click}) => {
    return (
        <>
            <Item onPress={click} >
            <Marck/>
                <HeaderTitle>
                    <Img 
                        source={{
                            uri: data.avatar_url
                        }}
                    />
                    <Title>#{data.login}</Title> 
                      
                    <Icon
                        source={_Next}
                        style={{
                            tintColor: '#FFFF'
                        }}
                    />    
                </HeaderTitle>
                
            </Item>
        </>
    );
}

export default Network;