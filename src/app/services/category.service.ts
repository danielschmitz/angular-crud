import {Category} from './../dtos/Category';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {
    }

    getAll(): Promise<Category[]> {
        return this.http.get<Category[]>('/categories').toPromise();
    }

}
