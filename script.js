/*================================================
*
*       The Amazing Colour Klick Game
*
=================================================*/

// start with self executing function for enclousure
var Feld = (function() {
  'use strict';
  console.log('jojo');

  //  "global" variables
  //======================
  var board = new Array();
  var xTiles;
  var visibles;
  var clicks;

  //  Caching the Dom
  //===================
  var $el      = $('#page');
  var $board   = $el.find('#board');
  var template = $board.html();

  //  Bind Events
  //===============


  init(); // start the game


  function init() {
    board     = []; //empty the board
    xTiles    = 4; // rows & cols
    visibles  = 0;
    clicks    = 0;

    _buildBoard();

  }

  function _buildBoard()
  {
    var pageWidth = Number;
    var tileX = _tileX();

    spielFeld();

    function _tileX()
    {
      if(window.screen.height > window.screen.width) {
        pageWidth = window.screen.width;
      }else pageWidth = window.screen.height - 200;

      var tileX = (pageWidth - 20) / xTiles;

      return tileX;
    }

    function spielFeld()
    {
      $board.empty().css({
        "width": pageWidth - 20,
        "height": pageWidth - 20
      });

      for(var y = 0; y < xTiles; y++) {
        board[y] = new Array();
        for(var x = 0; x < xTiles; x++) {

          // build board
          var kachel = $(template).css({
            "width":tileX,
            "height":tileX,
            "left":(tileX) * x,
            "top":(tileX) * y
            });
          kachel.attr("id",y + "_" + x);
          // kachel.mousedown(_testTile);
          kachel.bind("contextmenu", function(e){ return false; });
          $board.append(kachel);

          // fill array
          var tile = new Tile();
          board[y][x] = (tile);
        }
      }
    }
  }
  /* ================================================
   *    Tile Module
   * ===============================================*/

  function Tile()
  {
    var value = 0;
    var visible = false;

    return {
      value: value,
      visible: visible,
    }
  }

})(); // end of self executing function
