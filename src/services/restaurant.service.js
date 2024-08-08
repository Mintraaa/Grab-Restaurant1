import Restaurants from "../components/Restaurants";
import api from "./api";

const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all Restaurant

const getALLRestaurant = async () => {
    return await api.get(RESTO_API);
} 
    
const RestaurantService = {
    getALLRestaurant
}
export default RestaurantService;