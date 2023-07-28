import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import normalize from '~lib/normalize';
import { useEffect, useState } from 'react';

import Logo from '~assets/Logo.png';
import Notification from '~assets/Notification.png';
import Image1 from '~assets/Rectangle3.png';
// import Image2 from '~assets/Rectangle4.png';
// import Image3 from '~assets/Rectangle5.png';
// import ThreeDotIcon from '~assets/ThreeDot.png';
// import ShareIcon from '~assets/Share.png';
// import LikeIcon from '~assets/Like.png';
// import CommentIcon from '~assets/Comment.png';
// import CNN from '~assets/CNN.png';

const API_KEY = '01924249dccd4b28bc508e4247704a27';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const [selectedCategory, setSelectedCategory] = useState('Business');
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&sortBy=relevancy&category=${selectedCategory.toLowerCase()}`,
      {
        headers: { Authorization: API_KEY },
      }
    );
    const data = await res.json();

    if (data.status == 'ok') {
      setArticles(data.articles.slice(0, 10));
    }
  };

  useEffect(() => {
    getData();
  }, [selectedCategory]);

  if (!fontsLoaded) {
    return <Text>Nggak bisa load fonts</Text>;
  }

  return (
    <ScrollView
      style={{
        ...styles.container,
        paddingTop: insets.top + 15,
        paddingBottom: insets.bottom + 200,
        paddingRight: insets.right,
        paddingLeft: insets.left,
      }}
    >
      <View style={styles.header}>
        <Image source={Logo} resizeMode="stretch" style={styles.brand} />
        <Image source={Notification} resizeMode="stretch" style={styles.icon} />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.menu} showsHorizontalScrollIndicator={false}>
        {['Business', 'General', 'Health', 'Science', 'Sports', 'Technology'].map(item => (
          <Text
            key={item}
            style={
              item == selectedCategory
                ? styles.selectedMenu
                : { fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }
            }
            onPress={() => setSelectedCategory(item)}
          >
            {item}
          </Text>
        ))}
      </ScrollView>

      {articles &&
        articles.map((article, idx) => (
          <View style={styles.cardRedaction} key={idx + 'ad'}>
            <View style={{ width: '60%' }}>
              <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: normalize(14) }}>{article.title}</Text>
              <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: normalize(11.5), color: '#1C1C1C' }}>
                {article.description}
              </Text>
            </View>
            {article.urlToImage ? (
              <Image
                source={{ uri: article.urlToImage }}
                resizeMode="cover"
                style={{ width: '30%', height: 130, borderRadius: 10 }}
              />
            ) : (
              <Image source={Image1} resizeMode="cover" style={{ width: '30%', height: 130, borderRadius: 10 }} />
            )}
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  brand: {
    width: 120,
    height: 40,
    marginRight: 'auto',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  menu: {
    paddingHorizontal: 20,
    gap: 20,
    marginTop: 25,
    paddingVertical: 5,
    marginBottom: 25,
  },
  selectedMenu: {
    borderBottomColor: '#F98121',
    borderBottomWidth: 2.2,
    borderBottomEndRadius: 20,
    fontSize: normalize(12),
    fontFamily: 'Poppins_700Bold',
  },
  hero: {
    backgroundColor: 'rgba(242,242,242,.48)',
    padding: 30,
    borderRadius: 10,
  },
  interactiveButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  redactionCircle: {
    backgroundColor: '#F2F2F2',
    borderRadius: 9999,
    padding: 15,
    elevation: 20,
    shadowColor: 'rgba(0,0,0,0.2)',
  },
  cardRedaction: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    padding: 20,
  },
});
