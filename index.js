'use strict';

const Funnel     = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const path       = require('path');

module.exports = {
  name: '@gliffy/ember-bulma-css',

  treeForStyles: function treeForStyles(tree) {
    const styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel(path.dirname(require.resolve('bulma')), {
        destDir: 'ember-bulma-css'
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },

  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  }
};
