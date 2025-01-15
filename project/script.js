// Sample data (mocked hostel/PG information)
const hostels = [
    {
        id: 1,
        name: "Happy Stay Hostel",
        type: "Girls",
        price: 7500 ,
        distance: 1.2,
        description: "Happy Stay Hostel offers a safe and comfortable environment for girls, with fully furnished rooms and delicious meals included.",
        facilities: ["WiFi", "AC", "Meals", "Laundry", "24/7 Security"],
        contact: { phone: "9876543210", email: "happystay@example.com" },
        image: "https://images.jdmagicbox.com/v2/comp/mumbai/w6/022pxx22.xx22.220725121541.j5w6/catalogue/my-mother-hostel-and-boarding-school-thane-west-mumbai-hostels-ew4codkak0.jpg"
    },

    {
        id: 2,
        name: "Royal Paradise",
        type: "Girls",
        price: 7000 ,
        distance: 1.2,
        description: "Royal Paradise offers a safe and comfortable environment for girls, with fully furnished rooms and delicious meals included.",
        facilities: ["WiFi", "AC", "4-time-Meal", "Laundry", "24/7 Security"],
        contact: { phone: "9876453210", email: "paradise@example.com" },
        image: "https://content3.jdmagicbox.com/v2/comp/delhi/l9/011pxx11.xx11.100807074120.k4l9/catalogue/royal-paradise-paying-guest-greater-noida-noida-paying-guest-accommodations-57g2qisxln.jpg"
    },
    {
        id: 3,
        name: "Comfort PG",
        type: "Boys",
        price: 6500,
        distance: 0.8,
        description: "Comfort PG is perfect for boys looking for affordable living with top-notch facilities, including high-speed internet and laundry services.",
        facilities: ["WiFi", "Laundry", "Meals"],
        contact: { phone: "9123456789", email: "comfortpg@example.com" },
        image: "https://rentok-marketplace.s3.ap-south-1.amazonaws.com/MicrositeImages/8d630c91-134b-4b0b-aa3e-b9608e48568b/1670313925407.webp"
    },
    {
        id: 4,
        name: "AB-Hostel",
        type: "Boys",
        price: 8500,
        distance: 2.0,
        description: "AB-Hostel offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image: "https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Jun/26/Photo_h220_w280/GR2-447605-2172687_220_280.jpg"
    },

    {
        id: 5,
        name: "Backpackers",
        type: "Boys",
        price: 8000,
        distance: 2.0,
        description: "Backpackers offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVU7DLk0okM7BcXE3umqlm1nq8F1gDB2OpA&s"
    },

    {
        id: 6,
        name: "Stanza-Living",
        type: "Boys",
        price: 9500,
        distance: 2.0,
        description: "Stanza-Living offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals", "Bed-sheet available"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image: "https://images.jdmagicbox.com/v2/comp/hyderabad/x9/040pxx40.xx40.240412161514.y2x9/catalogue/as-grand-pg-mens-hostel-chitrapuri-colony-manikonda-hyderabad-hostels-im07e1k0cl.jpg"
    },

    {
        id: 7,
        name: "White House",
        type: "Girls",
        price: 9000,
        distance: 2.0,
        description: "White House Hostel offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals", "Free Mug and Bucket"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image:"https://content.jdmagicbox.com/v2/comp/delhi/a1/011pxx11.xx11.160616133517.i9a1/catalogue/shri-krishna-pg-boys-hostel-alpha-1-greater-noida-noida-ac-paying-guest-accommodations-bho2569efy.jpg"
    },

    {
        id: 8,
        name: "Magadh-Inn",
        type: "Girls",
        price: 9500,
        distance: 2.0,
        description: "Magadh-Inn offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "4-Time-Meals", "Attached-Washroom"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image:  "https://static.wixstatic.com/media/c1020e_4ed47ec6276e40f0883573fc86dbedb1~mv2.jpeg/v1/crop/x_724,y_0,w_4263,h_4284/fill/w_560,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3318.jpeg"
    },

    {
        id: 9,
        name: "Gen-Z Housings",
        type: "Boys",
        price: 10000,
        distance: 2.0,
        description: "Gen-Z Housings offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals", "SPA-Room"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image: "https://content3.jdmagicbox.com/v2/comp/bangalore/f5/080pxx80.xx80.210805110502.q8f5/catalogue/millennial-hostel-vasanth-nagar-bangalore-hostels-bjfjxb6qe7.jpg"
    },

    {
        id: 10,
        name: "Ladoo-Gopal PG",
        type: "Boys",
        price: 8000,
        distance: 2.0,
        description: "Ladoo-Gopal offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "Cooler", "RO-Water", "3-Time-Meal",],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image:"https://content3.jdmagicbox.com/comp/gandhidham/k2/9999p2836.2836.221112195510.w5k2/catalogue/gopal-pg-adipur-gandhidham-paying-guest-accommodations-for-professionals-t5nf4kpe7t.jpg"
    },

    {
        id: 11,
        name: "NRI-Regidency",
        type: "Boys",
        price: 8600,
        distance: 2.0,
        description: "NRI-Regidency offers premium facilities, including a gym and recreational spaces, ensuring a luxurious stay for students and professionals.",
        facilities: ["WiFi", "AC", "Gym", "Meals", "Attached-Washroom"],
        contact: { phone: "9988776655", email: "elitehostel@example.com" },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0c4kY1FelY7suyZIzE2cBjjztaIFmMSFNnaxArgpoxLQ4k4sJHM34aBv8PuhHywG0jNg&usqp=CAU"
    }
];


const resultsContainer = document.getElementById('results-container');
const searchInput = document.getElementById('search-input');
const genderFilter = document.getElementById('gender');
const budgetFilter = document.getElementById('budget');
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('details-modal');

// Function to render results
function renderResults(data) {
    resultsContainer.innerHTML = ''; // Clear current results
    if (data.length === 0) {
        resultsContainer.innerHTML = '<p>No hostels found!</p>'; // Display message if no results match
    } else {
        data.forEach((hostel) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
    <img src="${hostel.image}" alt="${hostel.name}">
    <h3>${hostel.name}</h3>
    <p>Type: ${hostel.type}</p>
    <p>Price: ₹${hostel.price}/month</p>
    <p>Facilities: ${hostel.facilities.join(', ')}</p>
    <button onclick="showModal(${hostel.id})">View Details</button>
    <button class="book-now-btn" onclick="bookNow(${hostel.id})">Book Now</button>
`;

            resultsContainer.appendChild(card);
   });
}
}
// Function to filter results
function filterResults() {
    const searchQuery = searchInput.value.toLowerCase();
    const gender = genderFilter.value;
    const maxBudget = parseInt(budgetFilter.value) || Infinity;

    const filtered = hostels.filter((hostel) => {
        const matchesSearch = hostel.name.toLowerCase().includes(searchQuery) ||
            hostel.facilities.some(fac => fac.toLowerCase().includes(searchQuery));
        const matchesGender = gender === 'all' || hostel.type.toLowerCase() === gender;
        const matchesBudget = hostel.price <= maxBudget;

        return matchesSearch && matchesGender && matchesBudget;
    });

    renderResults(filtered);
}

// Event Listeners
searchBtn.addEventListener('click', filterResults);
renderResults(hostels);
const sortSelect = document.createElement('select');
sortSelect.innerHTML = `
    <option value="priceLowHigh">Price: Low to High</option>
    <option value="priceHighLow">Price: High to Low</option>
    <option value="distanceLowHigh">Distance: Nearest First</option>
  `;
document.querySelector('.filters').appendChild(sortSelect);

sortSelect.addEventListener('change', () => {
    const sortOption = sortSelect.value;

    const sortedHostels = [...hostels].sort((a, b) => {
        if (sortOption === 'priceLowHigh') return a.price - b.price;
        if (sortOption === 'priceHighLow') return b.price - a.price;
        if (sortOption === 'distanceLowHigh') return a.distance - b.distance;
        return 0;
    });

    renderResults(sortedHostels);
});
function bookNow(hostelId) {
    const hostel = hostels.find(h => h.id === hostelId);
    alert(`Booking confirmed for ${hostel.name}. Please contact ${hostel.contact.phone} for further details.`);
}

// Function to display modal with more details
function showModal(hostelId) {
    const hostel = hostels.find(h => h.id === hostelId);
    const modal = document.getElementById('details-modal');

    modal.innerHTML = `
      <button class="close-btn" onclick="closeModal()">Close</button>
      <h2>${hostel.name}</h2>
      <img src="${hostel.image}" alt="${hostel.name}" />
      <p><strong>Type:</strong> ${hostel.type}</p>
      <p><strong>Price:</strong> ₹${hostel.price}</p>
      <p><strong>Distance:</strong> ${hostel.distance} km from Pari Chowk</p>
      <p><strong>Description:</strong> ${hostel.description}</p>
      <p><strong>Contact:</strong> ${hostel.contact.phone} | ${hostel.contact.email}</p>
      <div class="facilities">
        <strong>Facilities:</strong>
        ${hostel.facilities.map(facility => `<span>${facility}</span>`).join('')}
      </div>
    `;

    modal.classList.add('show');
}
function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.classList.remove('show');
}

