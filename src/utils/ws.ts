import { io } from 'socket.io-client';

const socket = io('http://192.168.1.4:4000', { auth: { user: 'fifi' } });

export default socket;