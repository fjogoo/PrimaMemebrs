var main_panel_id="content";var first=true;var prev_cursor=false;var xhttp=null;var menu_pos=false;var loading=false;var blocked=false;var prev_block_id=false;var prev_top=false;var prev_number=false;var prev_height=false;var work_block_id=false;var work_top=false;var work_number=false;var work_height=false;var scripts_count=0;var panel_no_scroll=false;var on_post_error=null;var on_post_success=null;var after_panel_load=null;var additional_accept=null;var panel_destructor=null;var on_post_message=null;var last_request=new Array();$(document).ready(function(){try{if($.tooltip){$(".tooltip_area").tooltip({bodyHandler:function(){return $(this).children().filter("span").html()},showURL:false})}}catch(a){_sys_error("initialize tooltip","for testing_only",a)}});function menu_click(d,b,a,c){if(!loading){if(panel_destructor){panel_destructor();panel_destructor=null}addHash(d,b);loginFormHide();loading=true;start_load(d,b);start_request(a,getPagerParams(menuIdToHash("cursor_"+d+"_"+b)),c)}}function load_panel(a,c,b){if(!loading){loginFormHide();loading=true;block_panel();start_request(a,c,b)}}function load_message(a,f,d){f=f?f:{};if(f instanceof Array){var c={};for(key in f){if(typeof(f[key])!="function"){c[key]=f[key]}}f=c}save_request(a,f,d,"message");if(d&&!d.no){load_scrips(a,f,d);return}try{$("#error").hide();xhttp=$.ajax({type:"POST",url:a,data:f,success:parse_xml,error:load_error})}catch(b){_sys_error("load_message","AJAX call",b)}}function cancel_load_message(){xhttp.abort()}function load_scrips(a,d,c){try{for(k in c){scripts_count++}for(k in c){getScript(c[k],script_loaded(a,d,c))}}catch(b){_sys_error("load_scrips","load remote scripts",b)}}function script_loaded(a,c,b){if(--scripts_count==0){b=null;b=new Object();b.no=true;start_request(a,c,b)}}function start_request(a,f,d){f=f?f:{};if(f instanceof Array){var c={};for(key in f){if(typeof(f[key])!="function"){c[key]=f[key]}}f=c}if(!d||!d.no){save_request(a,f,d)}if(d&&!d.no){load_scrips(a,f,d);return}try{$("#error").hide();xhttp=$.ajax({type:"POST",url:a,data:f,success:load_success,error:load_error})}catch(b){_sys_error("start_request","AJAX call",b)}}function start_load(b,a){block_panel();moveSlideTab(b,a)}function moveSlideTab(e,c,d){if(typeof(e)=="string"&&typeof(c)=="undefined"&&typeof(d)=="undefined"){var b=hashToMenuId(e);d=e;e=b[0];c=b[1]}if(typeof(d)!="undefined"){document.location.hash="#"+d;if(!isset(window.tabLocation)){window.tabLocation={}}window.tabLocation.hashOld=d}if(typeof(e)=="undefined"||e==0||$("#top"+e).length==0){$("#a_block").css("display","none");if(prev_cursor){$(prev_cursor).css("visibility","hidden");var b=$(prev_cursor).parent().children()[1];$(b).removeClass("over")}first=true;return}if(typeof(c)=="undefined"){c=1}if(menu_pos==false){menu_pos=new Array();menu_pos.top=$(".line_shadow").offset().top}if(typeof(menu_pos["top"+e])=="undefined"){menu_pos["top"+e]=new Array();menu_pos["top"+e]["top"]=$("#top"+e).offset().top+176+129-menu_pos.top;menu_pos["top"+e]["height"]=$("#top"+e).height()+18}move_block(menu_pos["top"+e]["top"],menu_pos["top"+e]["height"],"top"+e,c)}function move_block(g,b,h,d){work_block_id=h;work_top=g;work_number=d;work_height=b;try{if(first){first=false;prev_block_id=work_block_id;prev_top=work_top;prev_number=work_number;prev_height=work_height;$("#a_block").css("top",g);$("#a_block").css("height",b);$("#a_block").css("display","block");$("#cursor_"+h.substr(3)+"_"+d).css("visibility","visible");var c=$("#cursor_"+h.substr(3)+"_"+d).parent().children()[1];$(c).addClass("over");prev_cursor="#cursor_"+h.substr(3)+"_"+d;return}$("#a_block").animate({top:g,height:b},500,"easein",function(){if(prev_cursor){$(prev_cursor).css("visibility","hidden");var e=$(prev_cursor).parent().children()[1];$(e).removeClass("over")}$("#cursor_"+h.substr(3)+"_"+d).css("visibility","visible");var e=$("#cursor_"+h.substr(3)+"_"+d).parent().children()[1];$(e).addClass("over");prev_cursor="#cursor_"+h.substr(3)+"_"+d})}catch(f){_sys_error("move_block","moving animation block",f)}}function cancel_load(){loading=false;xhttp.abort();unblock_panel();try{$("#a_block").css("top",prev_top);$("#a_block").css("height",prev_height);$("#a_block").css("display","block");$(prev_cursor).css("visibility","hidden");var b=$(prev_cursor).parent().children()[1];$(b).removeClass("over");$("#cursor_"+prev_block_id.substr(3)+"_"+prev_number).css("visibility","visible");b=$("#cursor_"+prev_block_id.substr(3)+"_"+prev_number).parent().children()[1];$(b).addClass("over");prev_cursor="#cursor_"+prev_block_id.substr(3)+"_"+prev_number}catch(c){_sys_error("cancel_load","moving back animation block",c)}}function load_error(a){loading=false;show_error(a);cancel_load()}function show_error(a){$("#error").fadeIn();$("#error_msg").html(a)}function load_success(a){loading=false;if($("status",a).text()=="authorize"){panel_no_scroll=true}unblock_panel();parse_xml(a)}function output_xml(a){if(a){try{a=a.replace(/#001;/g,"#");a=a.replace(/#002;/g,"<");a=a.replace(/#003;/g,">");a=a.replace(/#004;/g,"&");return a}catch(b){return""}}return""}function save_block_pos(){prev_block_id=work_block_id;prev_top=work_top;prev_number=work_number;prev_height=work_height}function redesign(){try{datePickerController.create();textareaResizer();correctPNG();initializeTooltips();add_fields_validator=new FormValidator();add_fields_validator.scan()}catch(a){_sys_error("tab.js>redesign","redesign",a.message)}}function get_additional_message(a){if(a&&a.length&&a[0].firstChild&&a[0].firstChild.nodeValue){a=a[0].firstChild.nodeValue;return output_xml(a)}return false}function prepare_content(a){if(!a){return false}var b="";for(k=0;k<a.length;k++){if(a[k]&&a[k].firstChild&&a[k].firstChild.nodeValue){b+=(a[k].firstChild.nodeValue)}}return output_xml(b)}function _get_element_value(a,b){var c=a.getElementsByTagName(b);if(c&&c.length){return c}return false}function parse_xml(data){try{if(typeof(data)=="string"){var startXml=data.toString().indexOf("<?xml version='1.0' encoding='UTF-8'?>");if(startXml!=0){if(startXml<0){log(data.toString());data=""}else{log(data.toString().substr(0,startXml));data=data.toString().substr(startXml)}}}var status=$("status",data).text();var additional=$("additional",data).text();additional=output_xml(additional);if($("langugage_data",data).length>0){eval("window.langugage_data="+$("langugage_data",data).text())}var debug_node=$("debug",data).text();if(typeof(log)=="function"&&debug_node){log(prepare_content(debug_node))}if(status){var content="";$("content",data).each(function(o){content+=$(this).text()});content=output_xml(content);try{switch(status){case"error":if(on_post_error){on_post_error(content);on_post_error=null;on_post_success=null}else{show_error(content)}break;case"message":if(on_post_message){if(!on_post_message(content)!=1){on_post_message=null}}break;case"authorize":if(loginFormShow){loginFormShow(content)}break;case"service":if(serviceFormShow){serviceFormShow(content)}break;case"output":try{if(on_post_success){if(on_post_success(content)!=1){on_post_success=null}}else{try{save_block_pos();try{$("#"+main_panel_id).html(content)}catch(e){_sys_error("tab.js>parse_xml","switch>output>insert_content",e.message)}redesign();try{if(after_panel_load){after_panel_load();after_panel_load=null}}catch(e){_sys_error("tab.js>parse_xml","switch>output>after_panel_load:"+after_panel_load,e.message)}try{if(additional_accept&&additional){additional_accept(additional);additional_accept=null}}catch(e){_sys_error("tab.js>parse_xml","switch>output>additional_accept",e.message)}}catch(e){_sys_error("tab.js>parse_xml","switch>output>insert",e.message)}}}catch(e){_sys_error("tab.js>parse_xml","switch>output",e.message)}try{if(window.after_redirect_message){displayMessageEx(window.after_redirect_message);window.after_redirect_message=false}}catch(e){alert("window.after_redirect_message: "+e.message)}try{if(window.after_redirect_error){displayMessageEx(window.after_redirect_error,true);window.after_redirect_error=false}}catch(e){alert("window.after_redirect_error: "+e.message)}break;default:alert("UNKNOWN response: "+status)}}catch(e){_sys_error("tab.js>parse_xml","switch",e.message)}}}catch(e){load_error("crash");_sys_error("parse_xml","parsing xml object",e.message)}}function block_panel(){blocked=true;$("#"+main_panel_id).block();$("#block_msg").css("opacity",0.5);$("input.loading_btn").css({backgroundImage:"url("+block_btn_img[1].src+")"})}function unblock_panel(){if(!blocked){return}blocked=false;try{$("#"+main_panel_id).unblock();if(typeof(panel_no_scroll)=="undefined"||panel_no_scroll==false){var a=$("#"+main_panel_id).offset().top;if($(document).scrollTop()>a){$.scrollTopEx(a)}}if(panel_no_scroll=="one"){panel_no_scroll=false}}catch(b){}}function _sys_error(e,d,f){printStackTrace();show_error(e+"   "+d+"   "+f)}function initializeTooltips(){$(".tooltip_area").tooltip({bodyHandler:function(){return $(this).children().filter("span:last").html()},showURL:false})}function save_request(a,d,c,b){last_request.url=a;last_request.params=d;last_request.js=c;last_request.type=b;last_request.blocked=blocked;last_request.panel_no_scroll=panel_no_scroll;last_request.on_post_error=on_post_error;last_request.on_post_success=on_post_success;last_request.after_panel_load=after_panel_load;last_request.additional_accept=additional_accept;last_request.panel_destructor=panel_destructor;last_request.on_post_message=on_post_message}function restore_request(){on_post_error=last_request.on_post_error;on_post_success=last_request.on_post_success;after_panel_load=last_request.after_panel_load;additional_accept=last_request.additional_accept;panel_destructor=last_request.panel_destructor;on_post_message=last_request.on_post_message;blocked=last_request.blocked;panel_no_scroll=last_request.panel_no_scroll;if(last_request.type=="message"){load_message(last_request.url,last_request.params,last_request.js)}else{start_request(last_request.url,last_request.params,last_request.js)}};