import './plugins';
import $ from 'jquery';
import Radio from 'backbone.radio';
import {createRouter, middleware} from 'marionette.routing';

import Application from './application/application';
import ApplicationRoute from './application/route';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FlashesService from './flashes/service';

import IndexRoute from './index/route';

import BooksRoute from './books/route';
import BooksIndexView from './books/index/view';
import BooksShowRoute from './books/show/route';

import './main.less';

let app = new Application();

ModalService.setup({
  container: app.layout.getRegion('overlay')
});

HeaderService.setup({
  container: app.layout.getRegion('header')
});

FlashesService.setup({
  container: app.layout.getRegion('flashes')
});

$(document).ajaxError(() => {
  FlashesService.request('add', {
    type: 'danger',
    title: 'Server Error'
  });
});

let router = createRouter({log: true, logError: true});

router.rootRegion = app.layout.getRegion('content');

router.map(function (route) {
  route('app', {path: '/', routeClass: ApplicationRoute, abstract: true}, function () {
    route('index', {path: '', routeClass: IndexRoute});
    route('colors', {path: 'colors'}, function () {
      route('colors.index', {path: 'index'});
      route('colors.new', {path: 'new'});
      route('colors.show', {path: ':colorid'});
      route('colors.edit', {path: ':colorid/edit'});
    });
    route('books', {path: 'books', routeClass: BooksRoute}, function () {
      route('books.index', {path: 'index', viewClass: BooksIndexView});
      route('books.show', {path: ':bookid', routeClass: BooksShowRoute});
    });
  })
});

Radio.channel('router').on('before:transition', function (transition) {
  if (transition.path === '/books') {
    transition.redirectTo('books.index')
  } else if (transition.path === '/colors') {
    transition.redirectTo('colors.index')
  }
});

HeaderService.request('add', {
  name: 'Colors',
  path: 'colors',
  type: 'primary'
});

HeaderService.request('add', {
  name: 'Books',
  path: 'books',
  type: 'primary'
});

router.use(middleware);

router.listen();

