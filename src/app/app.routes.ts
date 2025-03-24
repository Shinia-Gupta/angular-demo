import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component'
import { DataBindingComponent } from './components/data-binding/data-binding.component'
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component'
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component'
import { IfElseComponent } from './components/if-else/if-else.component'
import { ForAndSwitchComponent } from './components/for-and-switch/for-and-switch.component'
import { PipeComponent } from './components/pipe/pipe.component'
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { LifecycleEventsComponent } from './components/lifecycle-events/lifecycle-events.component';
import { NgTemplateEgComponent } from './components/directive/ng-template-eg/ng-template-eg.component';
import { NgContainerEgComponent } from './components/directive/ng-container-eg/ng-container-eg.component';
import { ViewChildComponent } from './components/decorators/view-child/view-child.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { SignalComponent } from './components/signal/signal.component';


export const routes: Routes = [
    //default route, mans, if there is nothing specified in the route, we have to redirect to which route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
       path:'',
       component:LayoutComponent,
       canActivate:[authGuard],
       children:[
        {
            path: "add-emp",
            component: AddEmployeeComponent
    
        },
        {
            path: "data-binding",
            component: DataBindingComponent,
        },
        {
            path: "str-dir",
            component: StructuralDirComponent
        },
        {
            path: "attribute-dir",
            component: AttributeDirectiveComponent
        },
        {
            path: "if-else-comp",
            component: IfElseComponent
        },
        {
            path: "for-and-switch",
            component: ForAndSwitchComponent
        },
        {
            path: "pipe-demo",
            component: PipeComponent
        },
        {
            path: "template-form",
            component: TemplateComponent
        },
        {
            path: "reactive-form",
            component: ReactiveComponent
        },
        {
            path: "get-api",
            component: GetApiComponent
        },
        {
            path: "post-api",
            component: PostApiComponent
        },
        {
            path: "lifecycle-events",
            component: LifecycleEventsComponent
        },
        {
            path: "ng-template-eg",
            component: NgTemplateEgComponent
        },
        {
            path: "ng-container-eg",
            component: NgContainerEgComponent
        },
        {
            path: "view-child-decorator",
            component: ViewChildComponent
        },
        {
            path:"signal",
            component:SignalComponent
        }
       ] 
    },

];
