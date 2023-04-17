
export default function useToken() {
  function getToken() {
    return JSON.parse(localStorage.getItem("token"))
  }

  function saveToken(token: string) {
    localStorage.setItem("token", token)
  }

  return {
    getToken,
    saveToken
  };
}