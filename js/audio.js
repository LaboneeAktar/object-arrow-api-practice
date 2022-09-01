const loadArtists = (search) => {
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayArtists(data.artists))
}

const displayArtists = artists => {
    const artistsContainer = document.getElementById('artists-container');
    artistsContainer.textContent = '';

    artists.forEach(artist => {
        // console.log(artist);
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('col');
        artistDiv.innerHTML = `
        <div class="card">
            <img src="${artist.strArtistThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${artist.strArtist}</h5>
                    <p> <span class="fw-bold"> Born Year:</span> ${artist.intBornYear}</p>
                    <p> <span class="fw-bold"> Biography:</span> ${artist.strBiographyEN.slice(0, 223)}</p>
                    <p> <span class="fw-bold"> Country:</span> ${artist.strCountry}</p>
                    <div class="text-center">
                        <button onclick = "loadArtistId('${artist.idArtist}')" class="btn btn-success px-4 py-2 mt-2" data-bs-toggle="modal" data-bs-target="#artistModal"">Details</button>
                    </div>
                </div>
        </div>
        `;
        artistsContainer.appendChild(artistDiv);
    })
    toggleSpinner(false);
}

document.getElementById('btn-search').addEventListener('click', function () {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadArtists(searchText);
})

const toggleSpinner = (isLoading) => {
    const loading = document.getElementById('loader');
    if (isLoading) {
        loading.classList.remove('d-none');
    }
    else {
        loading.classList.add('d-none');
    }
}

const loadArtistId = (idArtist) => {
    const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${idArtist}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.artists))
}

const displayDetails = artists => {
    artists.forEach(artist => {
        const modalTitle = document.getElementById('artistModalLabel');
        modalTitle.innerText = `${artist.strArtist}`;
        const artistDetails = document.getElementById('artist-details');
        artistDetails.innerHTML = `
        <p> <span class="fw-bold"> Born Year:</span> ${artist.intBornYear}</p>
        <p> <span class="fw-bold"> Biography:</span> ${artist.strBiographyEN.slice(0, 223)}</p>
        <p> <span class="fw-bold"> Country:</span> ${artist.strCountry}</p>
        `;
    })
}

loadArtists();