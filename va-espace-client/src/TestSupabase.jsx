import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const TestSupabase = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Create client from env vars
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from("va_espace_client_content")
        .select("*");
      console.log("Fetched data:", data, "Error:", error);
      setData(data);
      setError(error);
    };

    fetchContent();
  }, []);

  if (error) return <div>Error fetching Supabase: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Supabase Table Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestSupabase;
