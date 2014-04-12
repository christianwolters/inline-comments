/*
 * Inline Comments
 * by Kevin Weber
 */

(function( incom, $, undefined ) {

  var o;

  /*
   * Public methods
   */

  incom.init = function( options ) {
    setOptions( options );
    initCommentsWrapper();
    initSelectElements();
  };

  /*
   * Private methods
   */

  var setOptions = function( options ) {
    // Override defaults
    o = $.extend( {
        selectors: 'p',
        // identifier: 'disqussion',
        // displayCount: true,
        // highlighted: false,
        position: 'left',
        // background: 'white',
        // maxWidth: 9999,
      },
    options);
  };

  /* 
   * This wrapper contains comment bubbles
   */
  var initCommentsWrapper = function() {
    if ( $( '#incom_wrapper' ).length === 0 ) {
      $( '<div id="incom_wrapper"></div>' ).appendTo( $('body') );
    }
    // if ( $( '#incom_thread' ).length === 0 ) {
    //   $( '<div id="incom_thread"></div>' ).appendTo( '#incom_wrapper' );
    // }
  };

  /* 
   * Select elements and increase counter per element type (instead of using one counter for all elements independent of their types).
   */
  var initSelectElements = function() {
    var selectors = splitSelectors( o.selectors );

    $( selectors ).each( function(j) {

      $( selectors[j] ).each( function(i) {
        var $element = $( this );

        addAtt( i, $element );
        addBubble( $element );
      });

    });
  };

  var addAtt = function( i, element ) {
    // Use the first letter of the element's name as identifier
    var identifier = element.prop('tagName').substr(0,1);

    // If element has no attribute 'data-incom', add it
    if ( !element.attr( 'data-incom') ) {
      var attProp = identifier + i;
      element.attr( 'data-incom', attProp );
    }
  };

  var addBubble = function( element ) {
    var $offset = element.offset();
    var $bubble = $('<a/>',
              {
                  href: '',
                  'class': 'incom-bubble-link',
              })
      .text('+')
      .wrap('<div class="incom-bubble" />')
      .parent()
      .appendTo('#incom_wrapper');

      // Position bubble
      $bubble.css({
        'top': $offset.top,
        'left': o.position === 'right' ? $offset.left + element.outerWidth() : $offset.left - $bubble.outerWidth()
      });

    handleHover( element, $bubble );
    handleClickBubble( $bubble );

  };

  /* 
   * This will happen when user hovers a text element or bubble
   */
  var handleHover = function ( element, bubble ) {
    // Handle hover (for both, "elements" and $bubble)
    element.add(bubble).hover(function() {
      bubble.stop( true, true ).fadeIn();
    }, function() {
      bubble.stop( true, true ).fadeOut( 2000 );
    });
  };

  /* 
   * This will happen when user clicks on bubble
   */
  var handleClickBubble = function ( bubble ) {
    $( document ).on( 'click', bubble, function(e) {
      e.preventDefault();
    });
  };

  /*
   * Split selectors
   * @return array
   */
  var splitSelectors = function( selectors ) {
    var splitSelectors = selectors.split(',');
    return splitSelectors;
  };

}( window.incom = window.incom || {}, jQuery ));
