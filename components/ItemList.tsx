import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Icon, Button } from '@rneui/themed';
import { styles } from '../styles';

const ItemList = ({task}) => {
    // fonction pour supprimer une tâche
    const deleteTask = () => { 
        console.log("Sup : ",task.id);
     }
    // fonction pour valider une tâche
    const validateTask = () => { 
        console.log("Val : ",task.id);
     }
  return (
    <ListItem.Swipeable 
        rightContent={(reset)=>(
            <Button title={"Supprimer"} buttonStyle={styles.deleteBtn} onPress={()=>{deleteTask(); reset()}}  />
        )}
        leftContent={(reset)=>(
            <Button title={"Valider"} buttonStyle={styles.validateBtn} onPress={()=>{validateTask(); reset()}} />
        )}
    >
        <ListItem.Content>
            <ListItem.Title>
                {task?.tache}
            </ListItem.Title>
        </ListItem.Content>
    </ListItem.Swipeable>
  )
}

export default ItemList

