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
import { Avatar, Button } from 'react-native-elements'


function PersonPage(props) {
  let imgUrl
  let person = props.route.params.person;
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View style={styles.sectionContainer}>
          <Avatar
            rounded
            title={imgUrl || person.title}
            size="xlarge"
            containerStyle={{ alignSelf: "center", marginBottom: 20 }}
          />
          <Text style={styles.sectionTitle}>{person.name}</Text>
          <Text style={styles.sectionSubTitle}>{person.subtitle}</Text>
          <View style={styles.sectionDescription}>
            <Button
              title="Give Feedback"
              buttonStyle={{ backgroundColor: "#000" }}
              onPress={() => console.log(person.id)}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: '600',
    color: "black"
  },
  sectionDescription: {
    marginTop: 25,
  },
  searchBar: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  noResults: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "30%"
  },
  sectionSubTitle: {
    textAlign: "center",
    marginTop: 8,
    color: "#555",
    fontSize: 16
  }
});

export default PersonPage;
