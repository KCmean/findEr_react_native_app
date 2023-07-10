import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env'

// const rapidapiKey = RAPID_API_KEY;

const useFetch = ( endpoint, query ) => {
    
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)



    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '367d7599e9msh0719afe58a8fbedp139a43jsn9a00e60bcd19',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
      };

      const fetchData = async () => {
        isLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setError(null);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('ERROR')
        }finally{
            setIsLoading(false);
        }
      };


        useEffect(() => {
            fetchData();

        })

        const reFetch = () => {
            setIsLoading(true);
            fetchData();
        }
            
      
    return { data, isLoading, error, reFetch };

}

export default useFetch;