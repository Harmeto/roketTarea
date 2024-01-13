import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData{
  comentario: string,
  arbol_id: number,
  postulante_id: number
}

@Component({
  selector: 'app-add-comentary',
  templateUrl: './add-comentary.component.html',
  standalone: true,
  styleUrl: './add-comentary.component.scss',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
})
export class AddComentaryComponent {

  constructor(
    public dialogRef: MatDialogRef<AddComentaryComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
