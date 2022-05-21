async function checkoutBook(event) {
    event.preventDefault();

    const id = $( ".btn" ).attr( "data-barrowed_id" );

        const response = await fetch(`/api/barrowed/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    
}

$('.btn').on('click', checkoutBook);