const autoSlider = () => {
    let count = 1;
    document.getElementById('radio' + 1).checked = true;
    setInterval(() => {
        console.log("running");
        const autoBtns = document.querySelectorAll('.auto-btn');
        autoBtns.forEach(autoBtn => {
            autoBtn.onclick = e => {
                e.stopPropagation();
                // console.log(autoBtn)
                const attribute = autoBtn.getAttribute('for');
                count = parseInt(attribute[5]);
            }
        })
        setTimeout(() => {
            document.getElementById('radio' + count).checked = true;
            count++;
            if (count > 3) {
                count = 1;
            }
        }, 100)
    }, 10000)
};

autoSlider();