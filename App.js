import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


//список языков с картинками
//картинки не работают в expo go
//причину я как и еще кучка людей до сих пор не нашли
//https://github.com/expo/expo/issues/30769
//https://github.com/expo/expo/issues/27783
const langs = [
  {
    id: '1',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
    lang: 'JavaScript',
    experience: 'Опыт: 2 года',
  },
  {
    id: '2',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg',
    lang: 'Python',
    experience: 'Опыт: меньше года',
  },
  {
    id: '3',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg',
    lang: 'PHP',
    experience: 'Опыт: 1 год',
  },
  {
    id: '4',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-plain.svg',
    lang: 'VisualBasic',
    experience: 'Опыт: 2 года',
  },
  {
    id: '5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg',
    lang: 'C, C#, C++',
    experience: 'Опыт: нет и не будет',
  },
];

//компонент элемента списка
const Item = ({lang, experience, img}) => (
  <View style={styles.item}>
      <Image source={{ uri: img }} style={styles.itemImage} />
      <View style={styles.content}>
        <Text style={styles.lang}>{lang}</Text>
        <Text style={styles.experience}>{experience}</Text>
      </View>
    </View>
);

//основной компонент
const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {setRefreshing(false)}, 2000); //типо обновляем =)
  };

//сам список целиком обернутый в скролл
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={langs}
          renderItem={({ item }) => <Item lang={item.lang} experience={item.experience} img={item.img} />}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

//react native стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0f0f0',
  },
  flatListContent: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    boxShadow: '0 2px 4px #D3D3D3',
    elevation: 5,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginRight: 20,
  },
  content: {
    flexDirection: 'column',
  },
  lang: {
    margin: 0,
    fontSize: 18,
    color: '#333333',
  },
  experience: {
    marginTop: 5,
    fontSize: 14,
    color: '#888888',
  },
});

export default App;
