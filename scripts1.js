document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function() {
            const destinationId = this.getAttribute('data-destination');
            window.location.href = `destination.html?id=${destinationId}`;
        });
    });
});
