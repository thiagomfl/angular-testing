import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { UserService } from '../user/user.service';
import { FooterComponent } from './footer.component'

describe('Footer component', () => {
  let component: FooterComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserService],
      declarations: [FooterComponent]
    }).compileComponents();
  })

  beforeEach(() => {
    const userService = TestBed.get(UserService)

    spyOn(userService, 'getUser').and.returnValue(of({
      email: 'thiag@gmail.com',
      name: 'thiago',
      id: 1
    }))

    const fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('Deve ser instanciado', () => {
    expect(component).toBeTruthy();
  })
})
