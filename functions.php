<?php
function my_theme_enqueue_styles() { 
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/scripts.js', array( 'jquery' ), '1.0.10' , true );


// Customize login-page
function my_custom_login() {
    echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo('stylesheet_directory') . '/login/custom-login-style.css" />';
}
add_action('login_head', 'my_custom_login');

//Change the Login Logo URL
function custom_login_logo_url() {
    return get_bloginfo( 'url' );
}
add_filter( 'login_headertext', 'custom_login_logo_url' );

function custom_login_logo_url_title() {
    return 'Megabite';
}
add_filter( 'login_headertext', 'custom_login_logo_url_title' );

// ENDRE LOGIN MELDING for å ikke utgi for mye informasjon
function custom_wordpress_error_message(){
    return 'Wrong username or password, please try again';
}
add_filter( 'login_errors', 'custom_wordpress_error_message' );

//Remove the Login Page Shake
function custom_login_head() {
    remove_action('login_head', 'wp_shake_js', 12);
}
add_action('login_head', 'custom_login_head');


//Remember me pre-checked
function default_rememberme_checked() {
    echo "<script>document.getElementById('rememberme').checked = true;</script>";
}
add_filter( 'login_footer', 'default_rememberme_checked' );

add_filter( 'login_footer', 'login_footer_html' );
function login_footer_html() {
    echo '<div class="login-footer-holder-header">';
    echo 'Support and assistance:';
    echo '</div>';
    echo '<div class="login-footer-holder">';
    echo '<div class="twoCol col1">';
    echo '<a href="https://www.megabite.no/kontakt/stavanger"><!--img src="' . get_bloginfo('stylesheet_directory') . '/login/icon-support.png"><br /--><span>Megabite Stavanger</span></a>';
    echo '</div>';
    echo '<div class="twoCol col2">';
    echo '<a href="https://www.megabite.no/kontakt/reklamebyrå-egersund-dalane"><!--img src="' . get_bloginfo('stylesheet_directory') . '/login/icon-support.png"><br /--><span>Megabite Jæren & Dalane</span></a>';
    echo '</div>';
    echo '</div>';
}