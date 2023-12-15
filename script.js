
    // Background slide code

    const container = document.querySelector('.slider_container');
    const btns = document.querySelectorAll('.btn');
    const imageList = ['bg-img1.jpg', 'bg-img2.jpg', 'bg-img3.jpg', 'bg-img4.jpg', 'bg-img5.jpg'];
    let index = 0;

    btns.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("vlicked")
            if (button.classList.contains('btn-left')) {
                index--;
                if (index < 0) {
                    index = imageList.length - 1;
                }
                container.style.background = `url(Assets/${imageList[index]}) center/cover no-repeat`;
            } else {
                index++;
                if (index === imageList.length) {
                    index = 0;
                }
                container.style.background = `url(Assets/${imageList[index]}) center/cover no-repeat`;
            }
        });
    });

    /* slider page ends */


