// "Copy email" buttons: copy the address, then show "Copied" with a check mark for 2 seconds.
// Useful because "Email me" only works if the visitor has an email app set up.

// Older way to copy: select the text in a hidden text box and run "copy".
// The box goes next to the button, so it also works inside the contact panel.
const copyWithTextBox = (text, button) => {
  const box = document.createElement('textarea');
  box.value = text;
  box.setAttribute('readonly', '');
  box.className = 'visually-hidden';
  button.after(box);
  box.select();
  const copied = document.execCommand('copy');
  box.remove();
  button.focus();
  if (!copied) throw new Error('copy command was blocked');
};

// Try the modern clipboard first; if the browser blocks it, use the older way.
const copyText = (text, button) => {
  if (!navigator.clipboard) return Promise.resolve().then(() => copyWithTextBox(text, button));
  return navigator.clipboard.writeText(text).catch(() => copyWithTextBox(text, button));
};

// The screen-reader message goes in the contact panel's own status line when the
// button is inside the panel (the rest of the page is hidden while it's open).
const statusFor = (button) => {
  const panel = button.closest('dialog');
  return panel ? panel.querySelector('.copy-status') : document.getElementById('copy-status');
};

const showCopied = (button) => {
  const label = button.querySelector('.copy-label');
  const iconUse = button.querySelector('use');
  const status = statusFor(button);
  const originalText = label.textContent;

  label.textContent = 'Copied';
  iconUse.setAttribute('href', '#icon-check');
  button.classList.add('copied');
  status.textContent = 'Email copied';

  setTimeout(() => {
    label.textContent = originalText;
    iconUse.setAttribute('href', '#icon-copy');
    button.classList.remove('copied');
    status.textContent = '';
  }, 2000);
};

const setUpCopyEmail = () => {
  document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', () => {
      copyText(button.dataset.email, button)
        .then(() => showCopied(button))
        .catch((err) => console.error('could not copy email', err));
    });
  });
};

export default { setUpCopyEmail };
