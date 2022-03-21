import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { navItems } from "../_nav";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  urlString:any;
    title:string="test title";
    toastr: any;

    constructor(
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        // private titleService: TitleService
    ) { }
    ngOnInit(): void {
        this.urlString = this.route.snapshot.url;
    }
    public navItems = navItems;

    logout() {
        this.auth.logout();
    }
    goTo(navitem: any) {
        this.router.navigateByUrl(navitem.url);
    }
    goToHome() {
        this.router.navigateByUrl('/');
    }
}
