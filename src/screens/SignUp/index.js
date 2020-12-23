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
import PersonIcon from '../../assets/person.svg'
import SignInput from '../../components/SignInput'

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);


    const navigation = useNavigation();

    const [nomeFild, setNomeFild] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passworldField, setPassworldField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passworldField != '' && nomeFild != '') {
            
            let res = await Api.signUp(nomeFild, emailField, passworldField);
            console.log(res);

            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert(`Erro: ${res.error}`);
            }
        } else {
            alert("Prenche os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{
                name: 'SignIn'
            }]
        });
    }

    return (

        <Container>
            <BarberLogo width="100%" height="160"/>

                <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nomeFild}
                    onChangeText={t=>setNomeFild(t)}
                    />

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
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustonButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMenssageButtonText>Já possui conta ?</SignMenssageButtonText>
                    <SignMenssageButtonTextBold>Fazer login</SignMenssageButtonTextBold>
                </SignMessageButton>

        </Container>
    );
}