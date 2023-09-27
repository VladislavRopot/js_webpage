const container = document.getElementById('cards')

function renderProducts(items) {
    items.forEach(product => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode("Nume: " +
            product.name));

        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode("Edit"));
        editBtn.addEventListenter("click", () => editProduct(product));

        const removeBtn = document.createElement('button');
        removeBtn(document.createTextNode("Remove"));
        removeBtn.addEventListenter("click", () => removeProduct(product));

        div.appendChild(h2);
         div.appendChild(editBtn);
          div.appendChild(removeBtn);

        container.appendChild(div);
    })
}
function editProduct(product) {
}
const name = prompt("Introdu noul nume:", product.name);
// pretul
// gasim elementul
//il modificam
// randam elementele
renderProducts(are);
function remove Product(product) {
    getProductByName(product.name); renderProducts(arr);
}

function addProduct() {
    const name = prompt("Introdu noul nume:", product.name); price
    origin Country
    addProduct({
    name: name, price: price, originCountry: {
    }
    });
    }
    renderProducts (arr);
    Fun.handleMost ExpensiveClick() {
    const category = prompt("Introdu categoria:");
    const productsByCategory = filterByCategory(category);
    renderProducts (products By Category);
    }