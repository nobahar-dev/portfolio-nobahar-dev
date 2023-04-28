//Progress bar and animation
const progressBar = document.querySelector('.progress-bar-wrapper')
const progressPercents = [75, 80, 85, 80]

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset + window.innerHeight >= progressBar.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((element, index) => {
            element.style.width = `${progressPercents[index]}%`
        })
    }
})
//End of Progress bar and animation