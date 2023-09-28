import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoadiing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.tasks ? data.tasks : data.task);
      setLoadiing(false);
      console.log(data);
    };

    setTimeout(async () => {
      try {
        await getData();
      } catch (error) {
        setError("Opps something went wrong");
        setLoadiing(false);
      }
    });
  }, []);

  return { data, loading, error };
};
