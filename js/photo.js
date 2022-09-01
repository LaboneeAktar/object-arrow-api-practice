const loadPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos => {
    const photoContainer = document.getElementById('photo-container');
    photos = photos.slice(0, 99);
    photos.forEach(photo => {
        console.log(photo);
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
        <div class="card">
            <img src="${photo.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <div class="text-center">
                     <button onclick = "loadId(${photo.id})" class="btn btn-danger px-4 py-2 mt-2" data-bs-toggle="modal" data-bs-target="#photoModalModal"">Details</button>
                    </div>
                </div>
        </div>
        `;
        photoContainer.appendChild(photoDiv);
    })
}

const loadId = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayId(data));
}

const displayId = photo => {
    const modalTitle = document.getElementById('photoModalModalLabel');
    modalTitle.innerText = `${photo.title}`;
    const photoDetails = document.getElementById('photo-details');
    photoDetails.innerHTML = `
        <p>Thumbnail Photo: <img src="${photo.thumbnailUrl}" alt=""></p>
        <p>Photo: <img class="img-fluid w-50" src="${photo.url}" alt=""></p>
    `;
}

loadPhotos();