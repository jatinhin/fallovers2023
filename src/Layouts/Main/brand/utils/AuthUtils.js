export const getUserType = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.user_type;
    }
    return null;
  } catch (error) {
    console.error("Error in getUserType:", error);
    return null;
  }
};
