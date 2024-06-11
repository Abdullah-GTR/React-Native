import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./style";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
    const navigation = useNavigation();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/21.png")} />
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.text_header}>Login</Text>
                    <View style={styles.actions}>
                        <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
                        <TextInput placeholder="Mobile or Email" />
                    </View>
                    <View style={styles.actions} >
                        <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
                        <TextInput placeholder="Password" />
                    </View>
                    <View style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        marginTop: 8,
                        marginRight: 10,
                    }}>
                        <Text
                            style={{ color: '#420475', fontWeight: '700' }}>
                            Forgot Pass</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut}>
                        <View>
                            <Text style={styles.textSign}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text 
                        style={{ 
                            fontSize: 14, 
                            fontWeight: 'bold', 
                            color: '#919191' 
                            }}></Text>
                    </View>
                    <View style={styles.bottomButton}>
                        <View style={{ 
                            alignItems: "center", 
                            justifyContent: "center" 
                            }}>
                            <TouchableOpacity style={styles.inBut2}>
                                <FontAwesome 
                                name="user-circle-o" 
                                color="white" 
                                style={styles.smallIcon2} />
                            </TouchableOpacity>
                            <Text style={styles.bottomText}>Guest</Text>
                        </View>
                        <View style={{ 
                            alignItems: "center", 
                            justifyContent: "center" 
                            }}>
                            <TouchableOpacity 
                            style={styles.inBut2} 
                            onPress={() => { 
                                navigation.navigate('Register'); 
                                }}>
                                <FontAwesome 
                                name="user-plus" 
                                color="white" 
                                style={[
                                    styles.smallIcon2, 
                                    { fontSize: 30 }]} 
                                    />
                            </TouchableOpacity>
                            <Text 
                            style={styles.bottomText}>Sign Up</Text>
                        </View>
                        <View style={{ 
                            alignItems: "center", 
                            justifyContent: "center" 
                            }}>
                            <TouchableOpacity style={
                                styles.inBut2} 
                                onPress={() => alert('Coming Soon')}>
                                <FontAwesome 
                                name="google" 
                                color="white" 
                                style={[styles.smallIcon2, { fontSize: 30 }]} />
                            </TouchableOpacity>
                            <Text style={styles.bottomText}>Google</Text>
                        </View>
                        <View style={{ 
                            alignItems: "center", 
                            justifyContent: "center" 
                            }}>
                            <TouchableOpacity style={styles.inBut2} 
                            onPress={() => 
                            alert('Coming Soon')}>
                                <FontAwesome 
                                name="facebook-f" 
                                color="white" 
                                style={[
                                    styles.smallIcon2, 
                                    { fontSize: 30 }]} />
                            </TouchableOpacity>
                            <Text style={styles.bottomText}>Facebook</Text>
                        </View>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

export default LoginPage;
