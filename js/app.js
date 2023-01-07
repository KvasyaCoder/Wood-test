const moreBtn = document.querySelector('.product__btn'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]');

moreBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);


function openModal() {
    $(".slider").not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        });
    console.log('open');
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    };

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
            });

    function closeModal() {
        $(".slider").slick('setPosition');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

  