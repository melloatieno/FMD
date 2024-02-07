import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';


function LoginScreen({navigation}) {
    return (
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Text>Welcome Back</Text>
          </View>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/422d89043bcb6fe293cafd6ca1bce33af1912fd9290e160709188253a86ce967?",
                }}
                style={styles.image1}
              />
              <View style={styles.view5}>
              <TextInput placeholder='Username/Email'></TextInput>
              </View>
            </View>
            <View style={styles.view6}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/422620fe31d66e6af5c8326097999f74b80e010921c06b4a184301a6a39f60cf?",
                }}
                style={styles.image2}
              />
              <View style={styles.view7}>
              <TextInput placeholder='Password' secureTextEntry={true}></TextInput>
              </View>
            </View>
            <View style={styles.view8}>
              <Text>Forgot Password ?</Text>
            </View>
            <View style={styles.view9}>
                <TouchableOpacity style={styles.view14}  onPress={() => navigation.navigate('Photo')} >
                    <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view10}>
              <Text>Don't have an account? Register </Text>
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
        whiteSpace: "nowrap",
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
        border: "1px solid rgba(0, 82, 155, 0.20)",
        backgroundColor: "#FFF",
        flexDirection: "row",
        marginTop: 28,
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 20,
        padding: "21px 18px",
      },
      image1: {
        position: "relative",
        width: 19,
        aspectRatio: "1.27",
      },
      view5: {
        fontFamily: "Roboto",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
      },
      view6: {
        borderRadius: 10,
        border: "1px solid rgba(0, 82, 155, 0.20)",
        backgroundColor: "#FFF",
        flexDirection: "row",
        marginTop: 28,
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 19,
        padding: "19px 18px",
      },
      image2: { position: "relative", width: 20, aspectRatio: "1.05" },
      view7: {
        fontFamily: "Roboto",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        margin: "auto 0",
      },
      view8: {
        color: "#454B1B",
        alignSelf: "start",
        margin: "22px 0 0 18px",
        font: "italic 14px Roboto",
      },
      view9: {
        borderRadius: 10,
        border: "1px solid rgba(0, 82, 155, 0.20)",
        backgroundColor: "#454B1B",
        marginTop: 34,
        alignItems: "center",
        color: "#FFF",
        padding: "20px 60px 13px",
        font: "700 24px Roboto ",
      },
      view10: {
        color: "#454B1B",
        alignSelf: "center",
        marginTop: 34,
        font: "14px Roboto ",
      },
    });
    

export default LoginScreen;