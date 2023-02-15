
  importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
  importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
  );

  
  const firebaseConfig = {
    apiKey: "AIzaSyCVatag3g523DipmY3qBEHjPzUicEXstDA",
    authDomain: "fcmoffer.firebaseapp.com",
    projectId: "fcmoffer",
    storageBucket: "fcmoffer.appspot.com",
    messagingSenderId: "930156227310",
    appId: "1:930156227310:web:0b8243e6e75ace7d39a1ff",
    measurementId: "G-KTWPTP1T34"

  };
      // eslint-disable-next-line
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  


    self.registration.showNotification(notificationTitle, notificationOptions);

});
  /* eslint-enable */