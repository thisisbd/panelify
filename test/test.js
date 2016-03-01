
window.__html__ = window.__html__ || {}; // set global variable which will hold demo html.

describe('Waypoints', function(){
    it('is a globally scoped function', function() {
       expect(typeof window.Waypoint).toEqual("function");
    });
});

describe('Panelify - Markup', function() {
    var holder;

    beforeEach(function() {
        holder = window.document.createElement('div');
        holder.innerHTML = window.__html__['test/test.html'];
    });

    it('contains a transparent padder', function() {
        expect(holder.querySelector('#transparent-padder').outerHTML).toEqual("<div id=\"transparent-padder\"></div>");
    });

    it('contains multiple panels with the classname panelify', function() {
        expect(typeof holder.querySelectorAll('.panelify')[0]).not.toBe(null);
        expect(typeof holder.querySelectorAll('.panelify')[1]).not.toBe(null);
    });
});