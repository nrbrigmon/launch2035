import {Component} from '@angular/core';

@Component({
  template: `
    <iframe id="iframeId" scrolling="no" frameborder="no" src="/dev/webmap/geoservermap.html"></iframe>
  `,
  styles:[`
    #iframeId{
      margin:0 auto;
      display: block;
      width: 100%;
      height: 1000px;
    }
  `]
})

export class WebMapComponent {

  }
