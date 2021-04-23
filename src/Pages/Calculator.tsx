import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, FlatList, Alert } from 'react-native';

export default function App(){
    const [numbers, setNumbers] = useState("");
    const mudarNumbers = () => {};

    function handleInputSubmit(){
        return Alert.alert('A idade média é: ');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header}>
                        <Text style={styles.text}>
                            Idades
                </Text>
                    </View>

                    <View style={styles.body}>
                        <KeyboardAvoidingView>
                            <TextInput
                                style={styles.input}
                                placeholder="   Digite um número"
                                value={numbers}
                                onChangeText={numbers => setNumbers(numbers)}
                            />
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                Inserir
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.list}>
                        {[numbers]}
                    </View>

                    <View style={styles.media}>
                        <TouchableOpacity
                            style={styles.media}
                            onPress={handleInputSubmit}
                        >
                            <Text style={styles.textMedia}>
                                Calcular Média
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C3E50',
        color: '#2C3E50'
    },
    header: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginTop: 44,
        marginLeft: 4,        
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 7
    },
    input: {
        backgroundColor: 'white',
        width: 150,
        height: 60,
        marginTop: 20,
        color: 'green',
        borderWidth: 2,
        marginRight: 12,
    },
    button: {
        fontSize: 50,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 150,
        height: 60,
        color:  '#353535',
        backgroundColor: '#1ABC9C',
        borderWidth: 2,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
    },
    list: {
        width: 310,
        height: 350,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    media: {
        backgroundColor: '#3498DB',
        width: 310,
        height: 37,
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 5
    },
    textMedia: {
        marginBottom: 15,
        fontSize: 20
    }
  })