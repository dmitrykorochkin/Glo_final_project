import animate from './helpers'; 

const modal = () => {

    const callbackBtn = document.querySelectorAll('.callback-btn');
    const modal = document.getElementById('callback');
    const modalOverlay = document.querySelector('.modal-overlay'); 
    const modalClose = document.querySelector('.modal-close');

    
    const animateModal = () => {
        if (screen.width > 768) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return(timeFraction);
                },
                draw(progress) {
                    modal.style.opacity = progress;
                    modalOverlay.style.display = 'block';
                    modal.style.display = 'block';
                } 
            });
        } else {
            modalOverlay.style.display = 'block';
            modal.style.display = 'block';
        }
    }

    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            animateModal()
            
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