const createElem = (col) => {
  const elem = document.createElement('div');
  elem.classList.add('board');
  elem.style.display = 'inline-block';
  elem.style.position = 'relative';
  elem.style.marginLeft = '20px';
  elem.style.height = '30px';
  elem.style.width = '30px';
  elem.style['background-color'] =
    col === 0
      ? 'white'
      : col === 1
      ? 'transparent'
      : col === 2
      ? 'gray'
      : 'silver';
  //   elem.style['border-radius'] = '90%';

  if (col == 1) {
    const img = document.createElement('img');
    img.src = '/assets/img/flappy.png';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.height = '50px';
    img.style.width = '50px';
    elem.appendChild(img);
  }

  return elem;
};

export const paint = (game: number[][], lives, score, target) => {
  target.innerHTML = `Lives: ${lives}, Score: ${score}`;

  game.forEach((row) => {
    const rowContainer = document.createElement('div');
    row.forEach((col) => rowContainer.appendChild(createElem(col)));
    target.appendChild(rowContainer);
  });
};
