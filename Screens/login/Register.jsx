import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./style";
import Feather from 'react-native-vector-icons/Feather';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

function RegisterPage() {
    const [name, setName] = useState("");
    const [nameVerify, setNameVerify] = useState(false);

    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);

    const [mobile, setMobile] = useState("");
    const [mobileVerify, setMobileVerify] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);


    const [showPassword, setShowPassword] = useState(false);

    function handleName(e) {
        console.log(e.nativeEvent.text);
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);
        if (nameVar.length > 1) {
            setNameVerify(true);
        }
    }
    function handleEmail(e) {
        console.log(e.nativeEvent.text);
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
            setEmail(emailVar);
            setEmailVerify(true);
        }
    }
    function handleMobile(e) {
        console.log(e.nativeEvent.text);
        const mobileVar = e.nativeEvent.text;
        setMobile(mobileVar);
        setMobileVerify(false);
        if (/[0-9]{1}[0-9]{9}/.test(mobileVar)) {
            setMobile(mobileVar);
            setMobileVerify(true);
        }
    }
    function handlePassword(e) {
        console.log(e.nativeEvent.text);
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
            setPassword(passwordVar);
            setPasswordVerify(true);
        }
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={true}
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../../assets/21.png")} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Text style={styles.text_header}>Register</Text>
                        <View style={styles.actions}>
                            <FontAwesome name="user-o" color="#420475" />
                            <TextInput placeholder="Name" onChange={e => handleName(e)} maxLength={11} />
                            {name.length < 1 ? null : nameVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                        {
                            name.length < 1 ? null : nameVerify ? null : (
                                <Text style={{
                                    marginLeft: 20,
                                    color: 'red',
                                }}>Name should be more than 1 chartacter</Text>
                            )
                        }
                        <View style={styles.actions}>
                            <Fontisto name='email' color="#420475"
                                size={24}
                                style={{ marginTop: 0, passingRight: 5 }}></Fontisto>
                            <FontAwesome name="user-o" color="#420475" />
                            <TextInput placeholder="Email" onChange={
                                e => handleEmail(e)
                            } />
                            {email.length < 1 ? null : emailVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                        {
                            email.length < 1 ? null : emailVerify ? null : (
                                <Text style={{
                                    marginLeft: 20,
                                    color: 'red',
                                }}>Enter Proper Email Address</Text>
                            )
                        }
                        <View style={styles.actions}>
                            <FontAwesome name="user-o" color="#420475" />
                            <TextInput placeholder="Mobile" onChange={(e) => handleMobile(e)} />
                            {mobile.length < 1 ? null : mobileVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />

                            )}
                        </View>
                        {
                            mobile.length < 1 ? null : mobileVerify ? null : (
                                <Text style={{
                                    marginLeft: 20,
                                    color: 'red',
                                }}>Enter Proper Mobile Number</Text>
                            )
                        }
                        <View style={styles.actions}>
                            <FontAwesome name="lock" color="#420475" />
                            <TextInput placeholder="Password"
                                onChange={e => handlePassword(e)}
                                secureTextEntry={showPassword} />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {
                                    password.length < 1 ? null : !showPassword ?
                                        <Feather
                                            name="eye-off"
                                            style={{ marginRight: -10 }}
                                            color={
                                                passwordVerify?'green': 'red'
                                            }
                                            size={23}
                                        /> :
                                        <Feather
                                            name="eye"
                                            style={{ marginRight: -10 }}
                                            color={
                                                passwordVerify?'green': 'red'
                                            }
                                            size={23} />
                                }

                            </TouchableOpacity>

                        </View>
                    </View>
                    {
                        password.length < 1 ? null : passwordVerify ? null : (
                            <Text style={{
                                marginLeft: 20,
                                color: 'red',
                            }}>Upercasse, Lowercase, Number and 6 or more character</Text>
                        )
                    }
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.inBut}>
                            <View>
                                <Text style={styles.textSign}>Register</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </GestureHandlerRootView>
        </ScrollView>

    );
}

export default RegisterPage;
