import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 260px;
    height: 47px;
    background: #F4511E;
    border-radius: 10px;


    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'Gotham-Black';
    color: #312e38;
    font-size: 18px;
`;