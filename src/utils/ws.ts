import { io } from 'socket.io-client';
import Config from 'react-native-config';

const socket = io(Config.WS_ENDPOINT, { autoConnect: false });

export default socket;
