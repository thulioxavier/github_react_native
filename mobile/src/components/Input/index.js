import React from 'react';
import { Inp} from './styles';

const Input = ( {placeholder, value, onChangeText} ) => {
    return (
        <Inp
            placeholder={placeholder} 
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export default Input;