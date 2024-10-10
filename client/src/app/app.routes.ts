import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_gaurds/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '', 
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'member/:id', component: MemberDetailComponent},
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent},
            {path: '**', component: HomeComponent, pathMatch: 'full'},         
        ]
    },
    
];
