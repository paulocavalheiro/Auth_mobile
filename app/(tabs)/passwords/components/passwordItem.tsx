import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import * as Clipboard from "expo-clipboard";
import { View, StyleSheet, Text, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }: any) {
  const copyPass = async (chave: string) => {
    await Clipboard.setStringAsync(chave);
    alert("Senha copiada com sucesso!");
  };

  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{data}</Text>
      <View style={styles.icons}>
        <TabBarIcon
          name="trash"
          color={"#ffff"}
          onLongPress={removePassword}
        />
        <TabBarIcon name="copy" color={"#ffff"} onPress={() => copyPass(data)} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#ffff",
  },
  icons: {
    marginLeft: "auto",
    flexDirection: "row",
    gap: 15,
  },
});
