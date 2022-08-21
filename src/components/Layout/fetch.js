const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
};

fetch(url, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
