import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  loggedIn: string | null | undefined;
  constructor(private router: Router, public authService: AuthService) {}

    ngOnInit() {
      
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
}
