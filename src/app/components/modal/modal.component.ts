import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() isEditMode: boolean = false;
  @Input() user: any = {};

  modalTitle: string = 'Agregar Usuario';

  ngOnInit() {
    this.modalTitle = this.isEditMode ? 'Editar Usuario' : 'Agregar Usuario';
  }

  onClose() {
    this.closeModalEvent.emit();
  }

}
