import "whatwg-fetch";

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    const error = new Error("Unauthorized request");
    error.response = response;
    throw error;
  } else {
    const error = new Error("FAIL fetch");
    error.response = response;
    throw error;
  }
}

export const fetchAPI = (url, method) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: method
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(res => JSON.parse(JSON.stringify(res)));
