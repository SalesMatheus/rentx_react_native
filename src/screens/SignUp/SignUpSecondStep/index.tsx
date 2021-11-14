import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useTheme } from 'styled-components';

import { Confirmation } from '../../Confirmation';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Form,
    FormTitle
} from './styles';

interface Params {
    user: {
        name: string;
        email: string;
        cnh: string;
    }
}
export function SignUpSecondStep() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { user } = route.params as Params;

    function handleBack(){
        navigation.goBack();
    }

    function handleRegister(){
        if(!password || !confirmPassword){
            return Alert.alert('Informe a senha e a confirmação.');
        }

        if(password !== confirmPassword){
            return Alert.alert('A senha e a confirmaçào devem ser iguais.');
        }

        navigation.navigate('Confirmation', {
            nextScreenRoute: 'SignIn',
            title: 'Conta criada',
            message: `Agora é só fazer login \n e aproveitar.`,
        })
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                <Container>
                    <StatusBar 
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Steps>
                            <Bullet/>
                            <Bullet active/>
                        </Steps>
                    </Header>
                    <Form>
                        <FormTitle>02. Dados</FormTitle>

                        <PasswordInput 
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Repetir senha"
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                        />
                    </Form>
                    
                    <Button 
                        title="Cadastrar"
                        color={theme.colors.success}
                        onPress={handleRegister}
                    />

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}