import Reactotron from 'reactotron-react-native'

Reactotron
    // Your real ip address 👇
    .configure({ host: '192.168.100.15', port: 9090 })
    //.useReactNative()
    .connect()