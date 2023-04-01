function submitData(name, email) {
    // const formData = { name, email };

    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(resp => resp.json())
      .then(data => {
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }