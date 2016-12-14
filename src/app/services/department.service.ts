import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Department } from '../common/department.model';
import { Teacher } from '../common/teacher.model';

@Injectable()
export class DepartmentService {
    
    private departmentsUrl : string = '/api/departments';
    
    constructor(private http: Http) {
    }
    
    getAll(): Observable<Department[]> {
        return this.http.get(this.departmentsUrl).map(res => res.json() || { } as Department[]);
    }
 
    get(id: number): Observable<Department> {
        return this.http.get(`${this.departmentsUrl}/${id}`).map(res => res.json() || { } as Department);
    }
    
    getTeachers(id: number): Observable<Teacher[]> {
        return this.http.get(`${this.departmentsUrl}/${id}/teachers`).map(res => res.json() || { } as Teacher[]);
    }
}
