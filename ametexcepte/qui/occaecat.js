function initializeClicks() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('button')) {
      console.log(`Button "${target.innerText}" was clicked!`);
    }
  });
}
