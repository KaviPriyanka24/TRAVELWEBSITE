document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("offer-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.getElementsByClassName("close")[0];

    const offers = {
        1: {
            title: "Early Bird Discount",
            description: `
                Book your trip at least 3 months in advance and enjoy a 20% discount on all our tours and packages. 
                This offer is perfect for those who like to plan ahead and make the most of their travel budget.
                <p>Terms and Conditions:</p>
                <ul>
                    <li>Offer valid for bookings made at least 3 months in advance.</li>
                    <li>Discount applies to all tours and packages.</li>
                    <li>Cannot be combined with other offers or discounts.</li>
                    <li>Full payment required at the time of booking.</li>
                </ul>
            `
        },
        2: {
            title: "Family Package Special",
            description: `
                Take your family on an unforgettable adventure! Book a family package for 4 or more and get a special discount along with free activities for kids. Enjoy quality time together while exploring new places.
                <p>Offer Includes:</p>
                <ul>
                    <li>Discount on family packages for 4 or more.</li>
                    <li>Free activities and entertainment for kids.</li>
                    <li>Special family-friendly accommodations.</li>
                    <li>Complimentary meals for children under 12.</li>
                </ul>
            `
        },
        3: {
            title: "Last-Minute Getaway Deals",
            description: `
                Looking for a spontaneous adventure? Check out our last-minute deals and enjoy up to 30% off on select destinations. Whether you're craving a beach getaway or a city escape, we've got you covered with amazing last-minute offers.
                <p>Details:</p>
                <ul>
                    <li>Up to 30% off on select destinations.</li>
                    <li>Available for bookings made within 2 weeks of the travel date.</li>
                    <li>Limited availability – book quickly!</li>
                    <li>Non-refundable and non-changeable after booking.</li>
                </ul>
                <p>Terms and Conditions:</p>
                <ul>
                    <li>Offer valid for last-minute bookings only.</li>
                    <li>Discount applies to select destinations and packages.</li>
                    <li>Full payment required at the time of booking.</li>
                    <li>Subject to availability.</li>
                </ul>
            `
        }
    };

    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const offerId = e.target.dataset.offer;
            modalTitle.innerHTML = offers[offerId].title;
            modalDescription.innerHTML = offers[offerId].description;
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
