import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key: string): Promise<any> => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const setItem = async (key: string,value: string): Promise<any> => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (key: string,item: string) => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter((password: string) =>{
        return (password !== item);
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;

    } catch (error) {
      console.log('erro ao deletar', error);
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
