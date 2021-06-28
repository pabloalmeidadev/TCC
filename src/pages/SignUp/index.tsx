import React from 'react';
import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container, Title, Texto,
    BackToSignIn, BackToSignInText
} from './styles';

import logoImg from '../../assets/logo.png'

const SignUp: React.FC = () => {
    return (

        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                enabled>

                <ScrollView
                    keyboardShouldPersistTaps="handled"

                >
                    <Container>

                        <Title>CRIE SUA CONTA</Title>

                        <View>
                            <Texto>NOME COMPLETO</Texto>
                            <Input name="nome" icon="mail" placeholder="Insira seu nome completo" />
                        </View>

                        <View>
                            <Texto>TELEFONE</Texto>
                            <Input name="telefone" icon="mail" placeholder="Insira seu telefone" />
                        </View>

                        <View>
                            <Texto>CPF</Texto>
                            <Input name="cpf" icon="lock" placeholder="Insira o seu CPF" />
                        </View>

                        <View>
                            <Texto>CIDADE</Texto>
                            <Input name="cidade" icon="lock" placeholder="Insira o nome de sua cidade" />
                        </View>

                        <View>
                            <Texto>UF</Texto>
                            <Input name="uf" icon="lock" placeholder="Insira seu estado" />
                        </View>

                        <View>
                            <Texto>E-MAIL</Texto>
                            <Input name="email" icon="lock" placeholder="Insira seu e-mail" />
                        </View>

                        <View>
                            <Texto>SENHA</Texto>
                            <Input name="password" icon="lock" placeholder="Insira sua senha" />
                        </View>


                        <Button onPress={() => { console.log('DEU') }} style={{ flex: 1, marginTop: 24 }}>Criar conta</Button>


                        <BackToSignIn onPress={() => { }}>
                            <Icon name="arrow-left" size={20} color="#FFF" />
                            <BackToSignInText>Voltar para a tela de login</BackToSignInText>
                        </BackToSignIn>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>




        </>
    );
};

export default SignUp;