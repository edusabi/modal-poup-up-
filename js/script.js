document.addEventListener('click', (e) =>{
    e.preventDefault()
})

const abrirModal = document.querySelector('.btn')
const preModal = document.querySelector('#pre-modal')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#close')
const section = document.querySelector('section')



abrirModal.addEventListener('click', ()=>{
    modal.classList.add('active')
    preModal.style.display = 'none'
    section.style.backgroundColor = '#ffffff5d'
    if(modal.classList.contains('active')){
        closeModal.addEventListener('click',()=>{
            preModal.style.display = 'flex'
            section.style.backgroundColor = 'transparent'
            modal.classList.remove('active')
        })
    }
})