import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import zxcvbn from 'zxcvbn';

export const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    const isUsernameValid = (username: string): boolean => {
        return username.length >= 5;
    };

    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string): boolean => {
        return password.length >= 4;
    };

    const doPasswordsMatch = (password: string, confirmPassword: string): boolean => {
        return password === confirmPassword;
    };

    const handleUsernameChange = (text: string): void => {
        setUsername(text);
        if (!isUsernameValid(text)) {
            setUsernameError('Username must be at least 5 characters');
        } else {
            setUsernameError('');
        }
    };

    const handleEmailChange = (text: string): void => {
        setEmail(text);
        if (!isEmailValid(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (text: string): void => {
        setPassword(text);
        const result = zxcvbn(text);
        setPasswordStrength(result.score);
        if (!isPasswordValid(text)) {
            setPasswordError('Password must be at least 4 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (text: string): void => {
        setConfirmPassword(text);
        if (!doPasswordsMatch(password, text)) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const isFormValid = () => {
        return (
            isUsernameValid(username) &&
            isEmailValid(email) &&
            isPasswordValid(password) &&
            doPasswordsMatch(password, confirmPassword)
        );
    };
    const handleRegister = async (): Promise<void> => {
        if (!isFormValid()) {
            setErrorVisible(true);
            setErrorMessage('Please fix the errors in the form');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/users/signup', {
                username,
                email,
                password
            });
            if (response.status === 201) {
                Alert.alert('Success', 'User registered successfully');
                navigation.navigate('Login' as never);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again');
        } finally {
            setLoading(false);
        }
    
    }
    return (
        <Text style={{alignSelf : 'center', justifyContent: 'center', top: "50%"}}>
            Register Screen
        </Text>
    )
}