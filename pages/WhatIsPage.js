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
import { Icon } from 'react-native-elements';


function WhatIsPage({ navigation }) {

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>What is Feedback?</Text>
          <View style={styles.sectionDescription}>
            <Text style={styles.whatIsText}>
              Feedback is just what the name suggests, a feedback app. This app lets you give
              feedback to healthcare providers blah blah blah whatever
            </Text>

            {/* <Button
              type="clear"
              containerStyle={{marginTop: 20}}
              onPress={() => navigation.goBack()}
              icon={
                <Icon
                  name='arrow-back'
                  type="material"
                  reverse
                />
              }
            /> */}
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
    fontSize: 27,
    fontWeight: '600',
    color: "black"
  },
  sectionDescription: {
    margin: 20,
    fontSize: 20
  }
});

export default WhatIsPage;
