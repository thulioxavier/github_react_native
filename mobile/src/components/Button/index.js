import React from 'react';
import {Btn, Label, Icon} from './styles';
const Button = ( {onPress, text, icon} ) => {
    return (
        <Btn onPress={onPress}>
            <Label>{text} </Label>
            <Icon 
                source={icon}
            />
        </Btn>
    );
}

export default Button;