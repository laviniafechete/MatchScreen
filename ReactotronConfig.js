import Reactotron, { networking, trackGlobalErrors, openInEditor } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    // Your real ip address 👇
    .configure({ host: '192.168.100.15', port: 9090 })
    .useReactNative()
    .use(trackGlobalErrors({
        offline: true,
    }))
    .use(openInEditor())
    .connect()
    .clear();