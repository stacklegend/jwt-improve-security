window.onload = function () {
  document.getElementById('buttonGetToken').addEventListener('click', () => {
    fetch('/api/getToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => (document.getElementById('token').innerText = res.token));
  });

  document.getElementById('buttonCheckToken').addEventListener('click', () => {
    const token = document.getElementById('verify').value;
    const output = document.getElementById('data');

    fetch('/api/checkToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
    })
      .then((res) => res.json())
      .then((res) => (output.innerText = JSON.stringify(res.data, null, 2)))
      .catch(() => (output.innerText = 'Token invalid'));
  });
};
