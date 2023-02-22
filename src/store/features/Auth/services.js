import { toast } from "react-hot-toast";

export const emailPasswordSignUp = async (thunkObj) => {
  const loading = toast.loading("Creating Account");
  try {
    const { email, password, navigate, name } = thunkObj;
    const response = await createUserWithEmailAndPassword(
      name,
      email,
      password
    );
    localStorage.setItem("assignment/user-id", response?.accessToken);
    toast.success("Sign In Successful", { id: loading });
    return response.user;
  } catch (error) {
    toast.error(error, { id: loading });
  }
};

export const emailPasswordSignIn = async (signinData) => {
  const loading = toast.loading("Logging In... ");

  try {
    const { email, password } = signinData;
    const response = await signInWithEmailAndPassword(email, password);
    localStorage.setItem("assignment/user-id", response?.accessToken);

    toast.success("Sign In Successful", { id: loading });
    return response.user;
  } catch (error) {
    toast.error(error, { id: loading });
  }
};

export const userLogout = async () => {
  try {
    localStorage.removeItem("assignment/user-id");
    toast.success("Sign Out Successful");
  } catch (error) {
    toast.error(error);
  }
};
async function signInWithEmailAndPassword(email, password) {
  const response = await fetch(`${backendUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();
  return data;
}

async function createUserWithEmailAndPassword(name, email, password) {
  const response = await fetch(`${backendUrl}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();
  return data;
}

export async function getUserInfo(token) {
  const response = await fetch(`${backendUrl}/api/auth/validateUser`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();
  return data;
}
