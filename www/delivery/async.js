(function(d,c){var a="<?php echo $etag; ?>";c.reviveAsync=c.reviveAsync||{};if(!c.reviveAsync.hasOwnProperty(a)){var f=c.reviveAsync[a]={id:Object.keys(c.reviveAsync).length,start:function(){var e=function(){try{if(!f.done){d.removeEventListener("DOMContentLoaded",e,false);c.removeEventListener("load",e,false);f.done=true;f.apply(f.detect())}}catch(g){console.log(g)}};if(d.readyState==="complete"){setTimeout(e)}else{d.addEventListener("DOMContentLoaded",e,false);c.addEventListener("load",e,false)}},ajax:function(e,g){var h=new XMLHttpRequest();h.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){f.spc(JSON.parse(this.responseText))}}};h.open("GET",e+"?"+f.encode(g).join("&"),true);h.withCredentials=true;h.send()},encode:function(m,n){var e=[],h,i;for(h in m){if(m.hasOwnProperty(h)){var l=n?n+"["+h+"]":h;if((/string|number|boolean/).test(typeof m[h])){e.push(encodeURIComponent(l)+"="+encodeURIComponent(m[h]))}else{var g=f.encode(m[h],l);for(i in g){e.push(g[i])}}}}return e},apply:function(g){if(g.zones.length){var e=d.location.protocol=="http:"?"<?php echo MAX_commonConstructDeliveryUrl('asyncspc.php'); ?>":"<?php echo MAX_commonConstructSecureDeliveryUrl('asyncspc.php'); ?>";g.zones=g.zones.join("|");g.loc=d.location.href;if(d.referrer){g.referer=d.referrer}f.ajax(e,g)}},detect:function(){var h={"block-campaign":"blockcampaign","block-banner":"block"};var l=d.querySelectorAll("ins[data-revive-id='"+a+"']");var k={zones:[],prefix:"revive-"+f.id+"-"};for(var e=0;e<l.length;e++){var j=l[e];if(j.hasAttribute("data-revive-zone-id")){k.zones[e]=j.getAttribute("data-revive-zone-id");j.id=k.prefix+e;for(var g in h){if(h.hasOwnProperty(g)){if(j.hasAttribute("data-revive-"+g)&&!k[g]){k[h[g]]=j.getAttribute("data-revive-"+g)}}}}}return k},createFrame:function(h){var e=d.createElement("IFRAME"),g=e.style;e.scrolling="no";e.frameBorder=0;e.width=h.width>0?h.width:0;e.height=h.height>0?h.height:0;g.border=0;g.overflow="hidden";return e},loadFrame:function(g,e){var h=g.contentDocument||g.contentWindow.document;h.open();h.writeln("<!DOCTYPE html>");h.writeln("<html>");h.writeln('<head><base target="_top"></head>');h.writeln('<body border="0" margin="0" style="margin: 0; padding: 0">');h.writeln(e);h.writeln("</body>");h.writeln("</html>");h.close()},spc:function(k){for(var e in k){if(k.hasOwnProperty(e)){var o=k[e];var n=d.getElementById(e);if(n){var m=d.createElement("INS");if(o.iframeFriendly){var l=f.createFrame(o);m.appendChild(l);n.parentNode.replaceChild(m,n);f.loadFrame(l,o.html)}else{m.innerHTML=o.html;var g=m.getElementsByTagName("SCRIPT");for(var l=0;l<g.length;l++){var q=document.createElement("SCRIPT");var p=g[l].attributes;for(var h=0;h<p.length;h++){q[p[h].nodeName]=p[h].nodeValue}if(g[l].innerHTML){q.text=g[l].innerHTML}m.replaceChild(q,g[l])}n.parentNode.replaceChild(m,n)}}}}}};try{f.start()}catch(b){console.log(b)}}})(document,window);