// JavaScript Code for Pagination

document.addEventListener("DOMContentLoaded", function () {
    const usersPerPage = 10;
    let currentPage = 1;
    let totalUsers = 0;
    let users = [];
  
    // Function to fetch data from the JSON file
    
    function fetchData() {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          users = data.users;
          totalUsers = users.length;
          const totalPages = Math.ceil(totalUsers / usersPerPage);
          generatePaginationLinks(totalPages);
          displayUsers(currentPage);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  
    // Function to display user profiles for the current page

    function displayUsers(page) {
      const contactList = document.getElementById("contact-list");
      contactList.innerHTML = "";
  
      const startIndex = (page - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const usersToDisplay = users.slice(startIndex, endIndex);
  
      for (const user of usersToDisplay) {
        const listItem = document.createElement("li");
        listItem.className = "contact-item cf";
        listItem.innerHTML = `
          <div class="contact-details">
            <img class="avatar" src="${user.image}">
            <h3>${user.name}</h3>
            <span class="email">${user.email || "N/A"}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${user.joined}</span>
          </div>
        `;
        contactList.appendChild(listItem);
      }
  
      const totalDisplay = Math.min(totalUsers, page * usersPerPage);
      document.getElementById("total").textContent = totalDisplay;
    }
  
    // Function to generate pagination links

    function generatePaginationLinks(totalPages) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.textContent = i;
      if (i < totalPages) {
        pageLink.textContent += " ";
      }
      pageLink.href = "#";
      pageLink.addEventListener("click", () => {
        currentPage = i;
        displayUsers(currentPage);
      });
      pagination.appendChild(pageLink);
    }
  }

    // Initial data fetch and pagination link generation

    fetchData();
  });
  