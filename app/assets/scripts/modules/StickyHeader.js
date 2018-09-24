import $ from 'jquery';
import 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoints();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.load(() => {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoints() {
    let k = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: direction => {
        if (direction == 'down') {
          k.siteHeader.addClass('site-header--dark');
        } else {
          k.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    let that = this;
    this.pageSections.each(function() {
      let currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == 'down') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%'
      });
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == 'up') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader;
