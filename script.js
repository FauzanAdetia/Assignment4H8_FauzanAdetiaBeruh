document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    

    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
});