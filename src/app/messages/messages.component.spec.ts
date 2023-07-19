import { TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';

describe('MessagesComponent', () => {
  it('should create the component', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MessagesComponent],
      providers: [HeroService],
    });
    const fixture = TestBed.createComponent(MessagesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
