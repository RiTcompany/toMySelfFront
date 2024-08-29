

export const baseUrl = "http://localhost:8000";
export const baseApiUrl = baseUrl + "/api/";

export async function sendPostRequest(url, data) {
    try {
        const response = await fetch(baseApiUrl + url, {
    
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    } catch (e) {
        return "404";
    }
}

export async function sendGetRequest(url) {
    try {
      const response = await fetch(baseApiUrl + url);
      return response.json();
    } catch {
      return "404";
    }
  }

  export async function sendPutRequest(url, data) {
    try {

        const response = await fetch(baseApiUrl + url, {
            method: "PUT",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: {name: 'vlad',}
        });

        return response.json();
    } catch (e) {
        return "404";
    }
}

export async function sendPutPhoto(url, data) {
    try {
        const response = await fetch(baseApiUrl + url, {
            method: "PUT",
            body: data,
        });

        return response.json();
    } catch (e) {
        return "404";
    }
}


export async function sendDeleteRequest(url) {
  try {
      const response = await fetch(baseApiUrl + url, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
          // No need for a request body in a DELETE request
      });

      return response.json();
  } catch (e) {
      return "404"; // You can customize the error handling as needed
  }
}

