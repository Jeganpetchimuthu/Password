import instance from "../api/instance";

const signup = async (Credentials) => {
  try {
    console.log("Signing up user!!!!");
    const res = await instance.authInstance.post("/register", Credentials);
    console.log("Signup Successfull!!!");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export default signup;
