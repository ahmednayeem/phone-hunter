const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)

    .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
           <div class="card">
           <img class="w-75" src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <h6 class="card-text">${data.brand}</h6>
            <p class="card-text">${data.slug}</p>
            <a href="#" class="btn btn-outline-info">Details</a>
        </div>
    </div>
         `;
        searchResult.appendChild(div);
    })
}