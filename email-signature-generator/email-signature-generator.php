<?php
/**
 * Plugin Name: Email Signature Generator
 * Plugin URI: https://bohemiangeeks.com/
 * Description: A WordPress plugin that generates professional email signatures using a shortcode.
 * Version: 1.0.0
 * Author: Bohemian Geeks
 * Author URI: https://bohemiangeeks.com/
 * Text Domain: email-signature-generator
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Plugin class
class Email_Signature_Generator {
    public function __construct() {
        add_shortcode('email_signature_generator', array($this, 'render_form'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }

    public function enqueue_scripts() {
        // Enqueue Google Fonts
        wp_enqueue_style(
            'poppins-font',
            'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
            array(),
            null
        );

        wp_enqueue_style(
            'email-signature-generator',
            plugin_dir_url(__FILE__) . 'assets/css/style.css',
            array('poppins-font'),
            '1.0.0'
        );

        wp_enqueue_script(
            'email-signature-generator',
            plugin_dir_url(__FILE__) . 'assets/js/script.js',
            array('jquery'),
            '1.0.0',
            true
        );

        wp_localize_script('email-signature-generator', 'esgAjax', array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('email_signature_nonce')
        ));
    }

    public function render_form() {
        ob_start();
        ?>
        <div class="esg-container">
            <form id="esg-form" class="esg-form">
                <div class="esg-form-group">
                    <label for="full_name">Full Name:</label>
                    <input type="text" id="full_name" name="full_name" required>
                </div>
                <div class="esg-form-group">
                    <label for="job_title">Job Title:</label>
                    <input type="text" id="job_title" name="job_title" required>
                </div>
                <button type="submit" class="esg-submit">Generate Signature</button>
            </form>
            <div id="esg-result" class="esg-result" style="display: none;">
                <h3>Your Email Signature:</h3>
                <textarea id="esg-signature" readonly></textarea>
                <button id="esg-copy" class="esg-copy">Copy to Clipboard</button>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}

// Initialize the plugin
new Email_Signature_Generator(); 