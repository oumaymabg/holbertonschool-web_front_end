function changeMode(size, weight, transform, background, color) {
    document.documentElement.style['font-size'] = size;
    document.documentElement.style['font-weight'] = weight;
    document.documentElement.style['text-transform'] = transform;
    document.documentElement.style['background-color'] = background;
    document.documentElement.style['color'] = color;
  }
  
  function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
    let paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode('Welcome Holberton!'));
  
    let spookyButton = document.createElement('button');
    spookyButton.createTextNode('Spooky');
    spookyButton.setAttribute('onClick', spooky());
  
    let darkButton = document.createElement('button');
    darkButton.createTextNode('Dark Mode');
    darkButton.setAttribute('onClick', darkMode());
  
    let screamButton = document.createElement('button');
    screamButton.createTextNode('Scream Mode');
    screamButton.setAttribute('onClick', screamMode());
  }
  
  window.onload = main();