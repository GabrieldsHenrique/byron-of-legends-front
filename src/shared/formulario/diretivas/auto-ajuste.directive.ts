import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[autoAjusteWidth]',
  standalone: true,
})
export class AutoAdjusteWidthDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.ajustarWidth();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.ajustarWidth(event);
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    this.ajustarWidth();
  }

  private ajustarWidth(event ?: any) {
    const autocompletePanel = this.el.nativeElement.querySelector('.p-autocomplete-panel');
    const dropdownPanel = this.el.nativeElement.querySelector('.p-dropdown-panel');
    const datepicker = this.el.nativeElement.querySelector('.p-datepicker');

    if (datepicker) {
      const calendar = this.el.nativeElement.querySelector('.p-calendar').getBoundingClientRect();

      const altura = calendar.top + calendar.height


      if(altura + 319 > window.innerHeight) {
        this.renderer.setStyle(datepicker, 'bottom', `${window.innerHeight - calendar.y +8}px`)
        this.renderer.setStyle(datepicker, 'top', `auto`)
      } else{
        this.renderer.setStyle(datepicker, 'top', `${altura + 10}px`);
      }
      this.renderer.setStyle(datepicker, 'display', 'block');
    }


    if (autocompletePanel) {

      if (this.isButtonClicked(event)) {
        this.limparInput();
      }
        const autocomplete = this.el.nativeElement.querySelector('.p-autocomplete').getBoundingClientRect();

        this.renderer.setStyle(autocompletePanel, 'width', `${autocomplete.width}px`);

        const altura = autocomplete.top + autocomplete.height

        if(altura + 200 > window.innerHeight) {
            this.renderer.setStyle(autocompletePanel, 'bottom', `${window.innerHeight - autocomplete.y +8}px`)
            this.renderer.setStyle(autocompletePanel, 'top', `auto`);
        } else{
          this.renderer.setStyle(autocompletePanel, 'top', `${altura}px`);
        }
        this.renderer.setStyle(autocompletePanel, 'display', 'block');


    }

    if (dropdownPanel) {
      const dropdown = this.el.nativeElement.querySelector('.p-dropdown').getBoundingClientRect();
      this.renderer.setStyle(dropdownPanel, 'width', `${dropdown.width}px`);
      const altura = dropdown.top + dropdown.height

      if(altura + 200 > window.innerHeight) {
        setTimeout(()=>{
          this.renderer.setStyle(dropdownPanel, 'display', 'block');
          this.renderer.setStyle(dropdownPanel, 'bottom', `${window.innerHeight - dropdown.y +8}px`)
          this.renderer.setStyle(dropdownPanel, 'top', `auto`);
        },100)
      } else{
        setTimeout(()=>{
          this.renderer.setStyle(dropdownPanel, 'display', 'block');
          this.renderer.setStyle(dropdownPanel, 'top', `${altura}px`);
        },100)

      }
    }
  }

  private isButtonClicked(event?: Event): boolean {
    const buttonElement = this.el.nativeElement.querySelector(
      '.p-autocomplete-dropdown'
    );

    if(event){
      return buttonElement && buttonElement.contains(event.target);
    }

    return false;
  }

  private limparInput() {
    const inputElement = this.el.nativeElement.querySelector('input');
    if (inputElement) {
      this.renderer.setProperty(inputElement, 'value', '');
    }
  }
}
