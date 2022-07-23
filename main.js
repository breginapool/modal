// variables

const btn = document.getElementById('btn')
const modalContainer = document.getElementById('modal-container')
const closedBtn = document.getElementById('closed-btn')

// event listeners

btn.addEventListener('click', (e) => {
  modalContainer.style.display = 'flex'
  btn.style.display = 'none'
})

closedBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'
  btn.style.display = 'block'
})
closedBtn.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.code === 13) btn.preventDefault()
  modalContainer.style.display = 'none'
  btn.style.display = 'block'
})

modalContainer.addEventListener('click', (e) => {
  if (e.target === modalContainer) modalContainer.style.display = 'none'
  btn.style.display = 'block'
})
