const addressContent= new URLSearchParams(window.location.search)
addressContent.get('cardId')
fetch( +'/'+ cardId)
.then((response)=>{
    if(response.ok) => {
        return response.json()
    }else {
        throw new Error ('Error')
    }
})
.then((singleCard)=>{
console.log('singleCard', singleCard)
const col=document.getElementById('')
col.innerHTML=`<div class="card" >
  <img src="${singleCard.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${singleCard.name}</h5>
    <p class="card-text">${singleCard.description}</p>
    <p class="card-text">${singleCard.brand}</p>
    <p class="card-text">€${singleCard.price}</p>
    <button href="#" class="btn btn-danger" onclick=>Modifica</button>
  </div>
</div>`
})
.catch((err)=>{
    console.log('error',err)
})