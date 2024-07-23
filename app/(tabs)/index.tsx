import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import ModalPassword from "./components/ModalPassword";

const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function HomeScreen() {
  const [size, setSize] = useState<number>(6);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  let password = "";
  const changeSize = (value: number) => {    
    setSize(Number(value.toFixed(0)));
  };

  const generatePass = () => {
    for(let i = 0, n=charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/images/logo.png")}
        style={styles.reactLogo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.sliderArea}>
        <Slider
          style={{ height: 50 }}
          minimumValue={3}
          maximumValue={20}
          minimumTrackTintColor="#EB5B00"
          thumbTintColor="#392DE9"
          value={size}
          onValueChange={(value) => changeSize(value)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={generatePass}>
        <Text style={styles.btnText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          passwordValue={passwordValue}
          handeClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF3E2",
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
    color: "#000000",
  },
  sliderArea: {
    marginTop: 20,
    padding: 8,
    width: "80%",
    backgroundColor: "#ffff",
    borderRadius: 8,
  },
  reactLogo: {
    paddingBottom: 60,
  },
  btn:{
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#392DE9",
    borderRadius: 8,
    marginTop: 24   
  },
  btnText:{
    color: "#ffff",
    fontSize: 18,
  }
  
});
