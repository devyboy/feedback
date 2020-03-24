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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'


function HomePage({ navigation }) {

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Home Page</Text>
          <View style={styles.sectionDescription}>
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
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: '600',
    color: "black"
  },
  sectionDescription: {
    margin: 20,
    fontSize: 20
  }
});

export default HomePage;
