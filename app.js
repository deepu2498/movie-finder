let APIKey = "ddfbdc1";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (movie) =>{
  try{
    let fetchData =  await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`);   /*&t is for value*/
  let jsonData = await fetchData.json();   /*--json is for fetching the data--*/
  
  console.log(jsonData);
  document.querySelector(".card").innerHTML="";   /*for making empty after searching other movie detail*/
  searchInput.value="";   /*for making search bar empty*/
                                             
let div= document.createElement("div");       /*  <------this is basic format in which our movie detils will show*/
  div.classList.add("moviecard");
  div.innerHTML=`
  <img src=${jsonData.Poster}   alt="">
    <div class="cardText">
      <h1 class="title">${jsonData.Title}</h1>
      <p class="rating">Rating : <span>${jsonData.Ratings[0].Value}</span></p>
      <a href="">${jsonData.Genre}</a>
      <p>Release : <span>${jsonData.Released}</span></p>
      <p>Director : <span>${jsonData.Director}</span></p>
      <p>Actors : <span>${jsonData.Actors}</span></p>
      <p>Duration :<span>${jsonData.Runtime}</span></p>
      <p>Discription : <span>${jsonData.Plot}</span></p>
      <p>Language : <span>${jsonData.Language}</span></p>
      <p><span></span></p>
    
      </div>
  
  `
    document.querySelector(".card").appendChild(div);

  }
  catch(error){
      document.querySelector(".card").innerHTML =`
     
      <div class="image">
      <h1 style ="color:white; font-family: 'Times New Roman', Times, serif; font-size: 32px; text-align: center;">Enter valid  movie name</h1>
     <img src="error.png"  alt="Error Image" style="width:500px;">
     </div>
       `;
  }
  

}
searchBtn.addEventListener("click", function(){

  let movieName = searchInput.value;
  if(movieName != ""){
    getData(movieName);
  }
  else{
    document.querySelector(".card").innerHTML="<h2> First search Movie Name</h2>"
  }

})




