const modal = () => {

    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modal = document.getElementById('callback');
    const modalOverlay = document.querySelector('.modal-overlay'); 
    const modalClose = document.querySelector('.modal-close');


    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            modal.style.display = 'block';
        });
    })


    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', (e) => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none';
    })
  
    
}

export default  modal;