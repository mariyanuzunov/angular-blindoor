import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: IUser | null | undefined;
  @Output() logout = new EventEmitter();
}
