import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { Transaction } from 'src/domain/transaction';

@Injectable()
export class CustomerService {

    getData() {
        return this.http.get('assets/data/transaction_list.json');
    }

    constructor(private http: HttpClient) { }

    getCustomersMini() {
        return this.getData().pipe(take(1)).subscribe((data: Object[]) => {
            Promise.resolve(data.slice(0, 5));
        });

    }

    getCustomersSmall() {
        return this.getData().pipe(take(1)).subscribe((data: Object[]) => {
            Promise.resolve(data.slice(0, 10));
        });
    }

    getCustomersMedium() {
        return this.getData().pipe(take(1)).subscribe((data: Object[]) => {
            Promise.resolve(data.slice(0, 50));
        });
    }

    getCustomersLarge() {
        return this.getData();
    }

    getCustomersXLarge() {
        return this.getData().pipe(take(1)).subscribe((data: Object[]) => {
            Promise.resolve(data);
        });
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};