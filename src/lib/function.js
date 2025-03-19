import axios from "axios";

export const kryJson = async () => {
  const response = await axios.get("https://fks1311.github.io/cdn/public/kry_project_json.json");
  return { res: response.data };
};
