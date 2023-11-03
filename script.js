const products = [
    {
        name: 'Product1',
        category: 'Electronics',
        price: 999,
        originCountry: 'Moldova',
    },
    {
        name: 'Product2',
        category: 'Clothing',
        price: 599,
        originCountry: 'China'
    },
    {
        name: 'Product3',
        category: 'Beauty',
        price: 199,
        originCountry: 'Romania'
    },
];

const renderProduct = (product) => {
    const tableElement = document.getElementById("products-list");
    const tableRow = document.createElement("tr");

    for (const column in product) {
        const tableData = document.createElement("td");
        tableData.textContent = product[column];
        tableRow.appendChild(tableData);
    }

    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    editButton.addEventListener("click", () => {
        editProduct(product);
    });

    deleteButton.addEventListener("click", () => {
        deleteProduct(product);
    });

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    tableRow.appendChild(actionCell);
    tableElement.appendChild(tableRow);
};

const renderProducts = () => {
    const tableElement = document.getElementById("products-list");
    tableElement.innerHTML = '';

    products.forEach(renderProduct);
}

const addNewProduct = () => {
    const name = prompt("Enter the name of the product:");
    const category = prompt("Enter the product category:");
    const price = prompt("Enter the price of the product:");
    const originCountry = prompt("Enter the country of the product:");

    const newProduct = {
        name: name,
        category: category,
        price: price,
        originCountry: originCountry,
    };

    products.push(newProduct);
    renderProduct(newProduct);
}

const editProduct = (product) => {
    const name = prompt("Enter new name of the product:", product.name);
    const category = prompt("Enter the new product category:", product.category);
    const price = prompt("Enter the new price of the product:", product.price);
    const originCountry = prompt("Enter the new country of the product:", product.originCountry);

    const updatedProduct = {
        name: name,
        category: category,
        price: price,
        originCountry: originCountry,
    };

    const index = products.indexOf(product);

    if (index !== -1) {
        products[index] = updatedProduct;
        renderProducts();
    }
}

const deleteProduct = (product) => {
    const index = products.indexOf(product);

    if (index !== -1) {
        products.splice(index, 1);
        renderProducts();
    }
}

renderProducts();
