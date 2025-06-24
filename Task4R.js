// Section Toggle
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  // To-Do List
  function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task) {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      input.value = "";
      displayTasks();
    }
  }
  
  function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = () => {
        tasks.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
      };
      taskList.appendChild(li);
    });
  }
  
  displayTasks();
  
  // Products
  const products = [
    { name: "Phone", category: "electronics", price: 699, rating: 4.5 },
    { name: "Shirt", category: "clothing", price: 29, rating: 4.0 },
    { name: "Laptop", category: "electronics", price: 1299, rating: 4.7 },
    { name: "Jeans", category: "clothing", price: 59, rating: 4.2 },
    { name: "Headphones", category: "electronics", price: 199, rating: 4.3 },
    { name: "Jacket", category: "clothing", price: 89, rating: 4.6 },
    { name: "Smartwatch", category: "electronics", price: 249, rating: 4.4 },
    { name: "T-Shirt", category: "clothing", price: 19, rating: 4.1 }
  ];
  
  function renderProducts(list = products) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `<h4>${p.name}</h4><p>₹${p.price}</p><p>⭐ ${p.rating}</p>`;
      container.appendChild(div);
    });
  }
  
  function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
  }
  
  function sortProducts() {
    const option = document.getElementById("sortOptions").value;
    let sorted = [...products];
  
    if (option === "price") sorted.sort((a, b) => a.price - b.price);
    if (option === "rating") sorted.sort((a, b) => b.rating - a.rating);
  
    renderProducts(sorted);
  }
  
  renderProducts();
