var lf_validator;var lf_login_text="";var lf_last_request=null;var is_login_page=false;function changeLanguage(){var b=base_url+"admin"+document.location.hash;var a=$("#language_selector").val();sendPost(b,{language:a})}var myHash={};function addHash(c,b){var a=$("img#cursor_"+c+"_"+b).next("a").attr("href");document.location.hash="#"+a.substr(a.indexOf("#")+1)}function myMainPageOnLoad(){menuHash();var a=document.location.hash.substr(1);hashParser(a);window.tabLocation={};window.tabLocation.hashOld="";window.tabLocation.hashCheck=function(){var b=document.location.hash.substr(1);if(window.tabLocation.hashOld!=b&&typeof(window.tabLocation.hashOnChange)=="function"){var c=window.tabLocation.hashOld;window.tabLocation.hashOld=b;window.tabLocation.hashOnChange(b,c)}};window.tabLocation.hashTimer=setInterval(testHashCheck,1000);window.tabLocation.hashOnChange=function(b,c){hashParser(b,c)};debugMenu();if($("#demo_timer").length>0){$("#demo_timer").timerAnimate()}if(isset(window.ht_sys_config_not_writable)){_sys_error(window.ht_sys_config_not_writable,"","")}}function testHashCheck(){window.tabLocation.hashCheck()}function redirectAndMessage(b,a){if(a){window.after_redirect_message=a}document.location.hash="#"+b;window.tabLocation.hashCheck()}function hashToMenuId(e){var c=$("a[href=#"+e+"]");if(c.length>0&&c.prev("img").length>0&&c.prev("img").attr("id")&&c.prev("img").attr("id").split("_").length>2){var b=c.prev("img").attr("id").split("_");var d=b.shift();return b}return false}function menuIdToHash(a){if($("#"+a).length>0&&$("#"+a).siblings("a").length>0){return $("#"+a).siblings("a").attr("href").substr(1)}return""}function menuHash(){$(".menu_containter").find("a").each(function(){var d=$(this).attr("href");d=d.substr(d.indexOf("#")+1);var e=$(this).prev().attr("id").split("_");myHash[d]=new Function("clickMenu("+e[1]+","+e[2]+");")});myHash.installed=new Function("ref","arr","devDlg('installed');");myHash.home=new Function("ref","arr","myPanelOnLoad=function(){};moveSlideTab(); load_panel(base_url+'admin',{'action':'home'});");myHash.change_password=new Function("ref","arr","load_panel(base_url+'admin_control/admin_edit/',{'action':'','id':0,'from_header':true},{'0':base_url+'js/admin/init.js'});");myHash.lang_manager=new Function("ref","var params = {'action':'','object_type':2,'id':1,'referer':ref,'template_name':'rrrrrrrrrrrrrrrrrr'};load_panel(base_url+'lang_manager/edit/',params,{'0':base_url+'js/admin/init.js'});");myHash.suspend_reasons=new Function("ref","document.location.hash='#suspend_reasons';load_panel(base_url + 'member/suspend_reasons_list',getPagerParams('suspend_reasons'),{1:base_url+'js/admin/member/common.js',2:base_url+'js/admin/member/approve.js',3:base_url+'js/admin/member/suspend.js',4:base_url+'js/admin/member/info.js',5:base_url+'js/admin/member/suspreason.js',6:base_url+'js/admin/global.js',7:base_url+'js/admin/member/unsuspend.js'});");myHash.transactions=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}document.location.hash='#'+arr.join('/')+'/transactions';var params = {action:''};load_panel(base_url+'statistic/transactions_stats/'+arr.pop()+'/', params, {'0':base_url+'js/admin/init.js'});");myHash.details=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));} myPanelDestructor(); var params = {action:''}; load_panel(base_url+'statistic/transaction_detailed/'+arr.pop()+'/', params, {'0':base_url+'js/admin/init.js'});");myHash.product_edit=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}document.location.hash='#'+arr.join('/')+'/product_edit';load_panel(base_url+'product/edit/'+arr.pop(), {},{a:base_url+'js/admin/product/edit.js','b':base_url+'js/admin/form_error.js', 'c':base_url+'js/admin/product/product_form.js','d':base_url+'js/admin/product/image_upload.js',    a1:base_url+'js/admin/member/common.js', a2:base_url+'js/admin/product/add.js', a3:base_url+'js/validation.js',a4:base_url+'js/admin/product/product_list.js', a5:base_url+'js/admin/product/product_form.js', a6:base_url+'js/admin/product/image_upload.js', 8:base_url+'js/admin/form_error.js'});");myHash.product_add=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}load_panel(base_url+'product/add',{},{a:base_url+'js/admin/product/edit.js','b':base_url+'js/admin/form_error.js','c':base_url+'js/admin/product/product_form.js','d':base_url+'js/admin/product/image_upload.js',    a1:base_url+'js/admin/member/common.js', a2:base_url+'js/admin/product/add.js', a3:base_url+'js/validation.js',a4:base_url+'js/admin/product/product_list.js', a5:base_url+'js/admin/product/product_form.js', a6:base_url+'js/admin/product/image_upload.js', 8:base_url+'js/admin/form_error.js'});");myHash.directory_edit=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));} on_post_error = function(response){directory_response_error(response)};additional_accept = function(response){if(typeof(directory_response_additional)=='udnefined' && directory_response_additional!=null){directory_response_additional(response);}else{window.directory_response_additional_cache=response;}};var params=getPagerParams();params['action']='';params['id'] = arr.pop();load_panel(base_url+'directories/dir_item', params, {'a':base_url+'js/admin/init.js','c':base_url+'js/jquery/jquery.treeview.pack.js'});");myHash.directory_add=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));} load_panel(base_url+'directories/dir_item',getPagerParams(),{1:base_url+'js/admin/init.js',2:base_url+'js/jquery-treeview/jquery.treeview.pack.js'});");var b="{1:base_url+'js/admin/member/common.js',2:base_url+'js/admin/member/list.js',3:base_url+'js/admin/member/edit/accnt_panel.js',4:base_url+'js/admin/member/edit/member_info_update.js',5:base_url+'js/admin/member/edit/change_pswd.js',6:base_url+'js/admin/member/edit/payments.js',7:base_url+'js/admin/member/edit/email_client.js',8:base_url+'js/admin/member/edit/email_history.js',9:base_url+'js/admin/member/edit/access_log.js',10:base_url+'js/admin/member/add.js',11:base_url+'js/admin/member/suspend.js',12:base_url+'js/admin/member/unsuspend.js',13:base_url+'js/admin/member/info.js',14:base_url+'js/admin/global.js',15:base_url+'js/admin/member/approve.js',16:base_url+'js/admin/member/confirm.js',17:base_url+'js/admin/member/expired.js',18:base_url+'js/admin/member/edit/transactions.js'}";var c="{1:base_url+'js/admin/global.js', 2:base_url+'js/admin/newsletter/common.js', 3:base_url+'js/admin/newsletter/template_list.js', 4:base_url+'js/admin/newsletter/template_add.js', 5:base_url+'js/admin/newsletter/template_edit.js',6:base_url+'js/admin/newsletter/history.js'}";var a="{1:base_url+'js/admin/coupons/common.js',2:base_url+'js/admin/coupons/groups_list.js',3:base_url+'js/admin/coupons/edit.js',4:base_url+'js/admin/coupons/coupons_list.js',5:base_url+'js/admin/global.js',6:base_url+'js/admin/coupons/add.js'}";myHash.info=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}switch(arr[0]){case 'approve_suspend':var back_link='load_unapproved_mbr_list'; break; case 'activate_suspend':var back_link='load_unconfirmed_mbr_list'; break; case 'unsuspend_delete':var back_link='load_suspended_mbr_list'; break; case 'member_expired':var back_link='load_expired_mbr_list'; break; case 'coupons_statistics':var back_link='coupons_statistic'; break; case 'email_history':load_panel(base_url + 'newsletter/history_view',{id: arr.pop()},"+c+"); return; default: var back_link='load_member_list'; } load_panel(base_url + 'member/info',{'id': arr.pop(), 'back_link': back_link},"+b+");");myHash.edit=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}var item_id=parseInt(arr.pop());item_id=isNaN(item_id)?0:item_id;switch(arr[0]){case 'member_list':load_panel(base_url + 'member/edit_member_info',{id: item_id, accnt_panel: 'show_panel'},"+b+"); break; case 'email_templates':load_panel(base_url + 'newsletter/template_edit',{id: item_id},"+c+"); break; case 'coupon_groups':load_panel(base_url + 'coupons/edit',{id: item_id},"+a+"); break; case 'system_settings': var id=item_id; if(isset(window.nsconfig) && isset(window.nsconfig.paymentSystems) && isset(window.nsconfig.paymentSystems[id])  && window.nsconfig.paymentSystems[id]!=''){load_panel(base_url+window.nsconfig.paymentSystems[id]+'/configure',{'action':'','id':id},{'0':base_url+'js/admin/init.js'});} break; case 'additional_fields':if(item_id<=0){return;};load_panel(base_url+'config/add_field_edit',{'id':item_id},{'0':base_url+'js/admin/init.js'}); break; case 'administrator_list':load_panel(base_url+'admin_control/admin_edit',{'action':'','id':item_id},{'0':base_url+'js/admin/init.js'}); break; case 'level_list':load_panel(base_url+'admin_control/levels_edit',{'action':'','id':item_id},{'0':base_url+'js/admin/init.js'}); break; }");myHash.add=new Function("ref","arr","var a=hashToMenuId(arr[0]);if(a!==false){moveSlideTab(parseInt(a[0]),parseInt(a[1]));}switch(arr[0]){case 'email_templates':load_panel(base_url +'newsletter/template_add',{},"+c+"); break; case 'additional_fields':load_panel(base_url+'config/add_fields_add',{},{'0':base_url+'js/admin/init.js'}); break;case 'level_list':load_panel(base_url+'admin_control/levels_edit',{'action':''},{'0':base_url+'js/admin/init.js'}); break; }");myHash.lang_edit=function(h,d){var e=hashToMenuId(d[0]);if(e!==false){moveSlideTab(parseInt(e[0]),parseInt(e[1]))}var j=d.pop();var g=d.pop();var f=parseInt(g);if(isNaN(f)||f<=0){_sys_error("Incorrect location!","","");return}var i=d.join("/");load_panel(base_url+"lang_manager/edit/",{action:"",object_type:g,id:j,referer:i,template_name:j},{"0":base_url+"js/admin/init.js"})};myHash.browser=function(){alert(print_r($.browser,true))};myHash.debug=debugModeEnable}function hashParser(a,c){var b=a.split("/");if(b.length>1){a=b.pop()}if(typeof(myHash[a])=="function"){myPanelOnLoad=function(){};myHash[a](c,b)}}function clickMenu(c,b){var a=$("img#cursor_"+c+"_"+b).next("a");if($.browser.msie||$.browser.opera){a[0].click()}else{a.click()}}function adminChangePassword(){var a={action:""};a.id=0;a.from_header=true;moveSlideTab(undefined,undefined,"change_password");load_panel(base_url+"admin_control/admin_edit/",a,{"0":base_url+"js/admin/init.js"})}function set_user_info(b,a){if(typeof(b)!="undefined"&&b&&b!=""){$("#user_info_username").html(b)}if(typeof(a)!="undefined"&&a&&a!=""){$("#user_info_last_login").html(a)}}function load_home(){myPanelOnLoad=function(){};moveSlideTab();document.location.hash="#home";window.tabLocation.hashOld="home";load_panel(base_url+"admin",{action:"home"})}if($.browser.opera){if($("input[name=lf_login]").length>0){loginPageInit()}}function loginPageInit(){is_login_page=true;lf_validator=new FormValidator();lf_validator.add("lf_login","check_max_len(val, 32)&&check_admin_login(val)&&val");lf_validator.items.lf_login.checkOnEvent("keyup");lf_validator.items.lf_login.checkOnEvent("change");lf_validator.add("lf_pwd","check_max_len(val, 64)&&val");lf_validator.items.lf_pwd.checkOnEvent("keyup");lf_validator.items.lf_pwd.checkOnEvent("change");if($("#lf_capcha_code").length>0){lf_validator.add("lf_capcha_code","val")}lf_validator.submitter=loginFormSend;if($("#emsg_lf_ip_blocked:visible").length>0){var a=$("#emsg_lf_ip_blocked").html();a=a.replace(/([0-9]{2,}:[0-9]{2}:[0-9]{2})/,"<span id='lf_ip_block_period'>$1</span>");$("#emsg_lf_ip_blocked").html(a);if($("#lf_ip_block_period").length>0){loginPageBlock();$("#lf_ip_block_period").timerAnimate(function(){loginPageBlock(false);displayMessageEx(false,true)})}}if($("#demo_timer").length>0){$("#demo_timer").timerAnimate()}}function loginPageBlock(a){a=(isset(a)&&a===false)?false:true;$("input[name=lf_login]").parents("table").find("input").each(function(){$(this).attr("disabled",a)})}function loginPageSendToServer(b){var a=base_url+"admin";lf_login_text=lf_validator.items.lf_login.value;b.is_page="true";if(document.location.hash!=""){b.location=document.location.hash.substr(1)}sendPost(a,b)}function loginFormShow(b){b=(!isset(b)||b!==true)?false:true;is_login_page=false;$("#"+main_panel_id).block();$(".bod").hide();if($("#login_form").length==0){var a=$("#login_form_temp").clone();a.attr("id","login_form");a.find("input[@name=lf_login_temp]").attr("name","lf_login");a.find("label[@for=lf_login_temp]").attr("for","lf_login");a.find("input[@name=lf_pwd_temp]").attr("name","lf_pwd");a.find("label[@for=lf_pwd_temp]").attr("for","lf_pwd");a.find("tr#lf_capcha_row_temp").attr("id","lf_capcha_row");a.find("span#lf_ip_block_period_temp").attr("id","lf_ip_block_period");a.find("span#lf_ip_ban_reason_temp").attr("id","lf_ip_ban_reason");a.find("input[@name=lf_capcha_code_temp]").attr("name","lf_capcha_code");a.find("label[@for=lf_capcha_code_temp]").attr("for","lf_capcha_code");a.find(".lf_error,.lf_message").each(function(c,e){var d=$(e).attr("id");$(e).attr("id",d.substr(0,d.lastIndexOf("_temp")))});a.prependTo("#"+main_panel_id)}$("#lf_login_pwd_error").hide();$("#login_form").show();$("#login_form").css("z-index","10005");lf_validator=new FormValidator();if(b){$("#lf_capcha_row").find("img").attr("src",base_url+"capcha/draw/"+Math.random());lf_validator.add("lf_capcha_code","val",$("#lf_capcha_code_error").html());lf_validator.items.lf_capcha_code.checkOnEvent("keyup");lf_validator.items.lf_capcha_code.checkOnEvent("change");$("#lf_capcha_row").show()}lf_validator.add("lf_login","check_max_len(val, 64)&&check_admin_login(val)&&val",$("#lf_login_error").html());lf_validator.items.lf_login.checkOnEvent("keyup");lf_validator.items.lf_login.checkOnEvent("change");if(lf_login_text!=""){lf_validator.items.lf_login.setValue(lf_login_text)}lf_validator.add("lf_pwd","check_max_len(val, 64)&&val",$("#lf_pwd_error").html());lf_validator.items.lf_pwd.checkOnEvent("keyup");lf_validator.items.lf_pwd.checkOnEvent("change");lf_validator.submitter=loginFormSend}function reloadCapcha(a){$(a).attr("src",base_url+"capcha/draw/"+Math.random())}function loginFormHide(){$("#"+main_panel_id).unblock();$("#login_form").remove();lf_validator=null}function loginFormSend(){if(lf_validator.checkAll()){var b={action:"login"};var a=lf_validator.getItems();for(key in a){if(typeof(a[key])!="function"){b[key]=a[key]}}if(is_login_page){loginPageSendToServer(b)}else{loginFormSendToServer(b)}}}function loginFormRemind(){if(lf_validator.items.lf_login.check()){var a={action:"remind"};a.lf_login=lf_validator.items.lf_login.value;if(is_login_page){loginPageSendToServer(a)}else{loginFormSendToServer(a)}}}function loginFormSendToServer(b){var a=base_url+"admin/";on_post_success=login_success;on_post_error=login_error;lf_login_text=lf_validator.items.lf_login.value;loginFormHide();if(lf_last_request==null){lf_last_request=new Array();for(key in last_request){lf_last_request[key]=last_request[key]}}load_panel(a+"login/",b);if(lf_last_request.blocked){blocked=false}}function login_success(c){var a=getTempVarsSet(false,c);if(a.login!="true"){if(lf_last_request.blocked){$("#"+main_panel_id).unblock()}var b=(isset(a.show_capcha)&&a.show_capcha=="1")?true:false;loginFormShow(b);$("#lf_ip_block_period").html(isset(a.block_period)?a.block_period:"");if(isset(a.block_period)){loginPageBlock();$("#lf_ip_block_period").html(a.block_period);$("#lf_ip_block_period").timerAnimate(function(){loginPageBlock(false);lfHideError()})}if(isset(a.ban_reason)){$("#lf_ip_ban_reason").html(a.ban_reason)}$("#"+a.error).show();lf_validator.setOnCheck(lfHideError)}else{for(key in lf_last_request){last_request[key]=lf_last_request[key]}lf_last_request=null;set_user_info(a.username,a.last_login);restore_request()}return 1}function lfHideError(){$(".lf_error").hide();$(".lf_message").hide();lf_validator.setOnCheck()}function login_error(a){alert(a)};