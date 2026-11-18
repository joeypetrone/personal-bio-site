// Resume modal. The hero's Resume button opens it instead of going straight to the PDF.
// Like the contact panel it's a <dialog>, so the browser keeps keyboard focus inside it,
// hides the page behind it from screen readers, and closes it on Esc.

const RESUME_URL = '/Joey-Petrone-Resume.pdf';

// Same breakpoint as the phone styles in main.scss. Phone browsers can't show a PDF
// inside the page, so there the modal skips the preview and just offers the buttons.
const phone = window.matchMedia('(max-width: 600px)');

const setUpResumeModal = () => {
  const modal = document.getElementById('resume-modal');
  const preview = modal.querySelector('.resume-preview');
  const openButton = document.querySelector('.resume-open');

  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Load the PDF the first time the modal opens on a wide screen, not when the page loads.
    // "#view=FitH" asks the browser's PDF viewer to fit the page to the width;
    // "navpanes=0" hides the page-thumbnail sidebar.
    if (!phone.matches && !preview.getAttribute('src')) {
      preview.src = `${RESUME_URL}#view=FitH&navpanes=0`;
    }
    modal.showModal();
    // Same focus rule as the contact panel: tap/click focuses the modal itself (no focus
    // ring on X); keyboard leaves focus on X so keyboard users see where they are.
    if (event.detail > 0) modal.focus();
  });

  modal.querySelector('.resume-close').addEventListener('click', () => modal.close());

  // Close when the click lands on the dimmed page outside the modal's box.
  modal.addEventListener('click', (event) => {
    if (event.target !== modal) return;
    const box = modal.getBoundingClientRect();
    const inside = event.clientX >= box.left && event.clientX <= box.right
      && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) modal.close();
  });
};

export default { setUpResumeModal };
