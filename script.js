// Sample data for categories and top businesses
const categories = ['Restaurants', 'Real Estate', 'Schools', 'Clinics', 'Law Firms'];
const topFoodBusinesses = ['Restaurant A', 'Restaurant B', 'Restaurant C'];
const topSchools = ['School A', 'School B', 'School C'];
const topRealEstateAgents = ['Agent A', 'Agent B', 'Agent C'];

// Function to populate categories
function populateCategories() {
    const categoryList = document.getElementById('categoryList');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoryList.appendChild(li);
    });
}

// Function to populate top food businesses
function populateTopFood() {
    const topFoodList = document.getElementById('topFoodList');
    topFoodBusinesses.forEach(business => {
        const li = document.createElement('li');
        li.textContent = business;
        topFoodList.appendChild(li);
    });
}

// Function to populate top schools
function populateTopSchools() {
    const topSchoolsList = document.getElementById('topSchoolsList');
    topSchools.forEach(school => {
        const li = document.createElement('li');
        li.textContent = school;
        topSchoolsList.appendChild(li);
    });
}

// Function to populate top real estate agents
function populateTopRealEstate() {
    const topRealEstateList = document.getElementById('topRealEstateList');
    topRealEstateAgents.forEach(agent => {
        const li = document.createElement('li');
        li.textContent = agent;
        topRealEstateList.appendChild(li);
    });
}

// Call functions to populate data on page load
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    populateTopFood();
    populateTopSchools();
    populateTopRealEstate();
});
