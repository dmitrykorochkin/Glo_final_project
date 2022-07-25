import animate from './helpers'; 

const modal = () => {

    
    const animateModal = () => {
       
            animate({
                duration: 700,
                timing(timeFraction) {
                    return(timeFraction);
                },
                draw(progress) {
                    modalCallback.style.opacity = progress;
                    modalOverlay.style.display = 'block';
                    modalCallback.style.display = 'block';
                } 
            });
        
    };


  const modalCallback = document.getElementById('callback'),
        modalCallbackBtns = document.querySelectorAll('.callback-btn'),
        modalOverlay = document.querySelector('.modal-overlay');
   
    const closeModal = event => {
        const target = event.target;
        if (target.matches('.modal-overlay') || target.closest('.modal-close')) {
            modalOverlay.style.display = 'none';
            modalCallback.style.display = 'none';
            
        }
    };
    
    const openModal = (e) => {
        e.preventDefault();
        animateModal()
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
        document.body.addEventListener('click', closeModal);
    };
    modalCallbackBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
};

export default  modal;