let btn =document.getElementById('btn');
let input=document.getElementById('val');
let img=document.getElementById('qrImg');

btn.addEventListener('click',()=>{
    if(input.value.length >0){
        let data=input.value
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        img.classList.add('show-img');
    }else{
        input.classList.add('error')
        setTimeout(()=>{
            input.classList.remove('error')
        },1000)
    }
   
})