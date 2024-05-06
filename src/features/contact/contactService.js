import axios from "axios";
import { base_url } from "../../utils/base_url";

const postQuery = async (contactData) => {
  const response = await axios.post(`${base_url}enquriy`, contactData);
  if (response.data) {
    return response.data;
  }
};

const contactService = {
  postQuery,
};

export default contactService;
