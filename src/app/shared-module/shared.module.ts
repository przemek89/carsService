import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';



@NgModule({
  declarations: [HeaderComponent, SurnameShortcutPipe],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameShortcutPipe]
})
export class SharedModule { }
