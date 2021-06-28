import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    `;

export const Title = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-family: 'Gotham-Black';
    margin: 60px 0 24px;
`;

export const Texto = styled.Text`
    justify-content: flex-start;
    font-size: 24px;
    color: #F4511E;
    font-family: 'Gotham-Light'
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-family: 'Gotham-Black';
`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    border-color: #282238;
    padding: 16px 0;

    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const CreateAccountButtonText = styled.Text`
    color: #F4511E;
    font-size: 18px;
    font-family: 'Gotham-Black';
    margin-left: 10px;

`;





