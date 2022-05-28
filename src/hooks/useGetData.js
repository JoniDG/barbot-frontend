import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(url);
  
        setState({
          data: res.data,
          error: null,
          loading: false,
        });
        
      } catch (error) {
        setState({
          data: [],
          error: error,
          loading: false,
        });
      }
    };
    getData();
  }, [url])
  return [state.data, state.loading, state.error];
};

export default useGetData;
