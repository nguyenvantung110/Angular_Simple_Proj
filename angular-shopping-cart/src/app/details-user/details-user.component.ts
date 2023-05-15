import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { ProvincesService } from '../service/provinces.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

  @ViewChild('provinces') provinces! : ElementRef;
  @ViewChild('districts') districts! : ElementRef;

  userInfoData: any;
  listProvinces!: any[];
  listDistrict!: any[];
  listWard!: any[];
  searchKey!: string;
  searchKey2!: string;
  itemProv = '--- Select provinces ---';
  loader = false;
  constructor(private userService: UserService,
              private provincesServices: ProvincesService) { }

  ngOnInit(): void {
    this.getInfoData();
    this.getProvinces();
  }
  
  // get details user info
  getInfoData(){
    this.userInfoData = this.userService.userInfoData.value;
  }

  // get list provinces
  getProvinces(){
    this.loader = true;
    this.provincesServices.getProvinces().subscribe(val => {
      this.listProvinces = val;
      this.loader = false;
    },
    error => {
      this.loader = false;
    });
  }
  
  // get list district of selected provinces 
  selectedProvinces(){
    const districts = this.listProvinces.filter(f => f.Code === this.provinces.nativeElement.value);
    this.listDistrict = districts[0]?.Districts;
  }

  // get list ward of selected district 
  selectedDistricts(){
    let wards = this.listDistrict.filter(f => f?.Code === this.districts.nativeElement.value);
    this.listWard = wards[0].Wards;
  }

  // get list provinces with search box and filter pipe
  changeProvinces(val: string){
    this.itemProv = val;
  }
}
