import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Home = () => {
    const [prontuario, setProntuario] = useState('');

    const handleObterPaciente = () => {

    };

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <Text
                style={{
                   color: '#444',
                   fontStyle: 'normal',
                   fontWeight: '700'
                }}
            >
                Prontuário do Paciente:
            </Text>
            <TextInput
                onChangeText={setProntuario}
                value={prontuario}
                placeholder="Digite o prontuário do paciente"
                style={{
                    backgroundColor: '#eee',
                    borderColor: '#ccc',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 25,
                    marginBottom: 10,
                    marginTop: 5,
                    width: 350
                }}
            />
            <TouchableOpacity 
                onPress={handleObterPaciente}
                style={{
                    padding: 10,
                    borderRadius: 25,
                    backgroundColor: '#06bf9d',
                    width: 250,
                    alignItems: 'center'
                }}
            >
                <Text style={{
                   color: '#444',
                   fontStyle: 'normal',
                   fontWeight: '700'
                }}>Obter Paciente</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;