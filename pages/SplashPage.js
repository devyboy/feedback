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
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';


function SplashPage({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Feedback</Text>
            <View style={styles.sectionDescription}>
              <Button
                title="Login"
                type="solid"
                buttonStyle={{ backgroundColor: "black", width: 200 }}
                onPress={() => navigation.navigate("login")}
              />
              <Button
                title="Register"
                type="solid"
                buttonStyle={{ backgroundColor: "black", marginTop: 10, width: 200 }}
                onPress={() => navigation.navigate("register")}
              />
              <TouchableOpacity style={styles.whatIsButton} onPress={() => navigation.navigate('whatis')}>
                <Text style={styles.whatIsText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    marginTop: Dimensions.get("window").height/4,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: "black",
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 35,
    alignItems: "center"
  },
  textInput: {
    width: "75%",
    fontSize: 16,
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 8
  },
  whatIsButton: {
    marginTop: 40,
  },
  whatIsText: {
    fontSize: 12
  }
});

export default SplashPage;
