import { Header } from "./Header.tsx";
import { ProductList } from "./ProductList.tsx";
import { PRODUCTS } from "./products.ts";
import { ProductFilters } from "./ProductFilters.tsx";

function App() {
    const minPrice = 0; // Pretend the product filters were connected to these variables...
    const maxPrice = 10;

    const filteredProducts = PRODUCTS.filter(product => {
        return (product.price >= minPrice && product.price <= maxPrice)
    });

    return (
        <div>
            <Header />
            <main>
                <ProductFilters />
                <ProductList products={filteredProducts} />
            </main>
        </div>
    );
}

export default App;
