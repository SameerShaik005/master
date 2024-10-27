import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  showautomationMenu: boolean = false;


  // scrollToCard() {
  //   var my_element = document.getElementById();
  //   if(null != my_element) {
  //     my_element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest"
  //     });
  //   }
  // }
}
