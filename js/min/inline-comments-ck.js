!function(n,t,o){var i;n.init=function(n){e(n),c(),a()};var e=function(n){i=t.extend({selectors:"p",position:"left"},n)},c=function(){0===t("#incom_wrapper").length&&t('<div id="incom_wrapper"></div>').appendTo(t("body"))},a=function(){var n=d(i.selectors);t(n).each(function(o){t(n[o]).each(function(n){var o=t(this);r(n,o),f(o)})})},r=function(n,t){var o=t.prop("tagName").substr(0,1);if(!t.attr("data-incom")){var i=o+n;t.attr("data-incom",i)}},f=function(n){var o=n.offset(),e=t("<a/>",{href:"","class":"incom-bubble-link"}).text("+").wrap('<div class="incom-bubble" />').parent().appendTo("#incom_wrapper");e.css({top:o.top,left:"right"===i.position?o.left+n.outerWidth():o.left-e.outerWidth()}),u(n,e),p(e)},u=function(n,t){n.add(t).hover(function(){t.stop(!0,!0).fadeIn()},function(){t.stop(!0,!0).fadeOut(2e3)})},p=function(n){t(document).on("click",n,function(n){n.preventDefault()})},d=function(n){var t=n.split(",");return t}}(window.incom=window.incom||{},jQuery);