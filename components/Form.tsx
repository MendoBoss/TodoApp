import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const Form = () => {
    // Initialisation de la valeur tache
    const [tache, setTache] = useState('');
    // 
    // Enregistrement de la tache en base
    const submit = () => { 
        console.log('tâche : ',tache);
        // Effacement du text input
        setTache('');
     };
    //  
  return (
    
    <TextInput
        label={'Saisir une tâche'}
        value={tache}
        onChangeText={text=>setTache(text)}
        onSubmitEditing={submit}
    />
  )
}

export default Form

