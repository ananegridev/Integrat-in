window.onbeforeunload = function() {
    localStorage.removeItem(register);
    localStorage.removeItem(result);
    
    localStorage.clear();
    
  };