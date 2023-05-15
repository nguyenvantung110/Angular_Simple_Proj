import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ExportService } from '../service/export.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  name = 'Angular';
  @ViewChild('cart') cart!: CartComponent;
  dataExport:any = [];
  currentLanguage!:string;
  constructor(private router:Router,
              private exportService: ExportService,
              private rendered: Renderer2,
              private el: ElementRef,
              private translate: TranslateService
              ) { }

  ngOnInit(): void {
    this.checkDataLogin();
    this.setData();
    // this.translate.get('DEPARTMENT.title').subscribe((res: string) => {
    //   this.name = res;
    // });
    // => name = DEPARTMENT.title
  }

  // set default data for table
  setData(){
    for (let i = 0; i <= 9; i++) {
        this.dataExport.push({
          firstName: `first${i}`,
          lastName: `last${i}`,
          email: `abc${i}@gmail.com`,
          address: `000${i} street city, ST`,
          zipcode: `0000${i}`,
        });
    }
  }

  // check user is login ?
  checkDataLogin(){
    const data = localStorage.getItem('dataLogin');
    if (data !== 'NaN' && data !== null && data !== undefined){
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl('login');
    }
  }

  // show cart component use ViewChild
  show(){
   this.cart.isShow === true ? this.cart.isShow = false : this.cart.isShow = true;
  }

  // Export data from table to exel file
  export() {
    this.exportService.exportExcel(this.dataExport, 'customers');
  }

  // Logout
  logout(){
    localStorage.removeItem('data');
  }

  // Focus input use Render 2
  onFocus(){
    this.rendered.selectRootElement('.form-control').focus();
    this.rendered.selectRootElement('.form-control').style.background = '#f6f6f6';
  }

  selectedLanguage(val: any){
    switch(val){
      case 'Vienamese':
        this.translate.use('vi');
        break;
      case 'Japanese':
        this.translate.use('ja');
        break;
      default:
        this.translate.use('en');
        break;
    }
  }
}
