<?php
/*
@package agency_underscores
======================
===== ADMIN PAGE =====
======================
*/

function agency_add_admin_page(){
  add_menu_page('Agency Theme Options', 'Theme Options', 'manage_options', 'agency_options','agency_theme_options_page',110);

  add_submenu_page('agency_options', 'General Settings','General','manage_options','agency_options','agency_theme_options_page');
}
add_action('admin_menu', 'agency_add_admin_page');

function agency_theme_options_page() {
  echo "Hi";
}
