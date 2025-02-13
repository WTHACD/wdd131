document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Product Array (data source)
    const products = [
      { id: "prod1", name: "Widget" },
      { id: "prod2", name: "Gadget" },
      { id: "prod3", name: "Doohickey" },
      { id: "prod4", name: "Thingamajig" }
    ];

    
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id; 
      option.textContent = product.name; 
      productSelect.appendChild(option);
    });
 