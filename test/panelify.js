var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('panelify tests', function() {

    jsdom({ src: require('../dist/panelify').Panelify() });

    describe('waypoints', function() {
        it('should exist and be globally scoped', function () {
            var panelify = new Panelify();
            expect(window.Waypoint).to.be.a('function');
        });
    });

    describe('#constructor', function() {
        it('defaults to bottom-in-view', function () {
            var panelify = new Panelify();
            expect(panelify.offset).to.equal('bottom-in-view');
        });

        it('should have an offset of 0% if provided', function () {
            var panelify = new Panelify('0%');
            expect(panelify.offset).to.equal('0%');
        });

        it('should have an offset of bottom-in-view if provided', function () {
            var panelify = new Panelify('bottom-in-view');
            expect(panelify.offset).to.equal('bottom-in-view');
        });

        it('should have an offset of bottom-in-view if provided', function () {
            var panelify = new Panelify('fdfgdf');
            expect(panelify.offset).to.equal.undefined;
        });
    });
});
