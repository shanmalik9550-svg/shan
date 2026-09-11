/* ==========================================================================
   24x7 CUSTOMER SUPPORT - MAIN JAVASCRIPT LOGIC
   Owner: Harender Sharma | Miyapur, Hyderabad
   Toll-Free: 1800-202-6208
   Form Key: 39b83002-b632-4327-b3c9-bdc5d4508744
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const WHATSAPP_PHONE = '919599339483';
  const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

  /* ------------------------------------------------------------------------
     1. MOBILE NAVIGATION DRAWER TOGGLE
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav && !menuToggle.dataset.bound) {
    menuToggle.dataset.bound = 'true';
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. MAIN BOOKING FORM SUBMISSION (EMAIL NOTIFICATION + WHATSAPP REDIRECT)
     ------------------------------------------------------------------------ */
  const mainForm = document.getElementById('bookingForm');

  if (mainForm && !mainForm.dataset.bound) {
    mainForm.dataset.bound = 'true';

    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Prevent duplicate double submissions
      if (mainForm.dataset.submitting === 'true') {
        console.warn('Form submission already in progress. Duplicate prevented.');
        return;
      }
      mainForm.dataset.submitting = 'true';

      const submitBtn = mainForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      const formData = new FormData(mainForm);
      const name = formData.get('name') || '';
      const mobile = formData.get('mobile') || '';
      const product = formData.get('product') || 'Appliance Service';
      const age = formData.get('age') || 'N/A';
      const pincode = formData.get('pincode') || 'N/A';
      const city = formData.get('city') || 'N/A';
      const address = formData.get('address') || 'N/A';
      const message = formData.get('message') || '';

      // 1. Send Email Notification ONCE asynchronously via Web3Forms API
      fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formData
      }).then(res => res.json())
        .then(data => console.log('Email Notification Sent:', data))
        .catch(err => console.error('Email Notification Error:', err))
        .finally(() => {
          setTimeout(() => {
            mainForm.dataset.submitting = 'false';
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = '1';
            }
          }, 3000);
        });

      // 2. Construct WhatsApp Message text
      const waText = `*New 24x7 Service Booking Request*%0A` +
                     `-----------------------------------%0A` +
                     `*Customer Name:* ${encodeURIComponent(name)}%0A` +
                     `*Mobile:* ${encodeURIComponent(mobile)}%0A` +
                     `*Product:* ${encodeURIComponent(product)}%0A` +
                     `*Product Age:* ${encodeURIComponent(age)}%0A` +
                     `*Location:* ${encodeURIComponent(city)} (PIN: ${encodeURIComponent(pincode)})%0A` +
                     `*Full Address:* ${encodeURIComponent(address)}%0A` +
                     `*Problem Details:* ${encodeURIComponent(message)}%0A` +
                     `-----------------------------------%0A` +
                     `_Please confirm technician dispatch._`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;

      // 3. Open WhatsApp in new tab / redirect
      window.open(whatsappUrl, '_blank');
      mainForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     3. WHATSAPP POPUP MODAL LOGIC (EMAIL NOTIFICATION + WHATSAPP REDIRECT)
     ------------------------------------------------------------------------ */
  const inquiryModal = document.getElementById('inquiryModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const whatsappForm = document.getElementById('whatsappForm');

  if (modalCloseBtn && inquiryModal && !modalCloseBtn.dataset.bound) {
    modalCloseBtn.dataset.bound = 'true';
    modalCloseBtn.addEventListener('click', () => {
      inquiryModal.classList.remove('active');
    });

    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) {
        inquiryModal.classList.remove('active');
      }
    });
  }

  if (whatsappForm && !whatsappForm.dataset.bound) {
    whatsappForm.dataset.bound = 'true';

    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (whatsappForm.dataset.submitting === 'true') {
        console.warn('Modal form submission already in progress. Duplicate prevented.');
        return;
      }
      whatsappForm.dataset.submitting = 'true';

      const submitBtn = whatsappForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      const formData = new FormData(whatsappForm);
      const fullName = formData.get('name') || document.getElementById('fullName')?.value || '';
      const phoneNumber = formData.get('mobile') || document.getElementById('phoneNumber')?.value || '';
      const applianceType = formData.get('product') || document.getElementById('applianceType')?.value || '';
      const issueDescription = formData.get('message') || document.getElementById('issueDescription')?.value || '';

      // 1. Send Email Notification ONCE via Web3Forms API
      fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formData
      }).then(res => res.json())
        .then(data => console.log('Modal Email Notification Sent:', data))
        .catch(err => console.error('Modal Email Error:', err))
        .finally(() => {
          setTimeout(() => {
            whatsappForm.dataset.submitting = 'false';
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = '1';
            }
          }, 3000);
        });

      // 2. Construct WhatsApp text
      const waText = `*Service Inquiry - 24x7 Support*%0A` +
                     `*Customer Name:* ${encodeURIComponent(fullName)}%0A` +
                     `*Mobile:* ${encodeURIComponent(phoneNumber)}%0A` +
                     `*Appliance Category:* ${encodeURIComponent(applianceType)}%0A` +
                     `*Problem Description:* ${encodeURIComponent(issueDescription)}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;

      window.open(whatsappUrl, '_blank');
      if (inquiryModal) inquiryModal.classList.remove('active');
      whatsappForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     4. SMOOTH SCROLL NAV HIGHLIGHTING
     ------------------------------------------------------------------------ */
  const navLinks = document.querySelectorAll('nav ul li a');
  if (navLinks) {
    navLinks.forEach(link => {
      if (!link.dataset.bound) {
        link.dataset.bound = 'true';
        link.addEventListener('click', function() {
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
          }
        });
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. FAQ ACCORDION INTERACTION
     ------------------------------------------------------------------------ */
  const faqQuestions = document.querySelectorAll('.cata-faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.cata-faq-item');
        const isActive = item.classList.contains('active');

        const parentWrapper = item.closest('.cata-faq-wrapper');
        if (parentWrapper) {
          parentWrapper.querySelectorAll('.cata-faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
          });
        }

        item.classList.toggle('active', !isActive);
      });
    });
  }

});

