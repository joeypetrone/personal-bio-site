// "Copy email" buttons: copy the address, then show "Copied" with a check mark for 2 seconds.
// Useful because "Email me" only works if the visitor has an email app set up.

const copyText = (text) => {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);

  // Older browsers: copy through a hidden text box.
  const box = document.createElement('textarea');
  box.value = text;
  document.body.appendChild(box);
  box.select();
  document.execCommand('copy');
  box.remove();
  return Promise.resolve();
};

const showCopied = (button) => {
  const label = button.querySelector('.copy-label');
  const iconUse = button.querySelector('use');
  const originalText = label.textContent;

  label.textContent = 'Copied';
  iconUse.setAttribute('href', '#icon-check');
  button.classList.add('copied');
  document.getElementById('copy-status').textContent = 'Email copied';

  setTimeout(() => {
    label.textContent = originalText;
    iconUse.setAttribute('href', '#icon-copy');
    button.classList.remove('copied');
    document.getElementById('copy-status').textContent = '';
  }, 2000);
};

const setUpCopyEmail = () => {
  document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', () => {
      copyText(button.dataset.email)
        .then(() => showCopied(button))
        .catch((err) => console.error('could not copy email', err));
    });
  });
};

export default { setUpCopyEmail };
