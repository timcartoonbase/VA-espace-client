import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useContent = (language) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("va_espace_client_content")
        .select("*");
      console.log("All rows:", data, "Error:", error);

      if (!error && data) {
        const tree = {};

        data.forEach(({ section, key, value }) => {
          if (!tree[section]) tree[section] = {};
          tree[section][key] = value;
        });

        setContent(tree);
      }

      setLoading(false);
    };

    fetchContent();
  }, [language]);

  return { content, loading };
};
