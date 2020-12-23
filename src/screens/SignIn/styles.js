import React from 'react';
import styles from 'styled-components/native';

export const Container = styles.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styles.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButtonText = styles.Text`
        font-size: 18px;
        color: #FFF;
`;
export const CustonButton = styles.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const SignMessageButton = styles.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-bottom: 20px;
`;
export const SignMenssageButtonText = styles.Text`
    font-size: 16px;
    color: #268596;
`;
export const SignMenssageButtonTextBold = styles.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;


// InputArea,
// CustomButtonText,
// CustonButton,
// SignMessageButton,
// SignMenssageButtonTextBold