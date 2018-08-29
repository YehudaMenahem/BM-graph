import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-elastic-box',
  templateUrl: './elastic-box.component.html',
  styleUrls: ['./elastic-box.component.css']
})

export class ElasticBoxComponent implements OnInit {
  @ViewChild('ngDraggable') ngDraggable: ElementRef;
  @ViewChild('chart', {read: ElementRef}) chart: ElementRef; 
  public keyWidth:string = 'width';
  public keyHeight:string = 'height';
  public keyoffsetLeft:string = 'offsetLeft';
  public keyoffsetTop:string = 'offsetTop';
  public width:string = localStorage.getItem(this.keyWidth) || '810';
  public height:string = localStorage.getItem(this.keyHeight) || '420';
  public offsetLeft:string = localStorage.getItem(this.keyoffsetLeft) || null;
  public offsetTop:string = localStorage.getItem(this.keyoffsetTop) || null; 
  public inBounds = true;
  public edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  public ngStyles = {
    "position":"absolute",
    "min-width":"450px",
    "min-height":"230px"
  };

  size = null;
  position = null;

  constructor() {}

  ngOnInit() {
    localStorage.setItem(this.keyWidth, this.width+"");
    localStorage.setItem(this.keyHeight, this.height+"");
    localStorage.setItem(this.keyoffsetLeft, this.offsetLeft+"");
    localStorage.setItem(this.keyoffsetTop, this.offsetTop+"");
  }

  onMoveEnd(event) {
    localStorage.setItem(this.keyoffsetLeft, this.ngDraggable.nativeElement.getBoundingClientRect().left);
    localStorage.setItem(this.keyoffsetTop, this.ngDraggable.nativeElement.getBoundingClientRect().top);
  }

  onResizeStop(event){
    localStorage.setItem(this.keyWidth, event.size.width+"");
    localStorage.setItem(this.keyHeight, event.size.height+"");
    this.equalsHeight();
  }

  checkEdge(event) {
    this.edge = event;
  }

  equalsHeight(){
    this.height = this.chart.nativeElement.children[0].children[1].height + 50;
    localStorage.setItem(this.keyHeight, this.height+"");
  }

}
