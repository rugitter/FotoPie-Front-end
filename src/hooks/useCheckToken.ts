import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../store/auth/authSlice";
import { AppDispatch, RootState } from "../../store/store";

export const useCheckToken = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkToken());
  }, []);
};
