const AUTH_CHANGE_EVENT = "task-management-auth-change";

const parseSessionItem = (key) => {
  const rawValue = sessionStorage.getItem(key);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    console.error(`Unable to parse session item for ${key}`, error);
    return null;
  }
};

const notifyAuthChange = () => {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};

export const getActiveSessions = () => ({
  admin: parseSessionItem("active-admin"),
  manager: parseSessionItem("active-manager"),
  employee: parseSessionItem("active-employee"),
});

export const setActiveUserSession = (user) => {
  sessionStorage.removeItem("active-admin");
  sessionStorage.removeItem("admin-jwtToken");
  sessionStorage.removeItem("active-manager");
  sessionStorage.removeItem("manager-jwtToken");
  sessionStorage.removeItem("active-employee");
  sessionStorage.removeItem("employee-jwtToken");

  if (user?.role === "admin") {
    sessionStorage.setItem("active-admin", JSON.stringify(user));
    sessionStorage.setItem("admin-jwtToken", user.jwtToken);
  } else if (user?.role === "manager") {
    sessionStorage.setItem("active-manager", JSON.stringify(user));
    sessionStorage.setItem("manager-jwtToken", user.jwtToken);
  } else if (user?.role === "employee") {
    sessionStorage.setItem("active-employee", JSON.stringify(user));
    sessionStorage.setItem("employee-jwtToken", user.jwtToken);
  }

  notifyAuthChange();
};

export const clearActiveUserSession = (role) => {
  if (role === "admin") {
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
  } else if (role === "manager") {
    sessionStorage.removeItem("active-manager");
    sessionStorage.removeItem("manager-jwtToken");
  } else if (role === "employee") {
    sessionStorage.removeItem("active-employee");
    sessionStorage.removeItem("employee-jwtToken");
  }

  notifyAuthChange();
};

export const subscribeToAuthChanges = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_CHANGE_EVENT, callback);
  };
};
