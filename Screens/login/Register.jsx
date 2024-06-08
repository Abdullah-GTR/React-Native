import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./style";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';


function RegisterPage() {
    const navigation = useNavigation();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/21.png")} />
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.text_header}>Register</Text>
                    <View style={styles.actions}>
                        <FontAwesome name="user-o" color="#420475" />
                        <TextInput placeholder="Name" />
                    </View>
                    <View style={styles.actions}>
                        <Fontisto name='email' color="#420475" 
                        size={24}
                        style={{marginTop:0, passingRights:5}}></Fontisto>
                        <FontAwesome name="user-o" color="#420475" />
                        <TextInput placeholder="Email" />
                    </View>
                    <View style={styles.actions}>
                        <FontAwesome name="user-o" color="#420475" />
                        <TextInput placeholder="Mobile" />
                    </View>
                    <View style={styles.actions}>
                        <FontAwesome name="lock" color="#420475" />
                        <TextInput placeholder="Password" />
                    </View>
                    
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut}>
                        <View>
                            <Text style={styles.textSign}>Register</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </GestureHandlerRootView>
    );
}

export default RegisterPage;
