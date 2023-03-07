const API = "http://10.0.2.2:3000";

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
