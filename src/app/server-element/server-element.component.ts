import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Angular separates css styles as per the components known as "View Encapsulation"
  // Emulated is the default behaviour.
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("\n\n Constructor is called FIRST!!!");
  }

  // It is a Life Cycle Hook.

  // Only hook that receives an argument 
  ngOnChanges(changes: SimpleChanges) {
    console.log("\n\n-- ngOnChanges is called SECOND!!!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("\n---- ngOnInit is called THIRD!!!");
    console.log("\n\nText-Content :- " + this.header.nativeElement.textContent);
    console.log("\n\nText-Content In Paragraph :- " + this.paragraph.nativeElement.textContent);
    console.log("\n\n");
  }

  ngDoCheck(): void {
    console.log("\n----- ngDoCheck is called FOURTH AND MULTIPLE TIMES AFTER THIS AND AT THE END IF IT IS INI DEVELOPMENT MODE!!!");
  }

  ngAfterContentInit(): void {
    console.log("\n------ ngAfterContentInit is called FIFTH!!!");
    console.log("\n\nText-Content In Paragraph :- " + this.paragraph.nativeElement.textContent);
    console.log("\n\n");
  }

  ngAfterContentChecked(): void {
    console.log("\n------- ngAfterContentChecked is called SIXTH AND MULTIPLE TIMES AFTER THIS AND AT THE END IF IT IS INI DEVELOPMENT MODE!!!");
  }

  ngAfterViewInit(): void {
    console.log("\n-------- ngAfterViewInit is called SEVENTH!!!");
    // This shows that after this phase, we can access template elements.
    // We can check or change the values inside the DOM.
    console.log("\n\nText-Content -: " + this.header.nativeElement.textContent);
    console.log("\n\n");
  }

  ngAfterViewChecked(): void {
    console.log("\n--------- ngAfterViewChecked is called EIGHTH AND MULTIPLE TIMES AFTER THIS AND AT THE END IF IT IS INI DEVELOPMENT MODE!!!");
  }

  ngOnDestroy(): void {
    console.log("\n\n ngOnDestroy is called when an element is destroyed!!!");
  }
}
