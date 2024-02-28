let liste = document.getElementById("listeUser");
let input = document.getElementById('input')
let tabName = []

async function api() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);

      tabName = data.map(getPrenom);
      function getPrenom(item){
          return (item.name)
      }
      console.log(tabName)

    } catch (error) {
      console.error('Une erreur s\'est produite : ', error);
    }
  }
  api();

  input.addEventListener("input", check)

  function check(event) {
    liste.innerHTML = ""
    let regex = new RegExp(`^${event.target.value}`,`i`)
    console.log(regex);
    for (let i = 0; i < tabName.length; i++) {
      if (regex.test(tabName[i]) ) {
      let ls = document.createElement('li')
      ls.appendChild(document.createTextNode(tabName[i]))
      liste.appendChild(ls)
      }
    }
  }