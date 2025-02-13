document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // ---------------------------
    // LocalStorage: Increment review counter
    // ---------------------------
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
      reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the review count
    document.getElementById('reviewCountDisplay').innerHTML = `<p>You have submitted ${reviewCount} review(s).</p>`;
    
    // ---------------------------
    // Parse Query Parameters (GET method)
    // ---------------------------
    function getQueryParams() {
      const params = {};
      const queryString = window.location.search.substring(1);
      const pairs = queryString.split("&");
      for (let pair of pairs) {
        if (pair === "") continue;
        let [key, value] = pair.split("=");
        key = decodeURIComponent(key);
        value = decodeURIComponent(value || "");
        // Handle multiple checkbox values (if any)
        if (params[key]) {
          if (!Array.isArray(params[key])) {
            params[key] = [params[key]];
          }
          params[key].push(value);
        } else {
          params[key] = value;
        }
      }
      return params;
    }
    const queryParams = getQueryParams();

    // ---------------------------
    // For the Product Name, convert the submitted product id back to its name.
    // (This is the same product array as used on the form page.)
    // ---------------------------
    const products = [
      { id: "prod1", name: "Widget" },
      { id: "prod2", name: "Gadget" },
      { id: "prod3", name: "Doohickey" },
      { id: "prod4", name: "Thingamajig" }
    ];
    function getProductNameById(productId) {
      const product = products.find(p => p.id === productId);
      return product ? product.name : productId;
    }
    
    // ---------------------------
    // Populate the confirmation page fields
    // ---------------------------
    document.getElementById('displayProduct').textContent = getProductNameById(queryParams.productName || "");
    document.getElementById('displayRating').textContent = queryParams.rating || "";
    document.getElementById('displayDate').textContent = queryParams.installDate || "";
    
   
    if (queryParams.features) {
      if (Array.isArray(queryParams.features)) {
        document.getElementById('displayFeatures').textContent = queryParams.features.join(", ");
      } else {
        document.getElementById('displayFeatures').textContent = queryParams.features;
      }
    } else {
      document.getElementById('displayFeatures').textContent = "None selected";
    }
    
    document.getElementById('displayReview').textContent = queryParams.reviewText || "No review provided";
    document.getElementById('displayUserName').textContent = queryParams.userName || "Anonymous";
