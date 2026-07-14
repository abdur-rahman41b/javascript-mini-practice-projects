let usersContainer = document.querySelector(".people-container");
let searchInput = document.querySelector('.searchInput')

const users = [
  {
    profileUrl:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-1252107-2381069.jpg&fm=jpg",
    name: "Alice",
    email: "alice@example.com",
  },
  {
    profileUrl:
      "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
    name: "Bob",
    email: "mr.bob@hotmail.com",
  },
  {
    profileUrl:
      "https://cdn.prod.website-files.com/5fd2ba969b6ce08fc68b0904/63d82c31dd030abc0865ceb3_best-headshot-poses-cover.webp",
    name: "Mia",
    email: "mia2003@gmail.com",
  },
  {
    profileUrl:
      "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
    name: "Diana Prince",
    email: "diana@example.com",
  },
  {
    profileUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/050/266/802/small_2x/portrait-of-happy-young-asian-businesswoman-looking-at-camera-arms-crossed-folded-smiling-woman-executive-manager-secretary-offering-professional-business-services-standing-in-office-free-photo.jpg",
    name: "Ms. Smith",
    email: "ms_smith@yahoo.com",
  },
  {
    profileUrl:
      "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
    name: "Anne Jonson",
    email: "annejonson@nlu.hl",
  },
  {
    profileUrl:
      "https://t4.ftcdn.net/jpg/09/69/34/27/360_F_969342778_BCPcWUTyPG7RsXUUPaJ2jDNiiCzrtyOd.jpg",
    name: "Alisha",
    email: "alisha@hotmail.com",
  },
  {
    profileUrl:
      "https://www.shutterstock.com/image-photo/photo-beautiful-young-business-woman-260nw-1906641364.jpg",
    name: "Maria Hok",
    email: "hokmaria@ndsu.edu",
  },
  {
    profileUrl:
      "https://thumbs.dreamstime.com/b/beautiful-business-woman-standing-grey-background-40671633.jpg",
    name: "Roxy Bold",
    email: "roxybold@example.com",
  },
  {
    profileUrl:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
    name: "Jay Hik",
    email: "jayhik010@gmail.com",
  },
];


function renderUsers(arr) {
  usersContainer.innerHTML = '' // before rendering users container in set as empty // outside of map means outside of loop
  arr.map(function (person_obj) {
  
    let {profileUrl, name, email} = person_obj // de-structuring
  
  
    let elem = document.createElement('div')
    elem.className = 'person-container'
    elem.innerHTML = `
        <img class="person-img" src="${profileUrl}" alt="">
        <div class="person-name-email-container">
          <p class="person-name">${name}</p>
          <p class="person-email">${email}</p>
        </div>`;
  
    usersContainer.append(elem);
  
  
  });
}

renderUsers(users) // initial render to show the profile on the 


function handleSearch(e) { // e = event object
  let searchValue = e.target.value; // = searchInput.value

  let filterUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase())
      ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    

  })
  renderUsers(filterUsers)
}

searchInput.addEventListener('input', handleSearch)