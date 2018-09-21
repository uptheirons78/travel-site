import $ from 'jquery';
import 'waypoints/lib/noframework.waypoints'; 

class RevealOnScroll {
  constructor(el, offset) {
   this.itemsToReveal = el;
   this.offsetPercentage = offset; 
   this.hideInitially();
   this.createWaypoints();
  }

  //METHODS  
  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    let k = this;
    this.itemsToReveal.each(function() {
      let currentItem = this;
      let waypoint = new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: k.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;