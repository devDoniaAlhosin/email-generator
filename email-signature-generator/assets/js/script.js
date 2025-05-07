jQuery(document).ready(function($) {
    const emailSignatureTemplate = `
<table class="signature-container" cellpadding="0" cellspacing="0" border="0" style="max-width: 420px; color: #888; border-radius: 12px; overflow: hidden;">
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td class="logo-container" align="center" valign="middle" style="padding-right: 20px;">
                        <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/bohemiangeeks-logo.webp" alt="Bohemian Geeks Logo" style="width: 100%;" />
                    </td>
                    <td class="data" width="66%" valign="top" style="padding-left: 20px; border-left: 4px solid #EB1C5F;">
                        <span style="font-size: 12px; color: #EB1C5F; font-weight: 400; text-transform: uppercase; letter-spacing: 4px;">Bohemian Geeks</span>
                        <p style="margin: 0; padding: 0; line-height: 1.2; color: #EB1C5F; font-size: 16px; font-weight: bold;">{FULL_NAME}</p>
                        <p style="margin: 0; padding: 0; line-height: 1.2; font-size: 14px; color: #888;">{JOB_TITLE}</p>
                        <p style="margin: 0; padding: 0; line-height: 1.2;"></p>
                        <p style="margin-top: 10px; font-size: 13px; line-height: 1; color: #b2b2b2;">First Settlement, New Cairo, Cairo Governorate, Egypt 11865</p>
                    </td>
                </tr>
            </table>

            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 20px 0 14px 0; height: 30px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                                <td width="150">
                                    <h2 style="color: #EB1C5F; font-weight: 600; font-size: 18px; letter-spacing: 1px; margin: 0;">Let's Connect</h2>
                                </td>
                                <td>
                                    <div style="margin-left: 20px; display: flex; justify-content: start; align-items: center;">
                                        <a href="https://www.linkedin.com/company/bohemian-geeks/" target="_blank" title="LinkedIn" style="margin-right: 10px;">
                                            <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/linkedin.webp" alt="LinkedIn" style="width: 16px; height: 16px; filter: grayscale(0.8);">
                                        </a>
                                        <a href="https://www.behance.net/bohemianstudio" target="_blank" title="Behance" style="margin-right: 10px;">
                                            <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/behance.webp" alt="Behance" style="width: 21px; height: 14px; filter: grayscale(0.8);">
                                        </a>
                                        <a href="https://www.instagram.com/bohemian_geeks/" target="_blank" title="Instagram" style="margin-right: 10px;">
                                            <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/instagram.webp" alt="Instagram" style="width: 16px; height: 16px; filter: grayscale(0.8);">
                                        </a>
                                        <a href="https://bohemiangeeks.com/" target="_blank" title="Website" style="margin-right: 10px;">
                                            <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/website.webp" alt="Website" style="width: 16px; height: 16px; filter: grayscale(0.8);">
                                        </a>
                                        <a href="tel:+201140004550" target="_blank" title="Call">
                                            <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/phone.webp" alt="Phone" style="width: 16px; height: 16px; filter: grayscale(0.8);">
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="margin-top: 18px; font-size: 12px; color: #888;">
                        © BohemianGeeks — Connecting Creative Minds
                        <div style="width: 85%; padding: 13px 0; border-top: 1px solid #b2b2b2; font-size: 12px; margin-top: 5px; color: #888;">
                            Disclaimer: The information provided on this site is for general informational purposes only and does not constitute professional advice.
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`;

    $('#esg-form').on('submit', function(e) {
        e.preventDefault();
        
        const fullName = $('#full_name').val();
        const jobTitle = $('#job_title').val();
        
        if (!fullName || !jobTitle) {
            alert('Please fill in all fields');
            return;
        }
        
        let signature = emailSignatureTemplate
            .replace('{FULL_NAME}', fullName)
            .replace('{JOB_TITLE}', jobTitle);
        
        $('#esg-signature').val(signature);
        $('#esg-result').show();
    });
    
    $('#esg-copy').on('click', function() {
        const signatureText = $('#esg-signature');
        signatureText.select();
        document.execCommand('copy');
        
        const originalText = $(this).text();
        $(this).text('Copied!');
        
        setTimeout(() => {
            $(this).text(originalText);
        }, 2000);
    });
}); 