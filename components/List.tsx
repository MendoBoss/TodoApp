import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ItemList from './ItemList';

const initTasks = [
    {id:'a',tache:"Faire la vaisselle",state:false},
    {id:'b',tache:"Faire le repas",state:false},
    {id:'c',tache:"Faire la fete",state:false},
    {id:'d',tache:"Faire du pain",state:false},
    {id:'e',tache:"Faire caca",state:false},
]

const List = () => {
    const [tasks, setTasks] = useState(initTasks)
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><ItemList task={item}/>}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({})