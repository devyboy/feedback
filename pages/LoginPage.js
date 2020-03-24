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
  TextInput,
  Picker,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';


function LoginPage({ navigation }) {
  const [inst, onChangeInst] = React.useState(null);
  const [user, onChangeUser] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Login to Feedback</Text>
            <View style={styles.sectionDescription}>

              <View style={styles.inputContainer}>
                <Text>Institution:</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text => onChangeInst(text)}
                  value={inst}
                  autoCapitalize="none"
                  placeholder="CCHS"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text>Username:</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text => onChangeUser(text)}
                  value={user}
                  textContentType="username"
                  autoCompleteType="username"
                  placeholder="username"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text>Password:</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text => onChangePass(text)}
                  value={pass}
                  secureTextEntry
                  placeholder="password"
                  textContentType="password"
                  autoCompleteType="password"
                />
              </View>

              <Button
                title="Login"
                type="solid"
                buttonStyle={{ backgroundColor: "black", marginTop: 30, width: 200 }}
                onPress={() => navigation.navigate("home")}
              />
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
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: "black",
  },
  sectionDescription: {
    marginTop: 30,
    alignItems: "center"
  },
  inputContainer: {
    width: "75%",
    marginVertical: 10
  },
  textInput: {
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

export default LoginPage;
