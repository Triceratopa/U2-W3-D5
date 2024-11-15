const api_key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWQ2ZThhZDEyOTAwMTU4NzZjMmUiLCJpYXQiOjE3MzE2NzczMDMsImV4cCI6MTczMjg4NjkwM30.Z_LwsaFvx8XZH1MF12X-ItpE24G_JC_eprm7wJuKddM"
const url_project="https://striveschool-api.herokuapp.com/api/product/"



class Card{
    constructor(_name,_description,_brand,_imageUrl,_price){
        this.name=_name
        this.description=_description
        this.brand=_brand
        this.imageUrl=_imageUrl
        this.price=parseFloat(_price)
        this._id=Date.now().toString()
    }
}


const form=document.getElementById('allCards')
form.addEventListener('submit',(e)=>{
e.preventDefault()
const nameInput =document.getElementById('name')
const descriptionInput =document.getElementById('description')
const brandInput =document.getElementById('brand')
const imgInput =document.getElementById('img')
const priceInput =document.getElementById('price')
const imageUrl=imgInput.value()!==''?imgInput.value:'https://a.pinatafarm.com/960x960/0c4d64b259/shocked-pikachu.jpg'
const createdCard= new Card(nameInput.value,descriptionInput.value,brandInput.value,imgInput.value,priceInput.value)
console.log(createdCard)
fetch(url_project,{
    method: 'POST',
    body: JSON.stringify(createdCard),
    headers:{
        'Content-Type': 'application/json',
        Authorization:  api_key,
    },
})
.then((res)=>{
    if(res.ok){
        alert('Carta Salvata')
        form.reset()
    }else{
        throw new Error('Non è andata')
    }
})
.catch((err)=>{
    console.log('AHIA', err)
})})
