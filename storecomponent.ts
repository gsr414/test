import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory = null;


    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) { }

    get products(): Product[] {
        return this.repository.getProducts(this.selectedCategory)
            
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }


    addProductToCart(product: Product) {
        this.cart.addLine(product);
        // this.router.navigateByUrl("/cart");
    }
}
