import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.styl']
})
export class SideNavComponent implements OnInit {
  pageType: any;  
  sidenavData = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageType = this.route.snapshot.routeConfig.path;
    this.sidenavData = [
      {
        navItem: 'Dashboard',
        navIcon: 'home-lg'
      },  
      {
        navItem: 'Orders',
        navIcon: 'th-large'
      },  
      {
        navItem: 'Invoices',
        navIcon: 'file-alt'
      },  
      {
        navItem: 'Users & Acess',
        navIcon: 'user-friends'
      },
      {
        navItem: 'Reports',
        navIcon: 'chart-bar'
      },
      {
        navItem: 'Org. Info',
        navIcon: 'briefcase'
      },

    ]

  }
  selectedItem: any;
  navigateTo(item: any){
    this.selectedItem = item.navItem;
      console.log(this.selectedItem,'saas');
      switch (this.selectedItem ) {
        case 'Dashboard': this.router.navigate(['/admin']);
          break;
        case 'Orders': this.router.navigate(['/orders']);
          break;
        case 'Invoices': this.router.navigate(['/invoices']);
          break;
        case 'Users & Acess': this.router.navigate(['/users']);
          break;
        case 'Reports': this.router.navigate(['/reports']);
          break;
        case 'Org. Info': this.router.navigate(['/org']);
          break;
        default:
          this.router.navigate(['/admin']);
          break;
      }
  }


}
