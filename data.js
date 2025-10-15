// mensagem amigável no console
console.log("%cEi! você se acha esperto por ter me achado no console?, mas como você chegou aqui, eu vou ajudar: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png. OMEGA_enigm.a", "font-size:14px;color:teal");

// tentativa simples de detectar DevTools (não à prova de falhas)
let devtoolsOpen = false;
const threshold = 160;
setInterval(() => {
  const widthDiff = window.outerWidth - window.innerWidth;
  const heightDiff = window.outerHeight - window.innerHeight;
  if (widthDiff > threshold || heightDiff > threshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      console.warn("DevTools detectado — brincadeira ativada!");
      // aqui você pode mostrar/alterar algo na UI, ou apenas logar
    }
  } else {
    devtoolsOpen = false;
  }
}, 500);