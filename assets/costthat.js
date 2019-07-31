'use strict';



;define("costthat/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });

  _exports.default = _default;
});
;define("costthat/app", ["exports", "costthat/resolver", "ember-load-initializers", "costthat/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("costthat/components/list-filter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['list-filter'],
    value: '',

    init() {
      this._super(...arguments);

      this.filter('').then(allResults => {
        this.set('results', allResults.results);
      });
    },

    actions: {
      handleFilterEntry() {
        let filterInputValue = this.value;
        let filterAction = this.filter;
        filterAction(filterInputValue).then(filterResults => {
          if (filterResults.query === this.value) {
            this.set('results', filterResults.results);
          }
        });
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/components/location-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['map-container'],
    mapElement: Ember.inject.service(),

    didInsertElement() {
      this._super(...arguments);

      this.mapElement.getMapElement(this.location).then(mapElement => {
        this.element.append(mapElement);
      });
    }

  });

  _exports.default = _default;
});
;define("costthat/components/plan-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    isWide: false,
    actions: {
      toggleImageSize() {
        this.toggleProperty('isWide');
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/components/product-list-filter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['list-filter'],
    value: '',

    init() {
      this._super(...arguments);

      this.filter('').then(allResults => {
        this.set('results', allResults.results);
      });
    },

    actions: {
      handleFilterEntry() {
        let filterInputValue = this.value;
        let filterAction = this.filter;
        filterAction(filterInputValue).then(filterResults => {
          if (filterResults.query === this.value) {
            this.set('results', filterResults.results);
          }
        });
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/components/product-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    isWide: false,
    actions: {
      toggleImageSize() {
        this.toggleProperty('isWide');
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("costthat/controllers/plans", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      filterByCity(param) {
        if (param !== '') {
          return this.store.query('plan', {
            city: param
          }).then(filteredResults => {
            return {
              query: param,
              results: filteredResults
            };
          });
        } else {
          return this.store.findAll('plan').then(results => {
            return {
              query: param,
              results: results
            };
          });
        }
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/controllers/plans/index", ["exports", "costthat/controllers/plans"], function (_exports, _plans) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _plans.default;
  _exports.default = _default;
});
;define("costthat/controllers/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      filterByCity(param) {
        if (param !== '') {
          return this.store.query('product', {
            city: param
          }).then(filteredResults => {
            return {
              query: param,
              results: filteredResults
            };
          });
        } else {
          return this.store.findAll('product').then(results => {
            return {
              query: param,
              results: results
            };
          });
        }
      }

    }
  });

  _exports.default = _default;
});
;define("costthat/controllers/products/index", ["exports", "costthat/controllers/products"], function (_exports, _products) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _products.default;
  _exports.default = _default;
});
;define("costthat/helpers/app-version", ["exports", "costthat/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("costthat/helpers/plan-property-type", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const communityPropertyTypes = ['Condo', 'Townhouse', 'Apartment'];

  var _default = Ember.Helper.helper(function rentalPropertyType([propertyType]
  /*, hash*/
  ) {
    if (communityPropertyTypes.includes(propertyType)) {
      return 'Community';
    }

    return 'Standalone';
  });

  _exports.default = _default;
});
;define("costthat/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("costthat/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("costthat/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "costthat/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("costthat/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("costthat/initializers/ember-cli-mirage", ["exports", "costthat/config/environment", "costthat/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("costthat/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("costthat/initializers/export-application-global", ["exports", "costthat/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("costthat/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("costthat/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("costthat/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    this.passthrough('https://api.mapbox.com/**');
    this.namespace = '/api';
    let plans = [{
      type: 'plans',
      id: 'grand-old-mansion',
      attributes: {
        title: "Grand Old Mansion",
        owner: "Veruca Salt",
        city: "San Francisco",
        category: "Estate",
        bedrooms: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    }, {
      type: 'plans',
      id: 'urban-living',
      attributes: {
        title: "Urban Living",
        owner: "Mike Teavee",
        city: "Seattle",
        category: "Condo",
        bedrooms: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    }, {
      type: 'plans',
      id: 'downtown-charm',
      attributes: {
        title: "Downtown Charm",
        owner: "Violet Beauregarde",
        city: "Portland",
        category: "Apartment",
        bedrooms: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }];
    this.get('/plans', function (db, request) {
      if (request.queryParams.city !== undefined) {
        let filteredPlans = plans.filter(function (i) {
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return {
          data: filteredPlans
        };
      } else {
        return {
          data: plans
        };
      }
    });
    this.get('/plans/:id', function (db, request) {
      return {
        data: plans.find(plan => request.params.id === plan.id)
      };
    });
    let products = [{
      type: 'products',
      id: 'digitalocean-1gb-1vcpu',
      attributes: {
        name: "DigitalOcean 1 GB & 1 vCPU",
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
        vcpu: 1,
        memory: 1,
        storage: 25,
        transfer: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 5,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "GoDaddy",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.godaddy.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-2gb-1vcpu',
      attributes: {
        name: "DigitalOcean 2 GB & 1 vCPU",
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
        vcpu: 1,
        memory: 2,
        storage: 50,
        transfer: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        price: 10,
        url: null,
        viewed: null,
        region: "Seattle",
        "manufacturer-name": "Namecheap",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.namecheap.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-3gb-1vcpu',
      attributes: {
        name: "DigitalOcean 3 GB & 1 vCPU",
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
        vcpu: 1,
        memory: 3,
        storage: 60,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        price: 15,
        url: null,
        viewed: null,
        region: "Portland",
        "manufacturer-name": "Domain.com",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.domain.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-1gb-1vcpu',
      attributes: {
        name: "DigitalOcean 1 GB & 1 vCPU",
        description: "DigitalOcean 1 GB & 1 vCPU.",
        vcpu: 1,
        memory: 1,
        storage: 25,
        transfer: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 5,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-2gb-1vcpu',
      attributes: {
        name: "DigitalOcean 2 GB & 1 vCPU",
        description: "DigitalOcean 2 GB & 1 vCPU.",
        vcpu: 1,
        memory: 2,
        storage: 50,
        transfer: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 10,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-3gb-1vcpu',
      attributes: {
        name: "DigitalOcean 3 GB & 1 vCPU",
        description: "DigitalOcean 3 GB & 1 vCPU.",
        vcpu: 1,
        memory: 3,
        storage: 60,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 15,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-2gb-2vcpu',
      attributes: {
        name: "DigitalOcean 2 GB & 2 vCPU",
        description: "DigitalOcean 2 GB & 2 vCPU.",
        vcpu: 2,
        memory: 2,
        storage: 60,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 15,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-1gb-3vcpu',
      attributes: {
        name: "DigitalOcean 1 GB & 3 vCPU",
        description: "DigitalOcean 1 GB & 3 vCPU.",
        vcpu: 3,
        memory: 1,
        storage: 60,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 15,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-4gb-2vcpu',
      attributes: {
        name: "DigitalOcean 4 GB & 2 vCPU",
        description: "DigitalOcean 4 GB & 2 vCPU.",
        vcpu: 2,
        memory: 4,
        storage: 80,
        transfer: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 20,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-8gb-4vcpu',
      attributes: {
        name: "DigitalOcean 8 GB & 4 vCPU",
        description: "DigitalOcean 8 GB & 4 vCPU.",
        vcpu: 4,
        memory: 8,
        storage: 160,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 40,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-16gb-6vcpu',
      attributes: {
        name: "DigitalOcean 16 GB & 6 vCPU",
        description: "DigitalOcean 16 GB & 6 vCPU.",
        vcpu: 6,
        memory: 16,
        storage: 320,
        transfer: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 80,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-32gb-8vcpu',
      attributes: {
        name: "DigitalOcean 32 GB & 8 vCPU",
        description: "DigitalOcean 32 GB & 8 vCPU.",
        vcpu: 8,
        memory: 32,
        storage: 640,
        transfer: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 160,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-48gb-12vcpu',
      attributes: {
        name: "DigitalOcean 48 GB & 12 vCPU",
        description: "DigitalOcean 48 GB & 12 vCPU.",
        vcpu: 12,
        memory: 48,
        storage: 960,
        transfer: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 240,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-64gb-16vcpu',
      attributes: {
        name: "DigitalOcean 64 GB & 16 vCPU",
        description: "DigitalOcean 64 GB & 16 vCPU.",
        vcpu: 16,
        memory: 64,
        storage: 1280,
        transfer: 9,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 320,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-96gb-20vcpu',
      attributes: {
        name: "DigitalOcean 96 GB & 20 vCPU",
        description: "DigitalOcean 96 GB & 20 vCPU.",
        vcpu: 20,
        memory: 96,
        storage: 1920,
        transfer: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 480,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-128gb-24vcpu',
      attributes: {
        name: "DigitalOcean 128 GB & 24 vCPU",
        description: "DigitalOcean 128 GB & 24 vCPU.",
        vcpu: 24,
        memory: 128,
        storage: 2560,
        transfer: 11,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 640,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'digitalocean-192gb-32vcpu',
      attributes: {
        name: "DigitalOcean 192 GB & 32 vCPU",
        description: "DigitalOcean 192 GB & 32 vCPU.",
        vcpu: 32,
        memory: 192,
        storage: 3840,
        transfer: 12,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 960,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "DigitalOcean",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.digitalocean.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-1gb-1vcpu',
      attributes: {
        name: "Linode 1 GB & 1 vCPU",
        description: "Linode 1 GB & 1 vCPU.",
        vcpu: 1,
        memory: 1,
        storage: 25,
        transfer: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 5,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-2gb-1vcpu',
      attributes: {
        name: "Linode 2 GB & 1 vCPU",
        description: "Linode 2 GB & 1 vCPU.",
        vcpu: 1,
        memory: 2,
        storage: 50,
        transfer: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 10,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-4gb-2vcpu',
      attributes: {
        name: "Linode 4 GB & 2 vCPU",
        description: "Linode 4 GB & 2 vCPU.",
        vcpu: 2,
        memory: 4,
        storage: 80,
        transfer: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 20,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-8gb-4vcpu',
      attributes: {
        name: "Linode 8 GB & 4 vCPU",
        description: "Linode 8 GB & 4 vCPU.",
        vcpu: 4,
        memory: 8,
        storage: 160,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 40,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-16gb-6vcpu',
      attributes: {
        name: "Linode 16 GB & 6 vCPU",
        description: "Linode 16 GB & 6 vCPU.",
        vcpu: 6,
        memory: 16,
        storage: 320,
        transfer: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 80,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-32gb-8vcpu',
      attributes: {
        name: "Linode 32 GB & 8 vCPU",
        description: "Linode 32 GB & 8 vCPU.",
        vcpu: 8,
        memory: 32,
        storage: 640,
        transfer: 16,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 160,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-64gb-16vcpu',
      attributes: {
        name: "Linode 64 GB & 16 vCPU",
        description: "Linode 64 GB & 16 vCPU.",
        vcpu: 16,
        memory: 64,
        storage: 1280,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 320,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-96gb-20vcpu',
      attributes: {
        name: "Linode 96 GB & 20 vCPU",
        description: "Linode 96 GB & 20 vCPU.",
        vcpu: 20,
        memory: 96,
        storage: 1920,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 480,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-128gb-24vcpu',
      attributes: {
        name: "Linode 128 GB & 24 vCPU",
        description: "Linode 128 GB & 24 vCPU.",
        vcpu: 24,
        memory: 128,
        storage: 2560,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 640,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-192gb-32vcpu',
      attributes: {
        name: "Linode 192 GB & 32 vCPU",
        description: "Linode 192 GB & 32 vCPU.",
        vcpu: 32,
        memory: 192,
        storage: 3840,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 960,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-4gb-2vcpu',
      attributes: {
        name: "Linode Dedicated 4 GB & 2 vCPU",
        description: "Linode Dedicated 4 GB & 2 vCPU.",
        vcpu: 2,
        memory: 4,
        storage: 80,
        transfer: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 30,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-8gb-4vcpu',
      attributes: {
        name: "Linode Dedicated 8 GB & 4 vCPU",
        description: "Linode Dedicated 8 GB & 4 vCPU.",
        vcpu: 4,
        memory: 8,
        storage: 160,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 60,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-16gb-8vcpu',
      attributes: {
        name: "Linode Dedicated 16 GB & 8 vCPU",
        description: "Linode Dedicated 16 GB & 8 vCPU.",
        vcpu: 8,
        memory: 16,
        storage: 320,
        transfer: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 120,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-32gb-16vcpu',
      attributes: {
        name: "Linode Dedicated 32 GB & 16 vCPU",
        description: "Linode Dedicated 32 GB & 16 vCPU.",
        vcpu: 16,
        memory: 32,
        storage: 640,
        transfer: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 240,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-64gb-32vcpu',
      attributes: {
        name: "Linode Dedicated 64 GB & 32 vCPU",
        description: "Linode Dedicated 64 GB & 32 vCPU.",
        vcpu: 32,
        memory: 64,
        storage: 1280,
        transfer: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 480,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-96gb-48vcpu',
      attributes: {
        name: "Linode Dedicated 96 GB & 48 vCPU",
        description: "Linode Dedicated 96 GB & 48 vCPU.",
        vcpu: 48,
        memory: 96,
        storage: 1920,
        transfer: 9,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 720,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-32gb-8vcpu',
      attributes: {
        name: "Linode Dedicated 32 GB & 8 vCPU",
        description: "Linode Dedicated 32GB + RTX6000 GPU x1.",
        vcpu: 8,
        memory: 32,
        storage: 640,
        transfer: 16,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 1000,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-64gb-16vcpu',
      attributes: {
        name: "Linode Dedicated 64 GB & 16 vCPU",
        description: "Linode Dedicated 64GB + RTX6000 GPU x2.",
        vcpu: 16,
        memory: 64,
        storage: 1280,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 2000,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-96gb-20vcpu',
      attributes: {
        name: "Linode Dedicated 96 GB & 20 vCPU",
        description: "Linode Dedicated 96GB + RTX6000 GPU x3.",
        vcpu: 20,
        memory: 96,
        storage: 1920,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 3000,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-dedicated-128gb-24vcpu',
      attributes: {
        name: "Linode Dedicated 128 GB & 24 vCPU",
        description: "Linode Dedicated 128GB + RTX6000 GPU x4.",
        vcpu: 24,
        memory: 128,
        storage: 2560,
        transfer: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 4000,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-24gb-1vcpu',
      attributes: {
        name: "Linode 24 GB & 1 vCPU",
        description: "Linode 24 GB & 1 vCPU.",
        vcpu: 1,
        memory: 24,
        storage: 20,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 60,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-48gb-2vcpu',
      attributes: {
        name: "Linode 48 GB & 2 vCPU",
        description: "Linode 48 GB & 2 vCPU.",
        vcpu: 2,
        memory: 48,
        storage: 40,
        transfer: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 120,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-90gb-4vcpu',
      attributes: {
        name: "Linode 90 GB & 4 vCPU",
        description: "Linode 90 GB & 4 vCPU.",
        vcpu: 4,
        memory: 90,
        storage: 90,
        transfer: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 240,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-150gb-8vcpu',
      attributes: {
        name: "Linode 150 GB & 8 vCPU",
        description: "Linode 150 GB & 8 vCPU.",
        vcpu: 8,
        memory: 150,
        storage: 200,
        transfer: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 480,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'linode-300gb-16vcpu',
      attributes: {
        name: "Linode 300 GB & 16 vCPU",
        description: "Linode 300 GB & 16 vCPU.",
        vcpu: 16,
        memory: 300,
        storage: 340,
        transfer: 9,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 960,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Linode",
        "manufacturer-image": null,
        "manufacturer-url": "https://www.linode.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-512mb-1vcpu-ipv6',
      attributes: {
        name: "Vultr 512 MB & 1 vCPU",
        description: "Vultr 512 MB & 1 vCPU.",
        vcpu: 1,
        memory: 0.5,
        storage: 10,
        transfer: 0.50,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 2.50,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-512mb-1vcpu',
      attributes: {
        name: "Vultr 512 MB & 1 vCPU",
        description: "Vultr 512 MB & 1 vCPU.",
        vcpu: 1,
        memory: 0.5,
        storage: 10,
        transfer: 0.50,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 3.50,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-1gb-1vcpu',
      attributes: {
        name: "Vultr 1 GB & 1 vCPU",
        description: "Vultr 1 GB & 1 vCPU.",
        vcpu: 1,
        memory: 1024,
        storage: 25,
        transfer: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 5,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-2gb-1vcpu',
      attributes: {
        name: "Vultr 2 GB & 1 vCPU",
        description: "Vultr 2 GB & 1 vCPU.",
        vcpu: 1,
        memory: 2,
        storage: 55,
        transfer: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 10,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-4gb-2vcpu',
      attributes: {
        name: "Vultr 4 GB & 2 vCPU",
        description: "Vultr 4 GB & 2 vCPU.",
        vcpu: 2,
        memory: 4,
        storage: 80,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 20,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-8gb-4vcpu',
      attributes: {
        name: "Vultr 8 GB & 4 vCPU",
        description: "Vultr 8 GB & 4 vCPU.",
        vcpu: 4,
        memory: 8,
        storage: 160,
        transfer: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 40,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-16gb-6vcpu',
      attributes: {
        name: "Vultr 16 GB & 6 vCPU",
        description: "Vultr 16 GB & 6 vCPU.",
        vcpu: 6,
        memory: 16,
        storage: 320,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 80,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-32gb-8vcpu',
      attributes: {
        name: "Vultr 32 GB & 8 vCPU",
        description: "Vultr 32 GB & 8 vCPU.",
        vcpu: 8,
        memory: 32,
        storage: 640,
        transfer: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 160,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-64gb-16vcpu',
      attributes: {
        name: "Vultr 64 GB & 16 vCPU",
        description: "Vultr 64 GB & 16 vCPU.",
        vcpu: 16,
        memory: 64,
        storage: 1280,
        transfer: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 320,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-96gb-24vcpu',
      attributes: {
        name: "Vultr 96 GB & 24 vCPU",
        description: "Vultr 96 GB & 24 vCPU.",
        vcpu: 24,
        memory: 96,
        storage: 1600,
        transfer: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 640,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-1gb-1vcpu',
      attributes: {
        name: "Vultr High Frequency 1 GB & 1 vCPU",
        description: "Vultr High Frequency 1 GB & 1 vCPU.",
        vcpu: 1,
        memory: 1024,
        storage: 32,
        transfer: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 6,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-2gb-1vcpu',
      attributes: {
        name: "Vultr High Frequency 2 GB & 1 vCPU",
        description: "Vultr High Frequency 2 GB & 1 vCPU.",
        vcpu: 1,
        memory: 2,
        storage: 64,
        transfer: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 12,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-4gb-2vcpu',
      attributes: {
        name: "Vultr High Frequency 4 GB & 2 vCPU",
        description: "Vultr High Frequency 4 GB & 2 vCPU.",
        vcpu: 2,
        memory: 4,
        storage: 128,
        transfer: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 24,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-8gb-3vcpu',
      attributes: {
        name: "Vultr High Frequency 8 GB & 3 vCPU",
        description: "Vultr High Frequency 8 GB & 3 vCPU.",
        vcpu: 3,
        memory: 8,
        storage: 256,
        transfer: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 48,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-16gb-4vcpu',
      attributes: {
        name: "Vultr High Frequency 16 GB & 4 vCPU",
        description: "Vultr High Frequency 16 GB & 4 vCPU.",
        vcpu: 4,
        memory: 16,
        storage: 384,
        transfer: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 96,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-32gb-8vcpu',
      attributes: {
        name: "Vultr High Frequency 32 GB & 8 vCPU",
        description: "Vultr High Frequency 32 GB & 8 vCPU.",
        vcpu: 8,
        memory: 32,
        storage: 512,
        transfer: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 192,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }, {
      type: 'products',
      id: 'vultr-high-frequency-48gb-12vcpu',
      attributes: {
        name: "Vultr High Frequency 48 GB & 12 vCPU",
        description: "Vultr High Frequency 48 GB & 12 vCPU.",
        vcpu: 12,
        memory: 48,
        storage: 768,
        transfer: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        price: 256,
        url: null,
        viewed: null,
        region: "San Francisco",
        "manufacturer-name": "Vultr",
        "manufacturer-image": null,
        "manufacturer-url": "http://www.vultr.com/",
        "url-clicked": null,
        category: null
      }
    }];
    this.get('/products', function (db, request) {
      if (request.queryParams.city !== undefined) {
        let filteredProducts = products.filter(function (i) {
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return {
          data: filteredProducts
        };
      } else {
        return {
          data: products
        };
      }
    });
    this.get('/products/:id', function (db, request) {
      return {
        data: products.find(product => request.params.id === product.id)
      };
    }); // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
    */
  }
});
;define("costthat/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default()
  /* server */
  {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    // server.createList('post', 10);
  }
});
;define("costthat/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("costthat/models/plan", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    title: _emberData.default.attr(),
    owner: _emberData.default.attr(),
    city: _emberData.default.attr(),
    category: _emberData.default.attr(),
    image: _emberData.default.attr(),
    bedrooms: _emberData.default.attr(),
    description: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("costthat/models/product", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    name: _emberData.default.attr(),
    description: _emberData.default.attr(),
    vcpu: _emberData.default.attr(),
    memory: _emberData.default.attr(),
    storage: _emberData.default.attr(),
    transfer: _emberData.default.attr(),
    image: _emberData.default.attr(),
    price: _emberData.default.attr(),
    url: _emberData.default.attr(),
    viewed: _emberData.default.attr(),
    region: _emberData.default.attr(),
    manufacturerName: _emberData.default.attr(),
    manufacturerImage: _emberData.default.attr(),
    manufacturerUrl: _emberData.default.attr(),
    urlClicked: _emberData.default.attr(),
    category: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("costthat/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("costthat/router", ["exports", "costthat/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('plans', function () {
      this.route('show', {
        path: '/:plan_id'
      });
    });
    this.route('products', function () {
      this.route('show', {
        path: '/:product_id'
      });
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("costthat/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("costthat/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("costthat/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('products');
    }

  });

  _exports.default = _default;
});
;define("costthat/routes/plans", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("costthat/routes/plans/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('plan');
    }

  });

  _exports.default = _default;
});
;define("costthat/routes/plans/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findRecord('plan', params.plan_id);
    }

  });

  _exports.default = _default;
});
;define("costthat/routes/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("costthat/routes/products/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('product');
    }

  });

  _exports.default = _default;
});
;define("costthat/routes/products/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findRecord('product', params.product_id);
    }

  });

  _exports.default = _default;
});
;define("costthat/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("costthat/services/geocode", ["exports", "ember-simple-leaflet-maps/services/geocode"], function (_exports, _geocode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _geocode.default;
    }
  });
});
;define("costthat/services/map-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    geocode: Ember.inject.service(),
    map: Ember.inject.service(),

    init() {
      if (!this.cachedMaps) {
        Ember.set(this, 'cachedMaps', {});
      }

      this._super(...arguments);
    },

    async getMapElement(location) {
      let camelizedLocation = Ember.String.camelize(location);
      let element = this.cachedMaps[camelizedLocation];

      if (!element) {
        element = this._createMapElement();
        let geocodedLocation = await this.geocode.fetchCoordinates(location);
        this.map.createMap(element, geocodedLocation);
        this.cachedMaps[camelizedLocation] = element;
      }

      return element;
    },

    _createMapElement() {
      let element = document.createElement('div');
      element.className = 'map';
      return element;
    }

  });

  _exports.default = _default;
});
;define("costthat/services/map", ["exports", "ember-simple-leaflet-maps/services/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("costthat/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "57G4EyhA",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"About CostThat\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"\\n    The CostThat website is a delightful project created to explore Web Service with Purpose.\\n    By building a Web Service comparison site, we can simultaneously imagine traveling\\n    AND building Web applications.\\n  \"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"button\",\"contact\"]],{\"statements\":[[0,\"    Contact Us\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5U3BbUyz",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"menu\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"index\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"\\n        \"],[7,\"em\",true],[8],[0,\"CostThat\"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"links\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"menu-about\",\"about\"]],{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"class\",\"route\"],[\"menu-contact\",\"contact\"]],{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"body\"],[8],[0,\"\\n    \"],[1,[22,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/components/list-filter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7Zc9SOj5",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[28,\"input\",null,[[\"value\",\"key-up\",\"class\",\"placeholder\"],[[23,0,[\"value\"]],[28,\"action\",[[23,0,[]],\"handleFilterEntry\"],null],\"light\",\"Filter By City\"]]],false],[0,\"\\n\"],[14,1,[[23,0,[\"results\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/components/list-filter.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/components/location-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0RMcgwO/",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/components/location-map.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/components/plan-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iG6KbMKy",
    "block": "{\"symbols\":[],\"statements\":[[7,\"article\",true],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[7,\"a\",true],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"toggleImageSize\"],null]],[11,\"class\",[29,[\"image \",[28,\"if\",[[23,0,[\"isWide\"]],\"wide\"],null]]]],[10,\"role\",\"button\"],[8],[0,\"\\n    \"],[7,\"img\",true],[11,\"src\",[23,0,[\"plan\",\"image\"]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n    \"],[7,\"small\",true],[8],[0,\"View Larger\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"details\"],[8],[0,\"\\n    \"],[7,\"h3\",true],[8],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[[24,[\"plan\",\"id\"]],\"plans.show\",[24,[\"plan\"]]]],{\"statements\":[[1,[23,0,[\"plan\",\"title\"]],false]],\"parameters\":[]},null],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Owner:\"],[9],[0,\" \"],[1,[23,0,[\"plan\",\"owner\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail type\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Type:\"],[9],[0,\" \"],[1,[28,\"plan-property-type\",[[23,0,[\"plan\",\"category\"]]],null],false],[0,\" - \"],[1,[23,0,[\"plan\",\"category\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail location\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Location:\"],[9],[0,\" \"],[1,[23,0,[\"plan\",\"city\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail bedrooms\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Number of bedrooms:\"],[9],[0,\" \"],[1,[23,0,[\"plan\",\"bedrooms\"]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[5,\"location-map\",[],[[\"@location\"],[[23,0,[\"plan\",\"city\"]]]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/components/plan-listing.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/components/product-list-filter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t094vAB7",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[28,\"input\",null,[[\"value\",\"key-up\",\"class\",\"placeholder\"],[[23,0,[\"value\"]],[28,\"action\",[[23,0,[]],\"handleFilterEntry\"],null],\"light\",\"Filter By City\"]]],false],[0,\"\\n\"],[14,1,[[23,0,[\"results\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/components/product-list-filter.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/components/product-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iKUiiJHz",
    "block": "{\"symbols\":[],\"statements\":[[7,\"article\",true],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[7,\"a\",true],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"toggleImageSize\"],null]],[11,\"class\",[29,[\"image \",[28,\"if\",[[23,0,[\"isWide\"]],\"wide\"],null]]]],[10,\"role\",\"button\"],[8],[0,\"\\n    \"],[7,\"img\",true],[11,\"src\",[23,0,[\"product\",\"image\"]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n    \"],[7,\"small\",true],[8],[0,\"View Larger\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"details\"],[8],[0,\"\\n    \"],[7,\"h3\",true],[8],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[[24,[\"product\",\"id\"]],\"products.show\",[24,[\"product\"]]]],{\"statements\":[[1,[23,0,[\"product\",\"name\"]],false]],\"parameters\":[]},null],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"vCPU:\"],[9],[0,\" \"],[1,[23,0,[\"product\",\"vcpu\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail type\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Memory (GiB):\"],[9],[0,\" \"],[1,[28,\"plan-property-type\",[[23,0,[\"product\",\"memory\"]]],null],false],[0,\" - \"],[1,[23,0,[\"product\",\"memory\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail location\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Storage (GB):\"],[9],[0,\" \"],[1,[23,0,[\"product\",\"storage\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail bedrooms\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Data Transfer:\"],[9],[0,\" \"],[1,[23,0,[\"product\",\"transfer\"]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[5,\"location-map\",[],[[\"@location\"],[[23,0,[\"product\",\"region\"]]]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/components/product-listing.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "y3fApW4N",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Contact Us\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"\\n    CostThat Representatives would love to help you\"],[7,\"br\",true],[8],[9],[0,\"\\n    choose a Web Hosting Plan or answer any questions you may have.\\n  \"],[9],[0,\"\\n  \"],[7,\"address\",true],[8],[0,\"\\n    CostThat HQ\\n    \"],[7,\"p\",true],[8],[0,\"\\n      1212 Test Address Avenue\"],[7,\"br\",true],[8],[9],[0,\"\\n      Testington, OR 97233\\n    \"],[9],[0,\"\\n    \"],[7,\"a\",true],[10,\"href\",\"tel:503.555.1212\"],[8],[0,\"+1 (503) 555-1212\"],[9],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"a\",true],[10,\"href\",\"mailto:costthatrep@costthat.com\"],[8],[0,\"costthatrep@costthat.com\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"button\",\"about\"]],{\"statements\":[[0,\"    About\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oGpNZrMV",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/plans", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "i29Sn+99",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Welcome!\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"We hope you find exactly what you're looking for in a Hosting Plan to Grow your website.\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"button\",\"about\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/plans.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/plans/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xp6VlqYh",
    "block": "{\"symbols\":[\"filteredResults\",\"planUnit\"],\"statements\":[[5,\"list-filter\",[],[[\"@filter\"],[[28,\"action\",[[23,0,[]],\"filterByCity\"],null]]],{\"statements\":[[0,\"\\n  \"],[7,\"ul\",true],[10,\"class\",\"results\"],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"      \"],[7,\"li\",true],[8],[5,\"plan-listing\",[],[[\"@plan\"],[[23,2,[]]]]],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/plans/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/plans/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QkFtLdoI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo show-listing\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[10,\"class\",\"title\"],[8],[1,[23,0,[\"model\",\"title\"]],false],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[7,\"img\",true],[11,\"src\",[23,0,[\"model\",\"image\"]]],[10,\"class\",\"rental-pic\"],[11,\"alt\",[29,[\"Picture of \",[23,0,[\"model\",\"title\"]]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail-section\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Owner:\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"owner\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Type:\"],[9],[0,\" \"],[1,[28,\"plan-property-type\",[[23,0,[\"model\",\"category\"]]],null],false],[0,\" - \"],[1,[23,0,[\"model\",\"category\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Location:\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"city\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Number of bedrooms:\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"bedrooms\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"description\"],[8],[0,\"\\n        \"],[7,\"p\",true],[8],[1,[23,0,[\"model\",\"description\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/plans/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gmE6WoJs",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Welcome!\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"We hope you find exactly what you're looking for in a Hosting Plan to Grow your website.\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"button\",\"about\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/products.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/products/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Tjx/+GLB",
    "block": "{\"symbols\":[\"filteredResults\",\"productUnit\"],\"statements\":[[5,\"product-list-filter\",[],[[\"@filter\"],[[28,\"action\",[[23,0,[]],\"filterByCity\"],null]]],{\"statements\":[[0,\"\\n  \"],[7,\"ul\",true],[10,\"class\",\"results\"],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"      \"],[7,\"li\",true],[8],[5,\"product-listing\",[],[[\"@product\"],[[23,2,[]]]]],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/products/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/templates/products/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0MrvMuJp",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo show-listing\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[10,\"class\",\"title\"],[8],[1,[23,0,[\"model\",\"name\"]],false],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[7,\"img\",true],[11,\"src\",[23,0,[\"model\",\"image\"]]],[10,\"class\",\"rental-pic\"],[11,\"alt\",[29,[\"Picture of \",[23,0,[\"model\",\"name\"]]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail-section\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"vCPU:\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"vcpu\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Memory (GiB):\"],[9],[0,\" \"],[1,[28,\"plan-property-type\",[[23,0,[\"model\",\"memory\"]]],null],false],[0,\" - \"],[1,[23,0,[\"model\",\"memory\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Storage (GB):\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"storage\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"detail\"],[8],[0,\"\\n        \"],[7,\"strong\",true],[8],[0,\"Data Transfer:\"],[9],[0,\" \"],[1,[23,0,[\"model\",\"transfer\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"description\"],[8],[0,\"\\n        \"],[7,\"p\",true],[8],[1,[23,0,[\"model\",\"description\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "costthat/templates/products/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("costthat/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('costthat/config/environment', [], function() {
  var prefix = 'costthat';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("costthat/app")["default"].create({"name":"costthat","version":"0.0.0+bb2b2116"});
          }
        
//# sourceMappingURL=costthat.map
