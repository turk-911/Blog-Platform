document.addEventListener('DOMContentLoaded', ()=>{
    const allButtons = document.querySelectorAll('.search-btn');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', () => {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        });
    }
    searchClose.addEventListener('click', ()=>{
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    });
});