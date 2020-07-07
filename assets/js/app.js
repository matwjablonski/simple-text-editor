const buttons = Array.from(document.querySelectorAll('button[data-command]'));

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    document.execCommand(btn.dataset.command, true, '');
  })
});
