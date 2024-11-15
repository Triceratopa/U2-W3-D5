const api_key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWQ2ZThhZDEyOTAwMTU4NzZjMmUiLCJpYXQiOjE3MzE2NzczMDMsImV4cCI6MTczMjg4NjkwM30.Z_LwsaFvx8XZH1MF12X-ItpE24G_JC_eprm7wJuKddM"
const url_project = "https://striveschool-api.herokuapp.com/api/product/";
const cardId = new URLSearchParams(window.location.search).get('id');


const getProductDetails =function() {
    fetch(`${url_project}${cardId}`, {
            headers: { Authorization: api_key }
        })
        .then((res)=>{
        if (res.ok){
            return res.json()
        }else{ throw new Error()}})
        .then((card) => {
            const modifyCard = document.getElementById('modifyCard');
            modifyCard.innerHTML = `
                <form id="updateForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" value="${card.name}">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Descrizione</label>
                        <textarea class="form-control" id="description">${card.description}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <input type="text" class="form-control" id="brand" value="${card.brand}">
                    </div>
                    <div class="mb-3">
                        <label for="img" class="form-label">URL Immagine</label>
                        <input type="text" class="form-control" id="img" value="${card.imageUrl}">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Prezzo</label>
                        <input type="number" class="form-control" id="price" value="${card.price}">
                    </div>
                    <button type="submit" class="btn btn-success">Salva Modifiche</button>
                </form>
            `
        
            
            document.getElementById('updateForm').addEventListener('submit', updateProduct);
        })
        
       
    .catch ((err)=> {
        console.error('Errore:', err);
    })
}





const updateProduct = async (e) => {
    e.preventDefault();

    const updatedCard = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('img').value,
        price: parseFloat(document.getElementById('price').value)
    }
        const res = await fetch(`${url_project}${cardId}`, {
            method: 'PUT',
            body: JSON.stringify(updatedCard),
            headers: {
                'Content-Type': 'application/json',
                Authorization: api_key
            }
        });

        if (res.ok) {
            alert('Prodotto aggiornato con successo!')
            window.location.href = './HomePage.html' 
        } else {
            throw new Error('Errore durante l\'aggiornamento del prodotto')
        }
    } 
 

getProductDetails()