document.addEventListener("DOMContentLoaded", () => {
    const mobileNavBar = document.getElementById('mobileNavBar');
    const desktopControllerBtn = document.getElementById('desktopControllerBtn');
    const mobileControllerBtn = document.getElementById('mobileControllerBtn')

    desktopControllerBtn.addEventListener('click', () => {
        mobileNavBar.classList.toggle('hidden');
        desktopControllerBtn.classList.add('hidden');
    });

    mobileControllerBtn.addEventListener('click',()=>{
        mobileNavBar.classList.toggle('hidden');
        desktopControllerBtn.classList.remove('hidden');
    })



});