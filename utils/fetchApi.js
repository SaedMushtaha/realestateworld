import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '22e6efef80msh70156ef75103547p1db60djsnad2eb1ebe17c' ,
    },
  });
    
  return data;
}


// process.env.NEXT_PUBLIC_RAPID_API_KEY 
// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': '22e6efef80msh70156ef75103547p1db60djsnad2eb1ebe17c'
// }