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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function PhotoScreen({ navigation }) {
    const openCamera = async () => {
      const options = {
        saveToPhotos: true,
        mediaType: 'photo',
      };
      try {
        const result = await launchCamera(options);
        if (result.assets && result.assets.length > 0) {
          const source = { uri: result.assets[0].uri };
          console.log(source);
          // Navigate to the next screen with the image URI
          navigation.navigate('ImageUpload', { imageUri: source.uri });
        } else {
          console.log('User cancelled image picker');
        }
      } catch (error) {
        console.log('ImagePicker Error: ', error);
      }
    };
  
    const openGallery = async () => {
      const options = {
        selectionLimit: 1,
        mediaType: 'photo',
      };
      try {
        const result = await launchImageLibrary(options);
        if (result.assets && result.assets.length > 0) {
          const source = { uri: result.assets[0].uri };
          console.log(source);
          // Navigate to the next screen with the image URI
          navigation.navigate('ImageUpload', { imageUri: source.uri });
        } else {
          console.log('User cancelled image picker');
        }
      } catch (error) {
        console.log('ImagePicker Error: ', error);
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
      <View style={styles.view10}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4db205828c6d71d1d40f05171bac68abcae314610bae493a727f7854956c52fc?",
          }}
          style={styles.image1}
        />
        <View style={styles.view11}>
          <Text>Please tap on any option below to upload your photo</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2de15fb7440d611d2268fa94893b1d07f0602177d97e777b3c1877ff4029cbcd?",
        }}
        style={styles.image2}
      />
      <View style={styles.view12}>
        <Text>Please make sure your photo is clear</Text>
      </View>
      {/* <View style={styles.view13}>
        <Text>Take Photo</Text>
      </View> */}
      <View style={styles.view14}>
      <TouchableOpacity style={styles.view14} onPress={openCamera}>
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>Take Photo</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.view14}>
      <TouchableOpacity style={styles.view14} onPress={openGallery}>
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>Choose From Gallery</Text>
      </TouchableOpacity>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/524889eaaf7aad317a7212a947e8560a2b063e54cd669f49bb4ea57a0a933d9a?",
        }}
        style={styles.image3}
      />
      <View style={styles.view15}>
        <View style={styles.view16}>
          <Text>Home</Text>
        </View>
        <View style={styles.view17}>
          <Text>Results</Text>
        </View>
        <View style={styles.view18}>
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
    marginTop: 10,
    flexDirection: "column",
    alignItems: "stretch",
    color: "#454B1B",
    padding: "26px 42px 26px 13px",
  },
  view8: {
    font: "400 20px",
  },
  view9: {
    marginTop: 13,
    whiteSpace: "nowrap",
    font: "300 16px ",
  },
  view10: {
    flexDirection: "row",
    marginTop: 20,
    // paddingRight: 20,
    alignItems: "stretch",
    gap: 13,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.50)",
    fontWeight: "400",
    whiteSpace: "nowrap",
  },
  image1: { position: "relative", width: 24, aspectRatio: "1" },
  view11: {
    alignSelf: "start",
    marginTop: 10,
    flexGrow: 1,
  },
  image2: {
    position: "relative",
    marginTop: 18,
    width: 150,
    maxWidth: "100%",
    aspectRatio: "1",
  },
  view12: {
    color: "rgba(0, 0, 0, 0.50)",
    marginTop: 18,
    whiteSpace: "nowrap",
    font: "400 12px",
  },
  view13: {
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#454B1B",
    marginTop: 41,
    width: 311,
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    padding: "19px 60px",
    font: "700 24px",
  },
  view14: {
    borderRadius: 10,
    border: "1px solid rgba(0, 82, 155, 0.20)",
    backgroundColor: "#454B1B",
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    maxWidth: 311,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    padding: "20px 44px 13px",
  },
  image3: {
    position: "relative",
    marginTop: 41,
    width: 139,
    maxWidth: "100%",
    aspectRatio: "5.88",
  },
  view15: {
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    paddingRight: 20,
    gap: 20,
    fontSize: 12,
    color: "rgba(69, 75, 27, 0.80)",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  view16: {
    color: "#454B1B",
    fontFamily: "Roboto",
  },
});

export default PhotoScreen;