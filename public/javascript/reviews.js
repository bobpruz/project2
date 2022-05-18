async function reviewFormHandler(event) {
    event.preventDefault();

    const review = document.querySelector('textarea[name="review-body"]').value.trim();

    const book_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (review) {
        console.log(review)
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
                book_id,
                review
            }),
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
}

document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);