import {Component, ViewChild} from "@angular/core";
import {Http} from "@angular/http";
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    selector: 'demo',
    templateUrl: './app/demo/demo.component.html'
})
export class DemoComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    public currentItem;

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("app/demo/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public remove(item){
        this.currentItem = item;
        this.showChildModal();
    }

    public onConfirmDelete(){
        let index = this.data.indexOf(this.currentItem);
        if (index > -1) {
            this.data.splice(index, 1);
            this.hideChildModal();
        }
    }
    
    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    @ViewChild('childModal') public childModal:ModalDirective;

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
  
}