import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log('Login mode is', this.isLoginMode);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      // ...
    } else {
      this._authService.signup(email, password).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading = false;
        }, 
        error: (error) => {
          console.log(error);
          this.error = "An error occurred";
          this.isLoading = false;
        }
      });
    }
    
    form.reset();
  }

}
