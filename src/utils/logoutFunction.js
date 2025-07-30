import axios from "./axios";
import Cookies from "js-cookie";

const logoutFunction = async () => {
    const token = Cookies.get("token");

    if (!token) {
        console.log("No token found.");
        return false;
    }

    try {
        await axios.post("/logout", null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        Cookies.remove("token");
        return true;
    } catch (error) {
        console.error("Logout failed", error);
        return false;
    }
};

export default logoutFunction;
