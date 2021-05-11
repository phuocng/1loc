document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.snippet__title').forEach(ele => {
        ele.addEventListener('click', () => {
            ele.closest('.snippet').querySelector('.snippet__body').classList.toggle('snippet__body--hidden');
        });
    });
});