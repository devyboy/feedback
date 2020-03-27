/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Clipboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';


function NonUserPage({ navigation, route }) {
  const [copied, setCopied] = React.useState(null);

  async function copyLink() {
    await Clipboard.setString("https://google.com");
    setCopied(true);
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View style={styles.sectionContainer}>
          <Text style={{ fontSize: 16 }}>
            Have the patient scan this QR code or send them the link below to be taken to the non-user feedback site.
            </Text>
          <Image source={require("../assets/qr-code.jpg")} style={styles.QR}></Image>
          <Text style={styles.link}>https://google.com</Text>
          <Button 
            title={copied ? "Link Copied" : "Copy Link"}
            buttonStyle={[{ backgroundColor: copied ? "#fff" : "#000" }, styles.button]}
            titleStyle={{ color: copied ? "#000" : "#fff" }}
            onPress={copyLink}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: "100%"
  },
  sectionContainer: {
    paddingHorizontal: 24
  },
  sectionDescription: {
    marginTop: 20,
    flex: 1,
  },
  link: {
    textAlign: 'center',
    padding: 5,
    backgroundColor: "#eee",
    fontSize: 16,
    marginTop: 10
  },
  QR: {
    height: 300,
    width: 300,
    alignSelf: "center"
  },
  button: {
    width: 150,
    marginTop: 25,
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 3
  }
});

export default NonUserPage;
