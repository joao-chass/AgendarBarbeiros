import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext'

import { 
    Container,
    InputArea,
    CustomButtonText,
    CustonButton,
    SignMessageButton,
    SignMenssageButtonTextBold,
    SignMenssageButtonText
 } from './styles';

 import Api from '../../Api'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import SignInput from '../../components/SignInput'

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passworldField, setPassworldField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passworldField != '' ) {
            
            let json = await Api.signIn(emailField, passworldField);
            console.log(json);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert('E-mail e/ou senha errados !');
            }
        } else {
            alert("Prenche os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{
                name: 'SignUp'
            }]
        });
    }

    return (

        <Container>
            <BarberLogo width="100%" height="160"/>

                <InputArea>
                    <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    />
                    <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passworldField}
                    onChangeText={t=>setPassworldField(t)}
                    password={true}
                     />

                    <CustonButton onPress={handleSignClick}>
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustonButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMenssageButtonText>Ainda não possui conta ?</SignMenssageButtonText>
                    <SignMenssageButtonTextBold>Cadastre-se</SignMenssageButtonTextBold>
                </SignMessageButton>

        </Container>
    );
}