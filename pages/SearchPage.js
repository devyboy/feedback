/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar, Divider, ListItem } from 'react-native-elements';

function SearchPage({ navigation, route }) {
  const [search, updateSearch] = React.useState(null);
  const list = [
    {
      name: 'Sepehr Hanz',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'EM Attending physician',
      title: 'SH',
      id: 410231
    },
    {
      name: 'Jenna Fredette',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'EM Program Director',
      title: 'JF',
      id: 581235
    },
    {
      name: 'David Jennings',
      subtitle: 'EM Resident',
      title: 'DJ',
      id: 109231
    }
  ];

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center' }}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Search for people</Text>
          <SearchBar
            placeholder='Search...'
            onChangeText={updateSearch}
            value={search}
            platform='android'
            containerStyle={styles.searchBar}
            autoCorrect={false}
            spellCheck={false}
          />
          <View style={styles.sectionDescription}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Tip: </Text>
              When searching, omit titles such as "Dr." or "Mrs." as they have
              no effect on the results.
            </Text>
          </View>
          <Divider style={{ marginTop: 15, backgroundColor: '#000' }} />
          <ScrollView>
            {list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
                onPress={() =>
                  navigation.navigate('person', {
                    person: l
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: '600',
    color: 'black'
  },
  sectionDescription: {
    marginTop: 25,
    fontSize: 20,
    width: '80%',
    paddingHorizontal: 15
  },
  searchBar: {
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15
  },
  noResults: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '30%'
  }
});

export default SearchPage;
