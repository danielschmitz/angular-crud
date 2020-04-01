import {Category} from './../../../dtos/Category';
import {CategoryService} from './../../../services/category.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-categories-list-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class CategoriesListComponent implements OnInit {

    categories: Category[];
    loading = false;

    constructor(private categoryService: CategoryService) {
    }

    async ngOnInit() {
        await this.load();
    }

    async load() {

        try {
            this.loading = true;
            this.categories = [];
            this.categories = await this.categoryService.getAll();
        } catch (error) {
            console.error(error);
        } finally {
            this.loading = false;
        }

    }

}
