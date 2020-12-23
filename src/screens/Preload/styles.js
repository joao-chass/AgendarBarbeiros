import React from 'react';
import styles from 'styled-components/native';

export const Container = styles.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const LoadingIcon = styles.ActivityIndicator`
    margin-top: 50px;
`;