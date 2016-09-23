import{
  NgModule,
  Component
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({//component annotation, decorating the class as a component, adding class metadata. Every annotation adds metadata to the class it precedes.
  selector: 'hello-world',//<hello-world></hello-world> appearing in html will be compiled using the component class (HelloWorld)
  template: `
    <div>
        Hello World
        <div>Hello {{name}}!</div>
    </div>
    <ul>
        <li *ngFor="let name of names">Hello {{name}}</li>
    </ul>
    `
})
class HelloWorld{ //Component Definition Class
  name: string;
  names: Array<string>; //or string[]
  constructor(){
    this.name = "George";
    this.names = ['Peter', 'Paul', 'Mary', 'Lisa'];
  }
}

@NgModule({//Create an NgModule that points to the HelloWorld component
  declarations: [HelloWorld], //defines the components in the module/application, in this case only HelloWorld
  imports: [BrowserModule], //describes the module/application dependencies
  bootstrap: [HelloWorld] //The top level component for the module/application
})

class HelloWorldAppModule {}//The application class
platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);