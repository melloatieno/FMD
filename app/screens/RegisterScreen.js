import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput
} from "react-native";

function RegisterScreen(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>Create Account</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e80ee03e1e96cb2b912ea717686a81fa6ee09038d1f7ebf1712a89aecc5e994?",
            }}
            style={styles.image}
          />
          <View style={styles.view5}>
            <TextInput>Full Name</TextInput>
          </View>
        </View>
        <View style={styles.view6}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/422d89043bcb6fe293cafd6ca1bce33af1912fd9290e160709188253a86ce967?",
            }}
            style={styles.image}
          />
          <View style={styles.view7}>
          <TextInput>Email</TextInput>
          </View>
        </View>
        <View style={styles.view8}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3283fe17ac1659ea456b6fef47c36c8cecdc333361a864c55896b6b1d481e?",
            }}
            style={styles.image}
          />
          <View style={styles.view9}>
            <TextInput>Phone Number</TextInput>
          </View>
        </View>
        <View style={styles.view10}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad14f41ded1fab7b364ae05d67209fd2560c629fbd214fd3878aea34158c0d83?",
            }}
            style={styles.image}
          />
          <View style={styles.view11}>
            <TextInput>Password</TextInput>
          </View>
        </View>
        <View style={styles.view12}>
          <Text>Sign Up</Text>
        </View>
        <View style={styles.view13}>
          <Text>Already a Member? Sign in</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 40,
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 414,
    paddingBottom: 50,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view2: {
    backgroundColor: '#454B1B',
    borderCurve: "circular",
    width: 390,
    height: 360,
    borderRadius: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {

    width: 300,
    height: 450, 
    justifyContent: 'center',
    alignItems: "center",
    bottom: 100,
    borderRadius: 45,
    backgroundColor: "#FFF",
    alignSelf: "center",
    zIndex: 10,
    display: "flex",
    width: "100%",
    maxWidth: 351,
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    fontWeight: "300",
    padding: "40px 20px 21px",
  },
  view4: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 82, 155, 0.20)",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    padding: "21px 20px",
    flexDirection: "row", 
  },
  image: {
    width: 19,
    height: 19, 
  },
  view5: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view6: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 82, 155, 0.20)",
    backgroundColor: "#FFF",
    marginTop: 19,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "21px 20px",
  },
//   image2: {
//     fill: "rgba(0, 82, 155, 0.35)",
//     position: "relative",
//     width: 19,
//     aspectRatio: "1.27",
//   },
  view7: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view8: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 82, 155, 0.20)",
    backgroundColor: "#FFF",
    marginTop: 19,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "21px 20px",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
//   image3: { position: "relative", width: 19, aspectRatio: "1" },
  view9: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    margin: "auto 0",
  },
  view10: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 82, 155, 0.20)",
    backgroundColor: "#FFF",
    marginTop: 19,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "21px 20px",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  image4: { position: "relative", width: 19, aspectRatio: "1" },
  view11: {
    alignSelf: "start",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view12: {
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#454B1B",
    marginTop: 19,
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    padding: "20px 60px 13px",
    font: "700 24px",
  },
  view13: {
    color: "#454B1B",
    alignSelf: "center",
    marginTop: 22,
    font: "14px",
  },
});

export default RegisterScreen;