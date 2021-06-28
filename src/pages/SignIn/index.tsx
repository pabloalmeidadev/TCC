import React from 'react';
import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container, Title, Texto, ForgotPassword, ForgotPasswordText,
    CreateAccountButton, CreateAccountButtonText
} from './styles';

import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
    return (

        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                enabled>

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />

                        <Title>Faça seu logon</Title>

                        <View>
                            <Texto>E-MAIL</Texto>
                            <Input name="email" icon="mail" placeholder="Insira seu e-mail" />
                        </View>

                        <View>
                            <Texto>SENHA</Texto>
                            <Input name="password" icon="lock" placeholder="Insira sua senha" />
                        </View>

                        <Button onPress={() => { console.log('DEU') }}>Entrar</Button>

                        <ForgotPassword onPress={() => { }}>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => { }}>
                <Icon name="log-in" size={20} color="#F4511E" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>


        </>
    );
};

export default SignIn;
