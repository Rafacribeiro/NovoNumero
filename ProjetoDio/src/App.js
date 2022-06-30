import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';




const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero() {
        const novo_numero = Math.floor(Math.randow() * 10);
        setNumero(novo_numero);
    }

    return(
        <SafeAreaView Style={style.container}>
        <Text Style={style.numero}>
            {numero}
        </Text>
        <TouchableOpacity onPress={handleNumero} Style={style.botao}>
            <Text>
            Gerar Número
            </Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#010409',
        Flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})

export default App;