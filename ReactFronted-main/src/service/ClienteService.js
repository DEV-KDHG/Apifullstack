import axios from 'axios';

const CLIENTE_BASE_REST_API_URL = "http://localhost:9090/api/v1/clientes"; 
const CLIENTE_BASE_REST_API_URL_POST = "http://localhost:9090/api/v1/clientes/mandar"; 


class ClienteService {
getAllClientes(){
    return axios.get(CLIENTE_BASE_REST_API_URL); 
}
createCliente (cliente){
return axios.post(CLIENTE_BASE_REST_API_URL_POST,cliente);
}
}
export default new ClienteService();