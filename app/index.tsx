import { Image, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const PlaceholderImage = require('../assets/images/imagess/background-image.png/');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}></View>
      <Link href={'/profile'} style={{color: 'blue'}}>Go to profile</Link>
      <Image source={PlaceholderImage} style={styles.image} />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    paddingTop: 48,
    paddingBottom: 0,
  },
  image: {
    width: 420,
    height: 750,
    borderRadius: 18,
  },
});
