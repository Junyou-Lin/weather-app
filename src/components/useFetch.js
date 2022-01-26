import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await axios.get(url);
      setData(res);
    };
    fetchWeather();
  }, [url]);

  return data;
}
