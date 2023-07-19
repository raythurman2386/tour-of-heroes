import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavbarComponent, MessagesComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the app-navbar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const navbarComponent = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(navbarComponent).toBeTruthy();
  });

  it('should render the app-messages component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const messagesComponent = fixture.debugElement.query(By.directive(MessagesComponent));
    expect(messagesComponent).toBeTruthy();
  });
});
