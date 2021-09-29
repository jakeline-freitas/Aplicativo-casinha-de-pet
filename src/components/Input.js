import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from "react-hook-form";

export function Input({ control, name, error, label, secureTextEntry, ...rest }) {
    return (
        <View>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <Text style={styles.text}> {label} </Text>
                        <TextInput style={[styles.textInput, error ? styles.inputError : ""]} secureTextEntry={secureTextEntry} onBlur={onBlur} {...rest}
                            onChangeText={onChange} />
                    </View>
                )}
                name={name}

            />
            {/* {error && <Text style={styles.error}>{error}</Text>} */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        // flex: 1,    
    },
    textInput: {
        justifyContent: "center",
        // alignItems: "center",
        width: 324,
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    text: {
        // textAlign:'center',
        color: '#616161',
        fontSize: 18,
        marginBottom: 5

    },
    inputError: {
        borderWidth:1,
        borderColor: 'red',
    },
    error: {
        fontSize: 15,
        color: 'red',
    },

})