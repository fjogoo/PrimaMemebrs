function correctPNG(){if(!/MSIE (5\.5|6).+Win/.test(navigator.userAgent)){return}for(var g=0;g<document.images.length;g++){var d=document.images[g];var f=d.src.toUpperCase();if(f.substring(f.length-3,f.length)=="PNG"){var b=(d.id)?"id='"+d.id+"' ":"";var e=(d.className)?"class='"+d.className+"' ":"";var h=(d.title)?"title='"+d.title+"' ":"title='"+d.alt+"' ";var c="display:inline-block;"+d.style.cssText;if(d.align=="left"){c="float:left;"+c}if(d.align=="right"){c="float:right;"+c}if(d.parentElement.href){c="cursor:hand;"+c}var a="<span "+b+e+h+' style="width:'+d.width+"px; height:"+d.height+"px;"+c+";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+d.src+"', sizingMethod='scale');\"></span>";d.outerHTML=a;g=g-1}}}if($.browser.msie){window.attachEvent("onload",correctPNG)}function fixPNG(a){if(/MSIE (5\.5|6).+Win/.test(navigator.userAgent)){var b;if(a.tagName=="IMG"){if(/\.png$/.test(a.src)){b=a.src}}else{b=a.currentStyle.backgroundImage.match(/url\("(.+\.png)"\)/i);if(b){b=b[1];a.runtimeStyle.backgroundImage="none"}}if(b){a.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b+"',sizingMethod='scale')"}}};