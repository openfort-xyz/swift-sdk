document.addEventListener('DOMContentLoaded', async () => {
  const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCCUPOkncFnbTjAdXAOr0rMJSlZ7pZ6eoE',
    authDomain: 'non-custodial-sample.firebaseapp.com',
    projectId: 'non-custodial-sample',
    appId: '1:1053697688933:web:593d3e0db64b08af2b0d8c',
  });

  const openfort = new Openfort({
    baseConfiguration: {
      publishableKey: 'pk_test_505bc088-905e-5a43-b60b-4c37ed1f887a',
    },
    shieldConfiguration: {
      shieldPublishableKey: 'a4b75269-65e7-49c4-a600-6b5d9d6eec66',
      shieldEncryptionKey: '/cC/ElEv1bCHxvbE/UUH+bLIf8nSLZOrxj8TkKChiY4=',
    },
  });
    
  window.openfort = openfort;
    
  const auth = firebaseApp.auth();

  auth.onIdTokenChanged(async (user) => {
    if (user) {
      addMessage('Signed in');
      const idToken = await user.getIdToken();
      const player = await openfort.authenticateWithThirdPartyProvider({
        provider:'firebase',
        token:idToken,
        tokenType:'idToken'
      });
      const embeddedState = openfort.getEmbeddedState();
      if (embeddedState === 2) window.location.href = 'recover.html';
      if (embeddedState === 4) window.location.href = 'signature.html';

      addMessage(`Openfort: ${player.id}`);
    } else {
      addMessage('Signed out');
    }
  });
});
