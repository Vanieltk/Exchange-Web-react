import axios from 'axios';

const Conecta = axios.create({baseURL: ' http://localhost:3000'});

export default Conecta;