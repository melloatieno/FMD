import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';


function ImageUploadScreen() {

  const { selectedFile } = route.params;
  const sendImageToApi = async () => {
    const formData = new FormData();
    // Append the selected file to formData; make sure you have the correct file structure
    formData.append('image', {
      uri: selectedFile.uri,
      name: selectedFile.name || 'upload.jpg', 
      type: selectedFile.type || 'image/jpeg', 
    });

    try {
      const response = await axios.post('http://localhost:8080/diagnosis/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.result === "Fmd Found") {
        navigation.navigate('Results');
      } else {
        navigation.navigate('ResultsNegative');
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Upload failed", "Failed to upload image. Please try again.");
    }
  };
  
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
      {imageBase64 ? (
        <Image source={{ uri: selectedFile }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No Image Selected</Text>
      )}
      <View style={styles.view10}>
        <TouchableOpacity style={styles.view15} onPress={sendImageToApi}>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20}}>Scan Photo</Text>
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="auto"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/815f34fa1b2b2dad5d78ad7e8b9b7d0c8293ca45e6c0acf20fd9532d5ae416f0?",
        }}
        style={styles.image2}
      />
      <View style={styles.view11}>
        <View style={styles.view12}>
          <Text>Home</Text>
        </View>
        <View style={styles.view13}>
          <Text>Results</Text>
        </View>
        <View style={styles.view14}>
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
        paddingBottom: 22,
        paddingTop: 20,
        flexDirection: "column",
        alignItems: "center",
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
        font: "700 16px ",
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
    display: "flex",
    marginTop: 29,
    flexDirection: "column",
    alignItems: "stretch",
    color: "#454B1B",
    padding: "26px 42px 26px 13px",
  },
  view8: {
    font: "400 20px Roboto",
  },
  view9: {
    marginTop: 13,
    whiteSpace: "nowrap",
    font: "300 16px Roboto",
  },
  image1: {
    position: "relative",
    marginTop: 46,
    width: 200,
    maxWidth: "100%",
    aspectRatio: "1",
  },
  view10: {
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#454B1B",
    marginTop: 51,
    width: "100%",
    maxWidth: 311,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    padding: "19px 60px",
    font: "700 24px Roboto",
  },
  image2: {
    position: "relative",
    marginTop: 99,
    width: 139,
    maxWidth: "100%",
    aspectRatio: "5.88",
  },
  view11: {
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    gap: 20,
    fontSize: 12,
    color: "rgba(69, 75, 27, 0.80)",
    fontWeight: "500",
    whiteSpace: "nowrap",
    padding: "0 20px",
  },
  view12: {
    color: "#454B1B",
    fontFamily: "Roboto",
  },
  view13: {
    fontFamily: "Roboto",
  },
  view14: {
    fontFamily: "Roboto",
  },
  view15: {
    backgroundColor: "rgba(0, 82, 155, 0.1)",
    alignSelf: "stretch",
    minHeight: 14,
    marginTop: 25,
    width: "100%",
  },
});

export default ImageUploadScreen;