import {Component} from '@angular/core';

@Component({
  template: `
    <div id="wrap">
      <iframe id="iframeId" scrolling="yes" frameborder="no" src="/dev/webmap/geoservermap.html"></iframe>
    </div>
  `,
  styles:[`
    #iframeId{
      display: block;
      width: 100%;
      height: 1000px;
    }
    #wrap {
      position:fixed;
      left:0;
      width:100%;
      top:0;
      height:100%;
    }
  `]
})

export class WebMapComponent {

  }
