export const SaveUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const GetUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const DeleteUserLocalStorage = () => {
  localStorage.removeItem("user");
};
