import { useQuery } from "@tanstack/react-query";
import axios from "./axios.jsx";
import Cookies from "js-cookie";

const useGetUser = () => {
  const token = Cookies.get("token");

  const {
    data: user = [],
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    },
  });

  return { user };
};

export default useGetUser;
