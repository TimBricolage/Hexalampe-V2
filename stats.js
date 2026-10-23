/*************************
  STATISTIQUES - GoatCounter (sans cookies)
  Renseignez GOATCOUNTER_CODE dans config.js (ex : "hexalampe").
  Tant qu'il est vide, rien n'est chargé.
**************************/
(function(){
  const code = (window.HEXA_CONFIG || {}).GOATCOUNTER_CODE;

  // compte une action (téléchargement de notice, ajout galerie, etc.)
  window.Stats = {
    event: function(name){
      try{
        if(window.goatcounter && window.goatcounter.count){
          window.goatcounter.count({ path:name, title:name, event:true });
        }
      }catch(e){}
    }
  };

  if(!code) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(s);
})();
