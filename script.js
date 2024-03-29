const nameTextbox = document.querySelector('#name');
const preditButton = document.querySelector('.predict');
const container = document.querySelector('.container');
const url = "https://api.genderize.io/?name=";
const article = document.querySelector('.gender-card');



preditButton.addEventListener('click', async ()=>{
   try {
     let value = nameTextbox.value;
     let response = await fetch(url + value);
     let data = await response.json();
 
    //  let article = document.createElement('article');
    //  article.classList.add('gender-card');
    //  container.appendChild(article);

    nameTextbox.value = "";
    article.innerHTML = "";

    if(value === ""){
        let error = document.createElement('h2');
        error.textContent = "Error Please Enter a Name";
        article.appendChild(error);
    }
     let nameDisplay = document.createElement('h3');
     nameDisplay.textContent = value;
     article.appendChild(nameDisplay);
 
    
     let image = document.createElement('img');

    if(data['gender'] === 'female'){
     image.src = 'images/female.svg'
     article.style.backgroundColor = 'hotpink';
     article.appendChild(image);
    }
    else if(data["gender"] === 'male'){
        image.src = "images/male.svg";
        article.style.backgroundColor = 'deepskyblue';
        article.appendChild(image);

    }
 
     let gender = document.createElement('h2');
     gender.textContent = data["gender"];
     article.appendChild(gender);
 
     let likely = document.createElement('p');
     likely.textContent = "Probability: "+ data["probability"];
     article.appendChild(likely);
   } catch (error) {
        console.log('error');
        error.textContent = "Error! Could Not Fetch Data";
        article.appendChild(error);
   }


})