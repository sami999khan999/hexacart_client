import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { getUser, useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types";
import { useNavigate } from "react-router-dom";
import { userExist, userNotExist } from "../redux/reducer/uesrReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandeler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const res = await login({
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
        gender,
        role: "user",
        dob: date,
        _id: user.uid,
      });

      if ("data" in res) {
        toast.success(res.data.message);
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const data = await getUser(user.uid);
            dispatch(userExist(data.user));
          } else {
            dispatch(userNotExist());
          }
        });

        navigate("/");
      } else {
        const error = res.error as FetchBaseQueryError;

        const message = error.data as MessageResponse;
        toast.error(message.message);
      }
    } catch (err) {
      toast.error("Sign In Failed");
    }
  };

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login </h1>

        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Date of birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <p>Already Signed In Once</p>
          <button onClick={loginHandeler}>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
