const API = "http://192.168.0.129:3000/";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY2NWI1MDM2ZDFkYzA5NTVkYjI4YSIsInVzZXJuYW1lIjoidG9tYXMiLCJpYXQiOjE2NzkwODY3ODYsImV4cCI6MTY3OTY5MTU4Nn0.TP9mymFTG2YdR4c9kDLqoNp8HhfX3D8q5gvpEBLarHk";

//Registro
interface userCreate {
  name: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
}

export const registerUser = async (newUser: userCreate) => {
  const res = await fetch(API + "signup", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return await res.json();
};

//login
interface userLogin {
  username: string;
  password: string;
}

export const loginUser = async (user: userLogin) => {
  const res = await fetch(API + "signin", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
};

//Get tweets
export const getTweets = async () => {
  const res = await fetch(API + "tweet", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

//Get profile
export const getProfile = async () => {
  const res = await fetch(API);
  return await res.json();
};

//Edit profile
export const editProfile = async (a: any) => {
  const res = await fetch(API, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(a),
  });
  return await res.json();
};
