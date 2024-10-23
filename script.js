function loadProfile(){
    const data = JSON.parse(localStorage.getItem('profile')) || [];
    if(data.length > 0){
        const profile = data[0];
        document.getElementById('name').innerText = profile.name;
        document.getElementById('role').innerText = profile.role;
        document.getElementById('availibility').innerText = profile.availibility;
        document.getElementById('usia').innerText = profile.usia;
        document.getElementById('lokasi').innerText = profile.lokasi;
        document.getElementById('pengalaman').innerText =profile.pengalaman;
        document.getElementById('email').innerText = profile.email;
    }
}

document.addEventListener('DOMContentLoaded', loadProfile());

document.getElementById('edit').addEventListener('click', function(){

    document.getElementById('newName').value = document.getElementById('name').innerHTML;
    document.getElementById('newRole').value = document.getElementById('role').innerHTML;
    document.getElementById('newAvailibility').value = document.getElementById('availibility').innerHTML;
    document.getElementById('newUsia').value = document.getElementById('usia').innerHTML;
    document.getElementById('newLokasi').value = document.getElementById('lokasi').innerHTML;
    document.getElementById('newPengalaman').value = document.getElementById('pengalaman').innerHTML;
    document.getElementById('newEmail').value = document.getElementById('email').innerHTML;
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newName = document.getElementById('newName').value;
    const newRole = document.getElementById('newRole').value;
    const newAvailibility = document.getElementById('newAvailibility').value;
    const newUsia = document.getElementById('newUsia').value;
    const newLokasi = document.getElementById('newLokasi').value;
    const newPengalaman = document.getElementById('newPengalaman').value;
    const newEmail = document.getElementById('newEmail').value;

    const profile = [{
        name : newName,
        role : newRole,
        availibility : newAvailibility,
        usia : newUsia,
        lokasi : newLokasi,
        pengalaman : newPengalaman,
        email : newEmail
    }];

    localStorage.setItem('profile', JSON.stringify(profile));


    loadProfile();

    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
});