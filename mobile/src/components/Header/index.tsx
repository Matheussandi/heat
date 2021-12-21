import React from "react";

import { View, Text, TouchableOpacity } from 'react-native';

import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

import { useAuth } from "../../hooks/auth";

import LogoSvg from '../../assets/logo.svg';


export function Header() {
    const { user, signOut } = useAuth();

    return (
        <View style={styles.container}>
            <LogoSvg />

            <View style={styles.logoutButton}>
                <TouchableOpacity onPress={signOut}>
                    <Text style={styles.logoutText}>
                        Sair
                    </Text>
                </TouchableOpacity>

                <UserPhoto imageUri= {user?.avatar_url}/>
            </View>
        </View>
    )
}