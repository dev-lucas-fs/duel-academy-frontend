
export default function useToken() {
  function getToken() {
    const token = JSON.parse(localStorage.getItem("token"))

    if(token === null)
      return token

    return token.token
  }

  function saveToken(token: string) {
    localStorage.setItem("token", JSON.stringify({
      token
    }))
  }

  return {
    getToken,
    saveToken
  };
}