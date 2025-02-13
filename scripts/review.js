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
      {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
      },
      {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
      },
      {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
      },
      {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
      },
      {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
      }
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
