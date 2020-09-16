import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { SignUpService } from './signup.service';
import { SignUpComponent } from './signup.component';
import { VMessageModule } from '../../shared/componets/vmessage/vmessage.module';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('Form Signup', () => {
  let router: Router;
  let component: SignUpComponent;
  let signupService: SignUpService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [HttpClientTestingModule, VMessageModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [SignUpService, UserNotTakenValidatorService]
    }).compileComponents;
  })

  beforeEach(() => {
    router = TestBed.get(Router)
    signupService = TestBed.get(SignUpService)

    const fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Deve ser instanciado', () => {
    expect(component).toBeTruthy()
  })

  it('Deve cadastrar um usuário', () => {
    const navigateSpy = spyOn(router, 'navigate')
    spyOn(signupService, 'signup').and.returnValue(of(null))

    component.signupForm.get('email').setValue('suavinha@gmail.com')
    component.signupForm.get('fullName').setValue('Higor Suavinha')
    component.signupForm.get('userName').setValue('Suavinha')
    component.signupForm.get('password').setValue('1201378')
    component.signUp()

    expect(navigateSpy).toHaveBeenCalledWith([''])
  })

  it('Deve realizar log caso ocorra algum erro', () => {
    spyOn(signupService, 'signup').and.returnValue(throwError('Error'))

    component.signupForm.get('email').setValue('suavinha@gmail.com')
    component.signupForm.get('fullName').setValue('Higor Suavinha')
    component.signupForm.get('userName').setValue('Suavinha')
    component.signupForm.get('password').setValue('1201378')
    component.signUp()

    const spyLog = spyOn(console, 'log')
    expect(spyLog).toHaveBeenCalledWith('Error')
  })
})
