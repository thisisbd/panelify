/*!
 Panelify - smooth vertical sliding panels
 Author - Daniel Griffin (https://github.com/dsgriffin)
 Copyright © 2011-2015 BD Network (https://github.com/thisisbd)
 Licensed under the MIT license.
*/

import Waypoint from './../node_modules/waypoints/lib/noframework.waypoints.min.js';

// force page to the top on refresh/hard refresh
window.onbeforeunload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
};

// panelify; smooth vertical sliding panels using waypoints
export default class Panelify {
    constructor(offset = 'bottom-in-view', minScreenWidth = 1068) {
        // desktop only by default unless user wants a manual implementation of tablet/mobile versions.
        // return and exit otherwise.
        if (window.matchMedia(`(max-width: ${minScreenWidth}px)`).matches) { return; }
        // a choice of either 0% or bottom-in-view; if neither are chosen, bottom-in-view is assumed
        Panelify.panelifyOffset(offset);
        // this will hold the waypoint triggers
        this.waypoints = [];
        // attach the waypoint triggers to the elements with the classname waypoint
        this.setUpWaypoints();
    }

    setUpWaypoints() {
        // get all waypoint elms in array format (for usage with for-of)
        const waypointElements = Array.from(document.getElementsByClassName('panelify'));
        // attach a waypoint trigger to each waypoint element
        for(const waypoint of waypointElements) {
            this.waypoints.push(new window.Waypoint({
                element: waypoint,
                handler: this.handler,
                offset: Panelify.panelifyOffset()
            }));
        }
    }

    handler(direction) {
        const elmContainer = this.element;
        const padder = document.getElementById('transparent-padder');

        if(direction === 'down') {
            // set the height of the padder to be the height of the container plus it's offset so no jump/gaps
            Panelify.setPadderHeight(padder, elmContainer.clientHeight + elmContainer.offsetTop);
            // set the container to be position fixed, so it can be scrolled over
            Panelify.fixElement(elmContainer);
        }
        else if (direction === 'up') {
            let recalculatedHeight = 0;
            // combine the height of all previous siblings
            for(const prev of Panelify.prevAll(elmContainer)) {
                recalculatedHeight += prev.clientHeight;
            }
            // set the recalculated height after taking previous siblings into consideration
            Panelify.setPadderHeight(padder, recalculatedHeight);
            // reset the container to it's original position/zIndex etc.
            Panelify.resetElement(elmContainer);
        }
    }

    static prevAll(elm) {
        let matches = [];
        let prev = elm.previousSibling;

        while ((prev = prev.previousSibling) !== null) {
            if (prev.nodeType === 1 && prev.className && prev.className.indexOf('panelify') >= 0) {
                matches.push(prev);
            }
        }

        return matches;
    }

    static setPadderHeight(elm, height) {
        elm.style.height = `${height}px`;
    }

    static fixElement(elm) {
        const elmStyle = elm.style;
        const offset = Panelify.panelifyOffset() === '0%' ? 'top' : 'bottom';
        // fixes element to the top (if waypoints are triggered at the top of a panel) or bottom (if at the bottom of the panel)
        elmStyle[offset] = '0';
        elmStyle.position = 'fixed';
        elmStyle.zIndex = '-10';
    }

    static resetElement(elm) {
        const elmStyle = elm.style;
        const offset = Panelify.panelifyOffset() === '0%' ? 'top' : 'bottom';
        // resets element top prop (if waypoints are triggered at the top of a panel) or bottom prop (if at the bottom of the panel)
        elmStyle[offset] = '';
        elmStyle.position = '';
        elmStyle.zIndex = '';
    }

    static panelifyOffset(offset) {
        if(offset) {
            Panelify.offset = offset;
        }
        return Panelify.offset;
    }
}