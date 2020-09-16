import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { UserService } from '../user/user.service';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../../shared/componets/menu/menu.module';
import { AlertModule } from '../../shared/componets/alert/alert.module';
import { LoadingModule } from '../../shared/componets/loading/loading.module';

describe('Header component', () => {
  let component: HeaderComponent;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [RouterTestingModule.withRoutes([]), MenuModule, AlertModule, LoadingModule],
      declarations: [HeaderComponent]
    }).compileComponents();
  })

  beforeEach(() => {
    userService = TestBed.get(UserService)
    router = TestBed.get(Router)

    spyOn(userService, 'getUser').and.returnValue(of({
      email: 'thiag@gmail.com',
      name: 'thiago',
      id: 1
    }))

    const fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('Deve ser instanciado', () => {
    expect(component).toBeTruthy();
  })

  it('Deve realizar logout', () => {
    const spy = spyOn(userService, 'logout').and.returnValue(null)
    const navigateSpy = spyOn(router, 'navigate')

    component.logout()
    expect(spy).toHaveBeenCalled()
    expect(navigateSpy).toHaveBeenCalledWith([''])
  })
})
