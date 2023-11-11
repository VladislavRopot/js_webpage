const products = [
    {
        name: 'Product1',
        category: 'Electronics',
        price: 999,
        originCountry: 'Moldova',
        image: 'image1.jpg',
    },
    {
        name: 'Product2',
        category: 'Clothing',
        price: 599,
        originCountry: 'China',
        image: 'image2.jpg',
    },
    {
        name: 'Product3',
        category: 'Beauty',
        price: 199,
        originCountry: 'Romania',
        image: 'image3.jpg',
    },
];

const renderProduct = (product) => {
    const container = document.getElementById("products-list");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = "Product Image";
    productDiv.appendChild(imageElement);

    const nameElement = document.createElement("p");
    nameElement.textContent = "Numele produsului: " + product.name;
    productDiv.appendChild(nameElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "Pretul produsului: " + product.price;
    productDiv.appendChild(priceElement);

    const countryElement = document.createElement("p");
    countryElement.textContent = "Tara de origine: " + product.originCountry;
    productDiv.appendChild(countryElement);

    const categoryElement = document.createElement("p");
    categoryElement.textContent = "Categoria: " + product.category;
    productDiv.appendChild(categoryElement);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("actions");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        editProduct(product);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", () => {
        deleteProduct(product);
    });

    actionDiv.appendChild(editButton);
    actionDiv.appendChild(deleteButton);

    productDiv.appendChild(actionDiv);

    container.appendChild(productDiv);
};

const renderProducts = () => {
    const container = document.getElementById("products-list");
    container.innerHTML = '';

    for (const product of products) {
        renderProduct(product);
    }
}

const addNewProduct = () => {
    const name = prompt("Enter the name of the product:");
    const category = prompt("Enter the product category:");
    const price = prompt("Enter the price of the product:");
    const originCountry = prompt("Enter the country of the product:");
    const image = prompt("Enter the image URL of the product:");

    const newProduct = {
        name: name,
        category: category,
        price: price,
        originCountry: originCountry,
        image: image,
    };

    products.push(newProduct);
    renderProducts();
}

const editProduct = (product) => {
    const name = prompt("Enter new name of the product:", product.name);
    const category = prompt("Enter the new product category:", product.category);
    const price = prompt("Enter the new price of the product:", product.price);
    const originCountry = prompt("Enter the new country of the product:", product.originCountry);
    const image = prompt("Enter the new image URL of the product:", product.image);

    const updatedProduct = {
        name: name,
        category: category,
        price: price,
        originCountry: originCountry,
        image: image,
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

const findCheapest = () => {
    let cheapestProduct = products[0];

    for (const product of products) {
        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }

    alert("The cheapest product is: " + cheapestProduct.name + " - " + cheapestProduct.price + " " + cheapestProduct.originCountry);
};

const findMostExpensive = () => {
    let mostExpensiveProduct = products[0];

    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    }

    alert("The most expensive product is: " + mostExpensiveProduct.name + " - " + mostExpensiveProduct.price + " " + mostExpensiveProduct.originCountry);
};

const filterByCountry = () => {
    const country = prompt("Enter the country to filter by:");
    const filteredProducts = [];
    
    for (const product of products) {
        if (product.originCountry === country) {
            filteredProducts.push(product);
        }
    }

    displayFilteredProducts(filteredProducts);
};

const filterByCategory = () => {
    const category = prompt("Enter the category to filter by:");
    const filteredProducts = [];
    
    for (const product of products) {
        if (product.category === category) {
            filteredProducts.push(product);
        }
    }

    displayFilteredProducts(filteredProducts);
};

const displayFilteredProducts = (filteredProducts) => {
    const container = document.getElementById("products-list");
    container.innerHTML = '';

    for (const product of filteredProducts) {
        renderProduct(product);
    }
}

document.getElementById("addNewProduct").addEventListener("click", addNewProduct);
document.getElementById("findCheapest").addEventListener("click", findCheapest);
document.getElementById("findMostExpensive").addEventListener("click", findMostExpensive);
document.getElementById("filterByCountry").addEventListener("click", filterByCountry);
document.getElementById("filterByCategory").addEventListener("click", filterByCategory);

renderProducts();
