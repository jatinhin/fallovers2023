import React, { createContext, useContext, useState } from "react";

const UserRoleContext = createContext();

export function UserRoleProvider({ children }) {
  const [userRole, setUserRole] = useState(null);

  const setUserAsBrand = () => {
    setUserRole("brand");
  };

  const setUserAsInfluencer = () => {
    setUserRole("influencer");
  };

  return (
    <UserRoleContext.Provider
      value={{ userRole, setUserAsBrand, setUserAsInfluencer }}
    >
      {children}
    </UserRoleContext.Provider>
  );
}

export function useUserRole() {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useUserRole must be used within a UserRoleProvider");
  }
  return context;
}
