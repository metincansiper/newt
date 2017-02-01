var chise = require('chise');
var sbgnviz = require('sbgnviz');
var filesaverjs = require('filesaverjs');
window.jQuery = window.$ = require('jQuery'); // jQuery should be global because jQuery.qtip extension is not compatible with commonjs
var cytoscape = require('cytoscape');

require('jquery-expander')($);
require('bootstrap');

var appUtilities = require('./js/app-utilities');
var appCy = require('./js/app-cy');
var appMenu = require('./js/app-menu');

// Get cy extension instances
var cyPanzoom = require('cytoscape-panzoom');
var cyQtip = require('cytoscape-qtip');
var cyCoseBilkent = require('cytoscape-cose-bilkent');
var cyUndoRedo = require('cytoscape-undo-redo');
var cyClipboard = require('cytoscape-clipboard');
var cyContextMenus = require('cytoscape-context-menus');
var cyExpandCollapse = require('cytoscape-expand-collapse');
var cyEdgeBendEditing = require('cytoscape-edge-bend-editing');
var cyViewUtilities = require('cytoscape-view-utilities');
var cyEdgehandles = require('cytoscape-edgehandles');
var cyGridGuide = require('cytoscape-grid-guide');

// Register cy extensions
cyPanzoom( cytoscape, $ );
cyQtip( cytoscape, $ );
cyCoseBilkent( cytoscape );
cyUndoRedo( cytoscape );
cyClipboard( cytoscape );
cyContextMenus( cytoscape, $ );
cyExpandCollapse( cytoscape, $ );
cyEdgeBendEditing( cytoscape, $ );
cyViewUtilities( cytoscape, $ );
cyEdgehandles( cytoscape );
cyGridGuide( cytoscape );

// Libraries to pass sbgnviz
var libs = {};

libs.filesaverjs = filesaverjs;
libs.jQuery = jQuery;
libs.cytoscape = cytoscape;
libs.sbgnviz = sbgnviz;

chise({
  networkContainerSelector: '#sbgn-network-container',
  imgPath: 'node_modules/sbgnviz/src/img',
  // whether to fit label to nodes
  fitLabelsToNodes: function () {
    return appUtilities.getGeneralProperties().fitLabelsToNodes;
  },
  // dynamic label size it may be 'small', 'regular', 'large'
  dynamicLabelSize: function () {
    return appUtilities.getGeneralProperties().dynamicLabelSize;
  },
  // percentage used to calculate compound paddings
  compoundPadding: function () {
    return appUtilities.getGeneralProperties().compoundPadding;
  },
  undoable: true
}, libs);

appCy();
appMenu();