!function(t,n,o){var a,e="incom_wrapper",i="#"+e,c="comments-and-form",r="#"+c,u="data-incom",s=u+"-comment",f="incom-active",l="."+f,d="incom-bubble",p="."+d,v=d+"-style",m=d+"-static",h=d+"-active",b=d+"-link",g="incom-comments-wrapper",w="."+g,k="incom-cancel",C="."+k,T=r+" .comment",y="data_incom";t.init=function(t){x(t),B()};var x=function(t){a=n.extend({selectors:"p",countStatic:!0,defaultBubbleText:"+",position:"left",background:"white"},t)},B=function(){0===n(i).length&&n('<div id="'+e+'"></div>').appendTo(n("body")),D()},D=function(){var t=R(a.selectors);n(t).each(function(o){n(t[o]).each(function(t){var o=n(this);N(t,o),O(o)})})},N=function(t,n){var o=n.prop("tagName").substr(0,1);if(!n.attr(u)){var a=o+t;n.attr(u,a)}},O=function(t){var o=S(t),a=_(t),e=n("<a/>",{href:"","class":b}).text(o).wrap(a).parent().appendTo(i);I(e),K(t,e),Q(t,e),q(t,e)},S=function(t){var n;return n=A(t)?W(t):a.defaultBubbleText},W=function(t){var o=t.attr(u),a="["+s+"="+o+"]",e=n(a).length;return e},_=function(t){var n='<div class="'+j(t)+'" />';return n},j=function(t){var n=d;return A(t)&&a.countStatic?n=d+" "+v+" "+m:A(t)&&(n=d+" "+v),n},A=function(t){var o=W(t);return n.isNumeric(o)&&o>0?!0:!1},I=function(t){t.hasClass(m)&&t.css("display","block")},Q=function(t,n){n.hasClass(m)||t.add(n).hover(function(){n.stop(!0,!0).fadeIn()},function(){n.stop(!0,!0).fadeOut(2e3)})},q=function(t,n){n.on("click",function(o){o.preventDefault(),z(),t.addClass(f),P(),n.addClass(h),E(n)})},z=function(){var t=n(l);0!==t.length&&(t.removeClass(f),0===t.prop("class").length&&t.removeAttr("class"))},E=function(t){var o=n("<div/>",{"class":g}).appendTo(i).css("background-color",a.background);H(),F(),K(t,o),L(),M()},F=function(){n(r).appendTo(w).show(),G()},G=function(){var t=n("<input>").attr("type","hidden").attr("name",y).val(J);n(r+" .form-submit").append(n(t))},H=function(){var t="["+s+"="+J()+"]";n(T).hide(),n(T+t).show()},J=function(){var t=n(l).attr(u);return t},K=function(t,n){var o=t.offset();n.css({top:o.top,left:"right"===a.position?o.left+t.outerWidth():o.left-n.outerWidth()})},L=function(){n("html").click(function(t){0===n(t.target).parents(i).length&&P(!0)})},M=function(){n(C).click(function(t){t.preventDefault(),P(!0)})},P=function(t){var o=n(p),a=n(w);n(r).appendTo(i).hide(),o.hasClass(h)&&(o.removeClass(h),t?a.fadeOut("fast",function(){n(this).remove()}):a.remove())},R=function(t){var n=t.split(",");return n}}(window.incom=window.incom||{},jQuery);