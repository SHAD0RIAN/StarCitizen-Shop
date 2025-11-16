var counter = 0;
const btnAll = document.getElementById("all");

fetch('./assets/json/products.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            addElement(element);
        });

        // Après avoir ajouté tous les produits, cocher "all" et appliquer le filtre
        if (btnAll) {
            btnAll.checked = true;
        }
        if (typeof filterSelection === 'function') {
            filterSelection('all');
        } else {
            // Si filterSelection n'est pas encore défini, attendre DOMContentLoaded au cas où
            document.addEventListener('DOMContentLoaded', () => {
                if (typeof filterSelection === 'function') filterSelection('all');
            });
        }
    });

// addElements();
function addElement(element){
    // Create a new div element
    var newDiv = document.createElement("div");
    // and give it some content
    newDiv.innerHTML = '<img src="' + element.image + '" alt="Product ' + (counter+1) + '">\
                        <h3>' + element.name + '</h3>\
                        <p>' + element.description + '</p>\
                        <div id="add-to-cart">\
                            <p class="price">' + element.price + '</p>\
                            <button>Add to Cart</button>\
                        </div>';

    // Add class to the new element
    newDiv.className = "product-card " + element.category;
    if(element.quantity == 0) {
        newDiv.className = newDiv.className + " out-of-stock"
        newDiv.lastChild.textContent="Out of stock"
    }

    console.log('${element}')

    // Append the new element to the product grid
    var productGrid = document.getElementById("product-grid");
    productGrid.appendChild(newDiv);
    counter++;
}