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




function HomePage({ navigation, route }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon 
          name="person"
          type="material"
          iconStyle={{ paddingRight: 15, fontSize: 30 }}
          onPress={() => navigation.navigate("profile")}
        />
      ),
    });
  });
  
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Welcome back.</Text>
          <View style={styles.sectionDescription}>
            <Button
              title="Give Feedback"
              type="solid"
              buttonStyle={{ backgroundColor: "#000", marginTop: 20, width: 200 }}
            />
            <Button
              title="Request Feedback"
              type="solid"
              buttonStyle={{ backgroundColor: "#000", marginTop: 15, width: 200 }}
            />
            <Button
              title="Request from a non-app user"
              type="outline"
              buttonStyle={{ borderColor: "#000", marginTop: 15, width: 200 }}
              titleStyle={{ color: "#000" }}
              onPress={() => navigation.navigate("nonuser")}
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

export default HomePage;
