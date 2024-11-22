const tableBody = document.getElementById('postTable');
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.map(getData => {
      const row = tableBody.insertRow();
      const id = row.insertCell();
      const title = row.insertCell();
      const body = row.insertCell();

      id.textContent = getData.id;
      title.textContent = getData.title;
      body.textContent = getData.body;
    });
  })