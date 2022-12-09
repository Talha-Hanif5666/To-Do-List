const checkbox = document.querySelectorAll('#checkbox-button');
let getelementdata = JSON.parse(localStorage.getItem('data'));
checkbox.forEach((checkboxx, index) => {
  checkboxx.addEventListener('change', (e) => {
    if (e.target.checked) {
      getelementdata[index].completed = true;
      localStorage.setItem('data', JSON.stringify(getelementdata));
    } else {
      getelementdata[index].completed = false;
      localStorage.setItem('data', JSON.stringify(getelementdata));
    }
  });
});

const clearbutton = document.querySelector('.clear');

getelementdata.forEach(() => {
  clearbutton.addEventListener('click', () => {
    getelementdata = getelementdata.filter((t) => t.completed === false);
    localStorage.setItem('data', JSON.stringify(getelementdata));
    window.location.reload();
  });
});