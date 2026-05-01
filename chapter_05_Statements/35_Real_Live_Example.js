let isLoggedIn = true;
let userRole = "editor";

// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if(isLoggedIn) {
    if(userRole === 'admin') {
      console.log("admin can do all the things");  
    } else if (userRole === 'editor') {
        console.log('Welcome editor -Edit access granted')
    } else if (userRole === 'viewer') {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !")
    }
} else {
    console.log('you are not logged in!!')
}