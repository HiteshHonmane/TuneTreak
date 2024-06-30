import { useState, useEffect } from 'react';

const useFetchSongs = (initialQuery: string) => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      const searchQuery = query.trim() === "" ? "Atif" : query;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "2f8ec1fc40msh87d5856848d2f52p1b7503jsne20b9ce85403",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);  // Ensure loading is set to false after fetch completes
      }
    };

    fetchSongs();
  }, [query]);

  useEffect(() => {
    setQuery(initialQuery);  // Update query when initialQuery changes
  }, [initialQuery]);

  return { songs, loading, error };
};

export default useFetchSongs;
