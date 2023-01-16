const d3 = Object.assign({},
    require('d3-selection').
    require('d3-scale'),
    require('d3-axis'),
    require('d3-array')
  );


const jsdom = require('jsdom');
const { JSDOM } = jsdom;
// create a new JSDOM instance for d3-selection to use
const document = new JSDOM().window.document;
d3.select(document.body)
  .append('div')