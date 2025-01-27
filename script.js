function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
  
    if (!dob) {
      result.textContent = 'Please enter your date of birth!';
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    if (age < 0) {
      result.textContent = 'Invalid date of birth!';
    } else {
      result.textContent = `You are ${age} years old.`;
    }
  }
  