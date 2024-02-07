import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

function ScanScreen(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text>Hi Mary,</Text>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5} />
          <View style={styles.view6} />
        </View>
      </View>
      <View style={styles.view7}>
        <View style={styles.view8}>
          <Text>Welcome to FMD Application</Text>
        </View>
        <View style={styles.view9}>
          <Text>Guardians of Well-Being: Snap, Analyze, Heal.</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef82720ad2693e991638057235e4d81fab4a6e99ea1288c9f6893f171f771ccc?",
        }}
        style={styles.image1}
      />
      <View style={styles.view10}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4db205828c6d71d1d40f05171bac68abcae314610bae493a727f7854956c52fc?",
          }}
          style={styles.image2}
        />
        <View style={styles.view11}>
          <Text>Scanning.....</Text>
        </View>
      </View>
      <View style={styles.view12}>
      <TouchableOpacity style={styles.view14}>
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>Cancel Scanning</Text>
      </TouchableOpacity>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3806dad03111e7674272d1a33fd3b4d84559a76e109c53069887f828e7c96eed?",
        }}
        style={styles.image3}
      />
      <View style={styles.view13}>
        <View style={styles.view14}>
          <Text>Home</Text>
        </View>
        <View style={styles.view15}>
          <Text>Results</Text>
        </View>
        <View style={styles.view16}>
          <Text>Back</Text>
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
    paddingTop: 20,
    paddingBottom: 35,
    flexDirection: "column",
  },
  view2: {
    borderRadius: 40,
    backgroundColor: "#454B1B",
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "33px 50px",
  },
  view3: {
    color: "#FFF",
    font: "700 16px Roboto, sans-serif ",
    paddingLeft: 20,
    paddingTop: 20,
  },
  view4: {
    alignItems: "stretch",
    alignSelf: "start",
    display: "flex",
    marginTop: 4,
    flexDirection: "column",
    padding: "2px 0",
  },
  view5: { backgroundColor: "#FFF", flexShrink: 0, height: 1 },
  view6: {
    background:
      "linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF",
    marginTop: 4,
    flexShrink: 0,
    height: 1,
  },
  view7: {
    borderRadius: 5,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#FFF",
    alignSelf: "center",
    display: "flex",
    marginTop: 29,
    flexDirection: "column",
    alignItems: "stretch",
    padding: "26px 42px 26px 13px",
  },
  view8: {
    color: "#454B1B",
    font: "400 20px Roboto, sans-serif ",
  },
  view9: {
    color: "#454B1B",
    marginTop: 13,
    whiteSpace: "nowrap",
    font: "300 16px Roboto, sans-serif ",
  },
  image1: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    marginTop: 34,
    width: 200,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view10: {
    alignSelf: "center",
    display: "flex",
    marginTop: 20,
    alignItems: "stretch",
    gap: 13,
    padding: "0 20px",
  },
  image2: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view11: {
    color: "rgba(0, 0, 0, 0.50)",
    alignSelf: "center",
    margin: "auto 0",
    font: "400 12px Roboto, sans-serif ",
  },
  view12: {
    color: "#FFF",
    whiteSpace: "nowrap",
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#454B1B",
    alignSelf: "center",
    marginTop: 19,
    width: "100%",
    maxWidth: 311,
    justifyContent: "center",
    alignItems: "center",
    padding: "19px 60px",
    font: "700 24px Roboto, sans-serif ",
  },
  image3: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    marginTop: 97,
    width: 139,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "5.79",
  },
  view13: {
    justifyContent: "space-between",
    alignItems: "stretch",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    padding: "0 20px",
  },
  view14: {
    color: "#454B1B",
    font: "500 12px Roboto, sans-serif ",
  },
  view15: {
    color: "rgba(69, 75, 27, 0.80)",
    font: "500 12px Roboto, sans-serif ",
  },
  view16: {
    color: "rgba(69, 75, 27, 0.80)",
    font: "500 12px Roboto, sans-serif ",
  },

});

export default ScanScreen;