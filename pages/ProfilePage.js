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
import { Icon } from 'react-native-elements'




function ProfilePage({ navigation, route }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Profile</Text>
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
    paddingHorizontal: 24
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '600',
    color: "black"
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 20,
    flex: 1,
  }
});

export default ProfilePage;
