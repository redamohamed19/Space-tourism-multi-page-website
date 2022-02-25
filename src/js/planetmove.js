const move = () => {
  while (true) {
    const size = document.querySelector('.planet_pic img').height || 400;
    if (size >= 445) {
      document.querySelector('.planet_pic img').height - 1;
      document.querySelector('.planet_pic img').height - 1;
    } else {
      document.querySelector('.planet_pic img').height + 1;
      document.querySelector('.planet_pic img').height + 1;
    }
  }
};

export default move;
