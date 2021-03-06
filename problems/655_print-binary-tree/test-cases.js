const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2, 5, 3, null, null, null, 4])],
  output : [
    [ '', '', '', '', '', '', '', '1', '', '', '', '', '', '', '' ],
    [ '', '', '', '2', '', '', '', '', '', '', '', '5', '', '', '' ],
    [ '', '3', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
    [ '4', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]
  ]
}, {
  input  : [buildTree([1, 2, 3, null, 4])],
  output : [
    [ '', '', '', '1', '', '', '' ],
    [ '', '2', '', '', '', '3', '' ],
    [ '', '', '4', '', '', '', '' ]
  ]
}, {
  input  : [buildTree([1, 2])],
  output : [ [ '', '1', '' ], [ '2', '', '' ] ]
}];
