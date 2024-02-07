import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function ResultsScreen(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.textStyle}>Search Results</Text>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5} />
          <View style={styles.view6} />
        </View>
      </View>
      <View style={styles.view7}>
        <View style={styles.view8}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/575464539dcdc3f9267ca575bf3e8d554e0a506202ebb2b1a5bee999e5ef7fcc?",
            }}
            style={styles.image1}
          />
          <View style={styles.view9}>
            <Text>Confirmed Positive For FMD !</Text>
          </View>
        </View>
        <View style={styles.view10}>
          <Text>Causes</Text>
        </View>
        <View style={styles.view11}>
          <Text>
            Foot and Mouth Disease is caused by the Foot
            {"\n"}and Mouth Disease Virus (FMDV), a highly
            {"\n"}contagious virus belonging to the Picornaviridae
            {"\n"}family. The disease primarily affects cloven-hoofed
            {"\n"}animals such as cattle, swine, sheep, and goats.
          </Text>
        </View>
        <View style={styles.view12}>
          <Text>Symptoms</Text>
        </View>
        <View style={styles.view13}>
          <Text>
            1. Fever
            {"\n"}2. Vesicles and Ulcers
            {"\n"}3. Lameness
            {"\n"}4. Excessive Salivation
            {"\n"}5. Reduced Milk Production
          </Text>
        </View>
        <View style={styles.view14}>
          <Text>Treatment</Text>
        </View>
        <View style={styles.view15}>
          <Text>
            1. Isolation
            {"\n"}2. Pain Management
            {"\n"}3. Good Hygiene Practices
            {"\n"}4. Vaccination
          </Text>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b866be2e0bcc8a8e7af81d1acd5f7a45a641a82f0432f041534e36f540beba99?",
          }}
          style={styles.image2}
        />
        <View style={styles.view16}>
          <View style={styles.view17}>
            <Text>Home</Text>
          </View>
          <View style={styles.view18}>
            <Text>Results</Text>
          </View>
          <View style={styles.view19}>
            <Text>Back</Text>
          </View>
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
    display: "flex",
    marginTop: 24,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    padding: "0 13px 0 42px",
  },
  view8: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 13,
    color: "rgba(115, 6, 6, 0.87)",
  },
  image1: { position: "relative", width: 24, aspectRatio: "1" },
  view9: {
    fontFamily: "Roboto",
    alignSelf: "start",
    marginTop: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view10: {
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 32,
    fontSize: "bold",
  },
  view11: {
    fontFamily: "Roboto",
    marginTop: 17,
  },
  view12: {
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 21,
  },
  view13: {
    fontFamily: "Roboto",
    marginTop: 15,
  },
  view14: {
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 25,
  },
  view15: {
    fontFamily: "Roboto",
    marginTop: 17,
  },
  image2: {
    alignSelf: "center",
    position: "relative",
    width: 139,
    maxWidth: "100%",
    margin: "108px 0 0 15px",
    aspectRatio: "5.88",
  },
  view16: {
    justifyContent: "space-between",
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: "row",
    marginLeft: 15,
    gap: 20,
    fontSize: 12,
    color: "rgba(69, 75, 27, 0.80)",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  view17: {
    color: "#454B1B",
    fontFamily: "Roboto",
  },
  view18: {
    fontFamily: "Roboto",
  },
  view19: {
    fontFamily: "Roboto",
  },
});

export default ResultsScreen;