type Entity = "users" | "cats" | "dogs"

type Endpoint = `/api/${Entity}/`
 
const endpointUsers: Endpoint = "/api/users/";
const endpoinDogs: Endpoint = "/api/dogs/";
const endpointCats: Endpoint = "/api/cats/";