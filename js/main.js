(function main() {
	function $(e){
		return document.querySelector(e);
	}
	const AUTH = firebase.auth();
	$("#btnLogin").addEventListener('click', e => {
		let email = $('#email').value;
		let pass = $('#password').value;
    	const promise = AUTH.signInWithEmailAndPassword(email, pass);
    	promise.catch(e => alert(e.message));
	});
	$("#btnSingUp").addEventListener('click', e => {
		let email = $('#email').value;
		let pass = $('#password').value;
    	const promise = AUTH.createUserWithEmailAndPassword(email, pass);
    	promise.catch(e => alert(e.message));
	});
	AUTH.onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
      console.log(firebaseUser);
      window.location.href = "dashboard.html";
    }
    else{
      alert("No logeado");
    }
  });
	
})();