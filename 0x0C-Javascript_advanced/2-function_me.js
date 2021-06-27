function welcomeMessage(fullName) {
    function closure() {
      alert(`Welcome ${fullName}`);
    }
    return closure;
  }
  let guillaume = welcomeMessage('Guillaume');
  let alex = welcomeMessage('Alex');
  let fred = welcomeMessage('Fred');
  