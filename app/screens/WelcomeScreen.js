import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text>Foot And Mouth Disease Detector!</Text>
        </View>
        <View style={styles.view3}>
        <Image style={styles.logo} source={require("../assets/fmdicon.png")} />
        </View>
        <View style={styles.view4}>
          <TouchableOpacity style={styles.view14}  onPress={() => navigation.navigate('Login')} >
            <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>Login To Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 40,
    backgroundColor: "#454B1B",
    display: "flex",
    maxWidth: 414,
    flexDirection: "column",
    alignItems: "center",
    color: "#000",
    padding: "50px 52px",
    height: 750,
  },
  view2: {
    color: "#FFF",
    marginTop: 148,
    font: "300 14px Roboto",
  },

  view3: {
    backgroundColor: "#FFF",
    marginTop: 111,
    width: 241,
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    padding: "60px 60px 62px",
    font: "400 30px Roboto ",
  },

  logo: {
    maxWidth: "100%",
    height: 150,
  },

  view4: {
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "blue",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "stretch",
    whiteSpace: "nowrap",
    padding: "17px 58px",
    font: "700 24px Roboto ",
  },
});

export default WelcomeScreen;