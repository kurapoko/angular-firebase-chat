import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ChatRoomComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
