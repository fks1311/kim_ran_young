import axios from "axios";

export const fetchS3 = async () => {
  const response = await axios.get("https://kry-portfolio-cdn.s3.ap-southeast-2.amazonaws.com/content.json");
  return { res: response.data };
};
