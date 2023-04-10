function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  if(html.classList.contains('light')){
html.setAttribute('class', 'light');
document.querySelector("ion-icon").setAttribute('name','sunny-outline');

  } else{
    html.setAttribute('class', 'dark');
    document.querySelector("ion-icon").setAttribute('name','moon-outline');
  }
 

}

