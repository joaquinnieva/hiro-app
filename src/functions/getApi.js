import Axios from "axios";

export default function getApi(param) {
  const URL = `https://www.superheroapi.com/api.php/4680292395316818/${param}`;

  return Axios.get(URL).then((res) => {
    const api = res.data;
    return api;
  });
}
