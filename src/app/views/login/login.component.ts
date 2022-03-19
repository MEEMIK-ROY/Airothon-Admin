import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // constructor(
  //   private auth: AuthService,
  //   private toastr: ToastrService,
  //   private router: Router) { }

  emailAddress = null;
  pass:any = null;

  ngOnInit() {

  }

  logIn() {
    // const obj = {
    //   email: this.emailphone,
    //   password: this.pass
    // };
    // this.auth.login(obj).subscribe((res: any) => {
    //   if (res.success === 0) {
    //     //show toaster of res.message
    //   }
    //   this.router.navigateByUrl('/dashboard');
    // }, err => {
    //   console.log(err);
    //   this.toastr.error('Something went Wrong !', 'Error');
    // });
  }

  useOtp() { }


}
