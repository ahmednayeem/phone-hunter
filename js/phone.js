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
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
           <div class="card w-75 h-100 p-2 mx-auto rounded">
           <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <h6 class="card-text">${data.brand}</h6>
            <button onclick="mobileDetail('${data.slug}')"
            <a = href="#" class="btn btn-outline-info">Details</a>
            </button>

        </div>
    </div>
         `;
        searchResult.appendChild(div);
    })
}

const mobileDetail = mobileId => {
    const url = `https://openapi.programming-hero.com/api/phone/${mobileId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobileDetail(data.data))


}

const displayMobileDetail = data => {
    console.log(data);
    const mobileDetails = document.getElementById('mobile-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.brand}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`

    mobileDetails.appendChild(div)
}