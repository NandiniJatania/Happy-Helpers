const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener(
        'click',()=> playnote(key))
})

function playnote(key){
    const keyaudio=document.getElementById(key.dataset.key)
    keyaudio.currentTime=0
    keyaudio.play()
    key.classlist.add('active')
    keyaudio.addEventListener('ended',() =>{
        key.classlist.remove('active')
    })

}

