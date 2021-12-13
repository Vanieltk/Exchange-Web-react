import axios from 'axios';

const Conecta = axios.create({baseURL: 'http://8c46-181-220-61-80.ngrok.io/'});

export default Conecta;