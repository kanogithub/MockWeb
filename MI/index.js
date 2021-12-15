(function() {
    const imgs = Array.from(document.querySelectorAll('.img-list a'));
    const pointers = Array.from(document.querySelectorAll('.pointer-list li'));
    const prevNextBtn = Array.from(document.querySelectorAll('.prev-next'));

    pointers.forEach(pointer => {
        pointer.addEventListener('click', pointerSelectHandler);
    });

    prevNextBtn.forEach(btn => {
        btn.addEventListener('click', btnHandler);
    });

    function btnHandler(e) {
        const addition = e.target.matches('.fa-chevron-left') ? -1 : 1;
        const pointer = document.querySelector('.pointer-list .active');
        const index = pointers.indexOf(pointer);

        let setIndex = (index + addition) % pointers.length;
        if (setIndex < 0) setIndex = pointers.length - 1;

        setImgVisible(setIndex);
    }

    function pointerSelectHandler(e) {
        const index = pointers.indexOf(e.target);

        setImgVisible(index);
    }

    function setImgVisible(index) {
        const img = document.querySelector('.img-list .active');
        const pointer = document.querySelector('.pointer-list .active');

        img.classList.remove('active');
        pointer.classList.remove('active');
        imgs[index].classList.add('active');
        pointers[index].classList.add('active');
    }
})();

