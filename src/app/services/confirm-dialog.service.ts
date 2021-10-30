import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
  
@Injectable() export class ConfirmDialogService {  

    private subject = new Subject<any>();  
  
    confirmThis(message: string, confermato: () => void): any {  
        this.setConfirmation(message, confermato);  
    }  
  
    setConfirmation(message: string, confermato: () => void): any {  
        const that = this;  
        this.subject.next({   
            text: message,  
            confermato(): any {  
                    that.subject.next();  
                    confermato();  
                }
        });  
  
    }  
  
    getMessage(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}