const tree = document.getElementById("treeImage");
const article = document.getElementById("article");

const overlay = document.getElementById("darkoverlay");

document.addEventListener("click",()=>{

  tree.classList.add("hide");  
  overlay.classList.add("hide");
  article.classList.add("show");
  

});

