import Backbone from 'backbone';
import $ from 'jquery';
Backbone.$ = $;
import Marionette from 'backbone.marionette';
import 'bootstrap';
import 'backbone.syphon';
import 'babel-polyfill';
import 'backbone.localstorage';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
