import { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView , FlatList} from "react-native";
import { useFocusEffect } from 'expo-router';
import useStorage from "../hooks/useStorage";
import { PasswordItem } from "./components/passwordItem";

export default function PasswordsScreen() {
  const {getItem,removeItem} = useStorage();
  const [listPasswords, setListPasswords] = useState([]);

  async function handleRemovePassword( item: string) {
    const passwords = await removeItem('@password', item);
    if(passwords){  
      setListPasswords(passwords);
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const passwords = await getItem('@password');
        setListPasswords(passwords);
      }
      fetchData()
      return () => {
      }
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 10 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem data={item} removePassword={() => handleRemovePassword(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#ffff",
  },
  header: {   
    backgroundColor: "#392de9",
    paddingTop:50,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#FEF3E2",
  },
  
});


