const API = "http://10.0.2.2:3000";

//Registro
interface userCreate {
  name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
}

export const register = async (newUser: userCreate) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return await res.json();
};


//login
interface userLogin {
  username: string;
  last_name: string;
}

export const login = async (user: userLogin) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
}


//Get tweets
export const getTweet = async () => {
  const res = await fetch(API);
  return await res.json();
}

//Get profile
export const getProfile = async () => {
  const res = await fetch(API);
  return await res.json();
}

//Edit profile
export const editProfile = async (a : any) => {
  const res = await fetch(API, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(a),
  });
  return await res.json();
}