var validator;var selector;PanelInit();function myPanelOnLoad(){try{validator=new FormValidator();selector=new multiSelector();validator.add("subject","check_max_len(val, 100)&&val");validator.items.subject.checkOnEvent("keyup");validator.add("message","check_max_len(val, 5000)&&val");validator.items.message.checkOnEvent("keyup");validator.checkAll()}catch(a){alert("myTabOnLoad: "+a.message);_sys_error("Error:","FAIL",a)}}function myPanelDestructor(){validator=null;selector=null}function myOnSave(h,b,f){try{var c=base_url+"config/";if(b){var g={action:"cancel"};g.id=h;if(f=="reset"){if(f=="reset"){if(confirm(temp_vars_set.reset_text)){g.action="default";load_panel(c+"edit_sys_emails/",g,{"0":base_url+"js/admin/config/edit_sys_template.js"})}}}else{if(confirm(temp_vars_set.cancelText)){load_panel(c+"edit_sys_emails/",g,{"0":base_url+"js/admin/config/sys_emails.js"})}}}else{displayMessageEx();if(!validator.checkAll()){displayMessageEx("validation_fail",true);validator.setOnCheck(errorBoxControl)}else{var g={action:"save"};var a=validator.getItems();a.id=h;for(key in a){if(typeof(a[key])!="function"){g[key]=a[key]}}if(f=="save"){if(confirm(temp_vars_set.save_default_text)){g.action="save_default"}else{return}}on_post_error=save_error;additional_accept=after_save;load_panel(c+"edit_sys_emails/",g,{"0":base_url+"js/admin/config/sys_emails.js"})}}}catch(d){alert("global_save: "+d.message);_sys_error("Error:","FAIL",d)}}function myOnAdd(){insertAtCaret($("[@name=message]").get(0),$("#constants").val());validator.items.message.check()}function after_save(b){var a=getTempVarsSet(false,b);displayMessageEx(a)}function save_error(b){var a=getTempVarsSet(false,b);displayMessageEx(a,true)}function errorBoxControl(){try{var b=false;for(key in validator.items){if(typeof(validator.items[key])!="function"){b=validator.items[key].error.is_error?true:b}}if(!b){displayMessageEx(false,true);validator.setOnCheck()}}catch(a){alert("errorBoxControl: "+a.message)}};