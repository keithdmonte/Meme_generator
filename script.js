const memeGenerateBtn = document.querySelector('button');
const memeTitle = document.querySelector('.meme-generator .meme-title')
const memeAuthor = document.querySelector('.meme-generator .meme-author')
const memeImg= document.getElementById('memeimg');


// update the url and img
const updateDetails = (url,title,author) => {
memeImg.setAttribute("src",url)
memeTitle.innerHTML = title;
memeAuthor.innerHTML = author;
}


// function to generate a meme
 const generateMeme = () => {
 fetch(" https://meme-api.com/gimme/2")
 .then((res)=>res.json())
 .then((data)=>{
  // console.log("xyz", data);
  for (const meme of data.memes){
    updateDetails(meme.url,meme.title,meme.author);
  }
 })
}

memeGenerateBtn.addEventListener("click", generateMeme);
 generateMeme();
// updateDetails();