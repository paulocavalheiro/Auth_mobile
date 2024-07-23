import { View, Text, StyleSheet , Pressable, TouchableOpacity} from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../hooks/useStorage"; 

interface ModalProps {
  passwordValue?:string
  handeClose: () => void
}

export default function ModalPassword({ passwordValue, handeClose }: ModalProps) {
  const { setItem } = useStorage();

  const handleCopyPass = async () => {
    if(passwordValue){
      await Clipboard.setStringAsync(passwordValue);
      await setItem('@password', passwordValue);
      alert('Senha copiada com sucesso!');
     
      handeClose();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>
        <Pressable style={styles.button} onLongPress={handleCopyPass}>
          <Text style={styles.buttonText}>{passwordValue}</Text>
        </Pressable>
        <View style={styles.actionArea}>
          <TouchableOpacity style={styles.actionButton1} onPress={handeClose}>
            <Text style={styles.buttonText} >Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleCopyPass}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818A6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    padding: 20,
    width:  "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title:{
    fontSize: 24,
    fontWeight: "700",
    color: "#121221",
  },
  button:{
    width: "90%",
    backgroundColor: "#0E0E0E",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {    
    color: "#fff",
    fontWeight: "700"    
  },
  actionArea: {
    height: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
  actionButton1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DC6B19",    
    borderRadius: 8,
    height: '90%',
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#392DE9",
    borderRadius: 8,
    height: '90%',
  },
});
