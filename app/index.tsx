import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function FsaCabenit() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://dev-account.fivestarairways.com/trips' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});