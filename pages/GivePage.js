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
import { Icon, Button } from 'react-native-elements'




function GivePage({ navigation, route }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionDescription}>
            <Button 
              title="My Evaluations"
              buttonStyle={{ backgroundColor: "#000", width: 200 }}
            />
            <Button 
              title="Sent Evaluations"
              buttonStyle={{ backgroundColor: "#000", marginVertical: 15 }} 
            />
            <Button 
              title="Draft Evaluations"
              buttonStyle={{ backgroundColor: "#fff", borderColor: "#000", borderWidth: 1 }}
              titleStyle={{ color: "#000" }}

            />
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

export default GivePage;
