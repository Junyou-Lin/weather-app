import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);


useEffect(() => {
  axios.get(url).then(
    (response) => {
      setData(response.data);
    }
  )
}, [url])

  return data;
}


