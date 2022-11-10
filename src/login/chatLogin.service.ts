import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class ChatLoginService {
  
    constructor() {
        this.sub = new BehaviorSubject<string>('');
    }
    private sub : BehaviorSubject<string>;

    public GetLoginObservable(): Observable<string> {
        return this.sub;
    }

    public updateLoggedIn(loginState : string) {
        this.sub.next(loginState);
    }
}