import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Logo from '~assets/Logo.png';
import Notification from '~assets/Notification.png';
import Image1 from '~assets/Rectangle3.png';
import Image2 from '~assets/Rectangle4.png';
import Image3 from '~assets/Rectangle5.png';
import ThreeDotIcon from '~assets/ThreeDot.png';
import ShareIcon from '~assets/Share.png';
import LikeIcon from '~assets/Like.png';
import CommentIcon from '~assets/Comment.png';
import CNN from '~assets/CNN.png';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

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
        <Text style={styles.selectedMenu}>All News</Text>
        <Text>Business</Text>
        <Text>Politics</Text>
        <Text>Tech</Text>
        <Text>Healty</Text>
        <Text>Science</Text>
        <Text>Educations</Text>
        <Text>Events</Text>
      </ScrollView>

      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Making the Most of Outdoor Space for a Bountiful and Beautiful Vegetable Garden
          </Text>

          <View style={styles.heroSub}>
            <Text style={{ color: '#F98121', fontFamily: 'Poppins_300Light' }}>Nature Channel</Text>
            <Text style={{ color: '#C4C4C4' }}>{'\u2B24'}</Text>
            <Text style={{ color: '#C4C4C4', fontFamily: 'Poppins_300Light' }}>36min ago</Text>
          </View>

          <View style={styles.heroImage}>
            <Image source={Image1} alt="Image" resizeMode="stretch" style={{ width: 175, height: 205 }} />
            <View style={{ gap: 10 }}>
              <Image source={Image2} alt="Image" resizeMode="stretch" style={{ width: 97, height: 97 }} />
              <Image source={Image3} alt="Image" resizeMode="stretch" style={{ width: 97, height: 97 }} />
            </View>
          </View>

          <View style={styles.interactiveButtonContainer}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={styles.interactiveButtonWrapper}>
                <Image source={LikeIcon} resizeMode="stretch" style={{ width: 12, height: 12 }} />
                <Text style={styles.interactiveButtonText}>800</Text>
              </View>
              <View style={styles.interactiveButtonWrapper}>
                <Image source={CommentIcon} resizeMode="stretch" style={{ width: 12, height: 12 }} />
                <Text style={styles.interactiveButtonText}>200</Text>
              </View>
              <View style={styles.interactiveButtonWrapper}>
                <Image source={ShareIcon} resizeMode="stretch" style={{ width: 12, height: 12 }} />
                <Text style={styles.interactiveButtonText}>122</Text>
              </View>
            </View>
            <Image source={ThreeDotIcon} style={{ borderColor: '#828282' }} />
          </View>
        </View>
      </View>

      <Text
        style={{
          marginHorizontal: 20,
          color: '#C4C4C4',
          fontFamily: 'Poppins_700Bold',
          textAlign: 'right',
          marginTop: 10,
        }}
      >
        View All
      </Text>

      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 18, marginHorizontal: 20 }}>Popular Redactions</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20, gap: 30, marginTop: 10, paddingBottom: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 40, height: 40 }} />
        </View>
      </ScrollView>

      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 18, marginHorizontal: 20 }}>Browse By</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 30,
          marginTop: 10,
          marginBottom: 25,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ fontFamily: 'Poppins_700Bold' }}>Tending</Text>
        <Text style={{ fontFamily: 'Poppins_400Regular' }}>Recomendation</Text>
        <Text style={{ fontFamily: 'Poppins_400Regular' }}>Newest</Text>
        <Text style={{ fontFamily: 'Poppins_400Regular' }}>Weekly Highlight</Text>
      </ScrollView>

      <View style={styles.cardRedaction}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 15 }}>2021&apos;s most brilliant horror movie</Text>
          <Text>The new Candyman and how horror is reckoning with racism</Text>
        </View>
        <Image source={Image1} resizeMode="stretch" style={{ width: 100, height: 100 }} />
      </View>
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

    width: '100%',
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
    paddingTop: 15,
    marginBottom: 25,
  },
  selectedMenu: {
    borderBottomColor: '#F98121',
    borderBottomWidth: 2.2,
    borderBottomEndRadius: 20,
    paddingBottom: 5,
  },
  hero: {
    backgroundColor: 'rgba(242,242,242,.48)',
    padding: 20,
    borderRadius: 10,
  },
  heroTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
  },
  heroSub: {
    flexDirection: 'row',
    gap: 10,
  },
  heroImage: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  interactiveButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  interactiveButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  interactiveButtonText: {
    color: '#828282b3',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  redactionCircle: {
    backgroundColor: '#F2F2F2',
    borderRadius: 9999,
    padding: 10,
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.3)',
  },
  cardRedaction: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
