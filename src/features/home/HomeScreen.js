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
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Business</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Politics</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Tech</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Healty</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Science</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Educations</Text>
        <Text style={{ fontSize: normalize(12), fontFamily: 'Poppins_500Medium', color: '#C4C4C4' }}>Events</Text>
      </ScrollView>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View style={styles.hero}>
          <Text style={{ fontSize: normalize(14), fontFamily: 'Poppins_500Medium' }}>
            Making the Most of Outdoor Space for a Bountiful and Beautiful Vegetable Garden
          </Text>

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{ color: '#F98121', fontFamily: 'Poppins_300Light', fontSize: normalize(11) }}>Nature Channel</Text>
            <Text style={{ color: '#C4C4C4' }}>{'\u2B24'}</Text>
            <Text style={{ color: '#C4C4C4', fontFamily: 'Poppins_300Light', fontSize: normalize(11) }}>36min ago</Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
            <Image source={Image1} alt="Image" resizeMode="cover" style={{ width: '60%', height: 300, borderRadius: 10 }} />
            <View style={{ gap: 10, width: '40%' }}>
              <Image
                source={Image2}
                alt="Image"
                resizeMode="cover"
                style={{ width: '100%', height: 145, borderRadius: 10 }}
              />
              <Image
                source={Image3}
                alt="Image"
                resizeMode="cover"
                style={{ width: '100%', height: 145, borderRadius: 10 }}
              />
            </View>
          </View>

          <View style={styles.interactiveButtonContainer}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={LikeIcon} resizeMode="contain" style={{ width: 20, height: 20 }} />
                <Text style={{ color: '#828282b3', fontFamily: 'Poppins_400Regular', fontSize: normalize(11) }}>800</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={CommentIcon} resizeMode="contain" style={{ width: 20, height: 20 }} />
                <Text style={{ color: '#828282b3', fontFamily: 'Poppins_400Regular', fontSize: normalize(11) }}>200</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={ShareIcon} resizeMode="contain" style={{ width: 20, height: 20 }} />
                <Text style={{ color: '#828282b3', fontFamily: 'Poppins_400Regular', fontSize: normalize(11) }}>122</Text>
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
          marginTop: 20,
          fontSize: normalize(12),
        }}
      >
        View All
      </Text>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(16), marginHorizontal: 20 }}>
        Popular Redactions
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20, gap: 30, marginTop: 20, paddingBottom: 50 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.redactionCircle}>
          <Image source={CNN} resizeMode="contain" style={{ width: 50, height: 50 }} />
        </View>
      </ScrollView>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(16), marginHorizontal: 20 }}>Browse By</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 40,
          gap: 30,
          marginTop: 20,
          marginBottom: 25,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(12) }}>Trending</Text>
        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(12), color: '#C4C4C4' }}>Recomendation</Text>
        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(12), color: '#C4C4C4' }}>Newest</Text>
        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: normalize(12), color: '#C4C4C4' }}>Weekly Highlight</Text>
      </ScrollView>
      <View style={styles.cardRedaction}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: normalize(14) }}>
            2021&apos;s most brilliant horror movie
          </Text>
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: normalize(11.5), color: '#1C1C1C' }}>
            The new Candyman and how horror is reckoning with racism
          </Text>
        </View>
        <Image source={Image1} resizeMode="cover" style={{ width: '30%', height: 130, borderRadius: 10 }} />
      </View>
      <View style={styles.cardRedaction}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: normalize(14) }}>
            2021&apos;s most brilliant horror movie
          </Text>
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: normalize(11.5), color: '#1C1C1C' }}>
            The new Candyman and how horror is reckoning with racism
          </Text>
        </View>
        <Image source={Image1} resizeMode="cover" style={{ width: '30%', height: 130, borderRadius: 10 }} />
      </View>
      <View style={styles.cardRedaction}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: normalize(14) }}>
            2021&apos;s most brilliant horror movie
          </Text>
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: normalize(11.5), color: '#1C1C1C' }}>
            The new Candyman and how horror is reckoning with racism
          </Text>
        </View>
        <Image source={Image1} resizeMode="cover" style={{ width: '30%', height: 130, borderRadius: 10 }} />
      </View>
      <View style={styles.cardRedaction}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: normalize(14) }}>
            2021&apos;s most brilliant horror movie
          </Text>
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: normalize(11.5), color: '#1C1C1C' }}>
            The new Candyman and how horror is reckoning with racism
          </Text>
        </View>
        <Image source={Image1} resizeMode="cover" style={{ width: '30%', height: 130, borderRadius: 10 }} />
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
