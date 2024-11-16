const api_key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWQ2ZThhZDEyOTAwMTU4NzZjMmUiLCJpYXQiOjE3MzE2NzczMDMsImV4cCI6MTczMjg4NjkwM30.Z_LwsaFvx8XZH1MF12X-ItpE24G_JC_eprm7wJuKddM"
const url_project='https://striveschool-api.herokuapp.com/api/product/'






const getProducts=function(){
    fetch(`${url_project}${productId}`,{
        headers:{
            'Content-Type': 'application/json',
            Authorization: api_key
        }
    })
.then((res)=> {
    console.log('risposta', res)
    if(res.ok){
return res.json()
    }else{
        throw new Error()
    }
}
)
.then((arrProducts)=>{
    console.log('array',arrProducts)
    const row= document.getElementById('allCards')
    row.innerHTML=''
    arrProducts.forEach(card => {
        const newCol=document.createElement('div')
        newCol.classList.add('col','col-12','col-md-6','col-lg-4')
       
        newCol.innerHTML=`<div class="card" >
  <img src="${card.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">${card.brand}</p>
    <p class="card-text">€${card.price}</p>
    <a href="./details.html?id=${card._id}" class="btn btn-primary">Modifica</a>
    <a href="./HomePage.html" class="btn btn-primary">Elimina</a>
  </div>
</div>
        `
        row.appendChild(newCol)
        
        
    });
})
.catch((err)=>{
    console.log('Nope',err)
})}
getProducts()