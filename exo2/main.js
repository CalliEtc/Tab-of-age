async function api() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);

      const tabName = data.map(getPrenom);

      function getPrenom(item){
          return (item.name)
      }
      
      console.log(tabName)

    } catch (error) {
      console.error('Une erreur s\'est produite : ', error);
    }
  }
  
  api();