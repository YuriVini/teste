import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet
} from 'react-native';

export function Button(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text>
                Inserir
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        width: 150,
        height: 60,
        color:  '#353535',
        backgroundColor: '#1ABC9C',
    }
})