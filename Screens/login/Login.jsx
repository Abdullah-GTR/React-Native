const { View, Text, Button, Image, TextInput, TouchableOpacity } = require('react-native');
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./style";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function LoginPage() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <View style={styles.logoContainer}>
                    <Image style={
                        styles.logo
                    } source={require("../../assets/21.png")} />
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.text_header}>Login</Text>
                    <View style={styles.actions}>
                        <FontAwesome name="user-o" color="#420475" />
                        <TextInput placeholder="Mobile or Email" />
                    </View>
                    <View style={styles.actions}>
                        <FontAwesome name="lock" color="#420475" />
                        <TextInput placeholder="Password" />
                    </View>
                    <View style={{
                        justiafyContent: 'flex-end',
                        alignItems: 'flex-end',
                        marginTop: 8,
                        marginRight: 10,
                    }}>
                        <Text style={{ color: '#420475', fontWeight: '700' }}>Forgot Pass</Text>
                    </View>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.textSign}>
                        <View>
                            <Text style={styles.textSign}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#919191' }}></Text>
                    </View>
                    <View style={styles.bottomButton}>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            }}>
                                <TouchableOpacity style={styles.inBut2}>
                                    <FontAwesome name="user-circle-o"
                                    color="white" style={styles.smallIcon2}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}
export default LoginPage;