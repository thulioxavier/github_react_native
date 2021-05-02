import React from 'react';
import { HeaderTitle, Item, Title, P, Star, Lock, Icon, HeaderInfo } from './styles';
import {_Star, _UnLock, _Lock} from '../../../constants/icons';

import {Marck} from '../../partils/index';

const Repository = ({data}) => {
    return (
        <>
            <Item>
                <HeaderTitle>
                    <Marck/>
                    <Title>{data.title}</Title>
                </HeaderTitle>
                <P numberOfLines={2} >{data.description ? data.description : 'Sem Descrição!' }</P>
                <P style={{fontSize: 15, marginTop: 10, color: data.techs ? '#63BF1F' : '#CC042A'}}>{data.techs ? data.techs : 'Tech Não informada' }</P>
                <HeaderInfo>
                    <Star>
                        <Icon source={_Star} style={{ tintColor: '#FFCE00' }} />
                        <P style={{marginLeft: 10, fontSize: 15}}>{data.star}</P>
                    </Star>

                    <Lock>
                        <Icon source={_UnLock} style={{  tintColor: '#63BF1F' }}/>
                        <Icon source={_Lock} style={{ tintColor: '#CC042A', marginLeft: 10}} />
                    </Lock>
                </HeaderInfo>

            </Item>
        </>
    );
}

export default Repository;