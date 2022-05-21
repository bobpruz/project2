async function checkoutBook(event) {
    event.preventDefault();

    const book_id = $(".btn").attr("data-book_id");

    const response = await fetch('/api/barrowed/', {
        method: 'POST',
        body: JSON.stringify({
            book_id,

        }),

        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.assign('/');
    } else {
        alert(response.statusText);
    }

}

$('.btn').on('click', checkoutBook);