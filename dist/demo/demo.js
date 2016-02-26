/**
 * Panelify - smooth, vertical sliding panels using Waypoints.
 *
 * @param {string} {default: 'bottom-in-view'} offset - where the panel sliding triggers.
 * @param {number} {default: 1068 } minScreenWidth - minimum screen with (in pixels) where panelify should be applied.
 *
 */

var panelify = new Panelify(); // default, desktop (1068px min width)

// var panelify = new Panelify('bottom-in-view'); // default, desktop (1068px min width)

// var panelify = new Panelify('0%'); // triggers at the top of each panel, desktop (1068px min width)

// NOTE: Tablet and Mobile support is buggy (to varying degrees) and therefore the constructors below work
// and will work fine for small desktop browser windows but are not fully supported/mobile friendly

// var panelify = new Panelify('0%', 350); // triggers at the top of each panel, mobile and greater (350px min width).

// var panelify = new Panelify('bottom-in-view', 768); // triggers at the bottom of each panel, tablets and greater (768px min width).
