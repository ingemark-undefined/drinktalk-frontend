import { io } from 'socket.io-client';

const socket = io('http://192.168.1.4:4000', { autoConnect: false });

export default socket;
