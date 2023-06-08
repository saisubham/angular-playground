import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from "./sender/sender.component";
import { ReceiverComponent } from "./receiver/receiver.component";

const routes: Routes = [
  { path: 'send', component: SenderComponent },
  { path: 'recv', component: ReceiverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
