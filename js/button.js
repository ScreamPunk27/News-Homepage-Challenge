const button=document.getElementById('button-menu');
const links=document.getElementById('links');
const close=document.getElementById('button-close');


button.addEventListener('click',()=>{
    links.style.display="block";
    button.style.display="none";
    close.style.display="block";
});

close.addEventListener('click',()=>{
    links.style.display="none";
    button.style.display="block";
    close.style.display="none";
});