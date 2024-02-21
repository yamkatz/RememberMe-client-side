import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "../service/storageService";
import axios from "axios";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async (skipTokenTest = false) => {
    try {
      const token = getToken();
      if (!token) return;
      const dataFromToken = jwtDecode(token);
      if (skipTokenTest) await axios.get(`/users/${dataFromToken._id}`);
      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      console.error(err);
    }
  };
};
export default useAutoLogin;
