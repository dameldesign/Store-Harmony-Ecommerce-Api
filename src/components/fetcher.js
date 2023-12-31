const fetcher = (url) =>
  fetch(
    `${import.meta.env.VITE_API_BASE_URL}/stores/${
      import.meta.env.VITE_STORE_ID
    }${url}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    }
  ).then((response) => response.json());


const postRequest = (url, body) =>
  fetch(
    `${import.meta.env.VITE_API_BASE_URL}/stores/${
      import.meta.env.VITE_STORE_ID
    }${url}`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    }
  ).then((response) => response.json());

export {fetcher, postRequest};
