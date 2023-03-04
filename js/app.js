const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerText = ''
    // display 10 phones only 
    const showAll = document.getElementById('show-all');
    if(phones.length>10){
      phones=phones.slice(0 ,10)
      showAll.classList.remove('d-none')
    }
    else{
      showAll.classList.add('d-none')
    }
    
    
   
    // display no phones
     const noPhone = document.getElementById('no-phone-found');
     if(phones.length ===0){
        noPhone.classList.remove('d-none')
     }
     else{
        noPhone.classList.add('d-none')
     }

    // display all phones
    phones.forEach(phone => {
        console.log(phone.image);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
                      <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button href="#" class="w-50 btn btn-primary">Show Details</button>
                      </div>             
                        `
                        phoneContainer.appendChild(phoneDiv)
    })
   //  stop loader
   toggleSpinner(false);
}
 document.getElementById('btn-search').addEventListener('click', function(){
   // start loader
   toggleSpinner(true);
    const searchField =document.getElementById('search-field');
    const searchText =searchField.value;
    loadPhone(searchText);
 })
 const toggleSpinner = isLoading => {
   const loaderSection = document.getElementById('loader');
   if(isLoading){
      loaderSection.classList.remove('d-none')
   }
   else{
      loaderSection.classList.add('d-none')
   }
 }
//  loadPhone()