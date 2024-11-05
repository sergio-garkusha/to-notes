const JWT_NAME = import.meta.env.VITE_JWT_NAME || "ToNotesJWT";

export function setJWT(token: string) {
  localStorage.setItem(JWT_NAME, token);
}

export function getJWT() {
  return localStorage.getItem(JWT_NAME);
}

export function removeJWT() {
  localStorage.removeItem(JWT_NAME);
}
