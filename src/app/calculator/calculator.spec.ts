import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';
import { provideZonelessChangeDetection } from '@angular/core';


describe('Calculator', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [Calculator],
        providers: [provideZonelessChangeDetection()]
      }).compileComponents();
    });
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers', () => {
    component.calculate('2', '3', '+');
    expect(component.result).toBe(5);
  });

  it('should subtract two numbers', () => {
    component.calculate('5', '3', '-');
    expect(component.result).toBe(2);
  });

  it('should multiply two numbers', () => {
    component.calculate('4', '3', '*');
    expect(component.result).toBe(12);
  });

  it('should divide two numbers', () => {
    component.calculate('10', '2', '/');
    expect(component.result).toBe(5);
  });

  it('should return error message when dividing by zero', () => {
  component.calculate('10', '0', '/');
  expect(component.result).toBe('Erreur: division par zéro');
  });
});
