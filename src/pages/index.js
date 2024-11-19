import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


const FeatureList = [
  {
    title: 'Soluzioni ERP su Misura per il Fashion',
    icon: 'fa fa-sliders-h',
    description: "4SeasonsNext combina tecnologia avanzata e design intuitivo per rispondere alle esigenze uniche dell’industria del fashion. Automatizza processi complessi, migliora la collaborazione tra team e mantieni il controllo creativo con una soluzione ERP costruita per la moda.",
  },
  {
    title: 'ERP Cloud-Ready per il Mondo della Moda',
    icon: 'fa fa-sliders-h',
    description: "Gestisci il tuo business in ogni momento e ovunque ti trovi con 4SeasonsNext. Una piattaforma scalabile e sicura che collega produzione, magazzino, e-commerce e punti vendita in un’unica soluzione, pensata per il dinamismo del settore moda."
  },
  {
    title: 'Documentazione Completa',
    icon: 'fa fa-sliders-h',
    description: "Scopri come 4SeasonsNext rivoluziona la gestione aziendale nel mondo della moda. Dalla produzione alla logistica, fino alla vendita al dettaglio, la nostra piattaforma ti offre strumenti avanzati per ottimizzare ogni aspetto della tua attività, adattandosi perfettamente al tuo brand.",
  },
];

 function Feature({icon, title, description}) {
  return (
    <div class="col-12 col-md-3">
      <div class="card h-100">
      <div class="card-body py-5">
          <div class="card-icon mb-4"><i class={icon}></i></div>
          <h3 class="card-title h4">{title}</h3>
          <p class="card-text">{description}</p>
          <a href="1.html" class="stretched-link"></a>
      </div>
    </div>
    </div>

  );
}
 




export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // Initialize the CMS object

  return (
    <Layout
    >
      <div class="index-content">
    <section class="section pb-0">
    <div class="container">
       <div class="row justify-content-between align-items-center">
          <div class="col-xl-6 col-lg-8 text-center text-lg-start">
             <h1 class="mb-4">Documentazione</h1>
             <p class="mb-4">Benvenuto nella documentazione di 4SeasonsNext, la tua guida essenziale per sfruttare al massimo le potenzialità del nostro ERP web dedicato al mondo della moda. Qui troverai tutto ciò di cui hai bisogno: guide passo-passo, best practice e dettagli tecnici per configurare, personalizzare e ottimizzare ogni aspetto della piattaforma. Esplora le funzionalità, risolvi dubbi e porta il tuo business al livello successivo con un supporto chiaro e dettagliato.

             </p>
             <div class="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <a class="btn btn-primary ms-2 me-2 me-lg-4 mt-2" href="4sne/docs/INTRODUCTION">Inizia</a>
             </div>
          </div>
          <div class="col-lg-4 d-lg-block d-none">
           <img src="https://ouch-cdn2.icons8.com/Pf4yc2Gqrpc8DXaT4cx4QL9Ck-RF57T6_23GAMTvWmA/rs:fit:368:508/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjU1/L2YxOTc1NDA2LWY1/YjMtNGE5My1iOWFk/LWRjN2I2MDAyY2Rh/Yy5wbmc.png" loading="lazy" decoding="async" alt="illustration" class="img-fluid" width="346" height="352"/>
           </div>
       </div>
    </div>
  </section>
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section class="section">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-4 text-center d-lg-block d-none">
                <img src="https://ouch-cdn2.icons8.com/tQ0HwENhibiKHVm7aUvPDylUlQ8W01w2GOAlnFYiO54/rs:fit:368:315/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcw/LzVhMjE4ODUxLTUw/OWItNGQyOC1hNjQ0/LWIzMDYxMGFlYjY4/MC5wbmc.png" loading="lazy" decoding="async" alt="call-to-action" class="img-fluid" width="254" height="428"/></div>
               <div class="col-lg-8 text-lg-start text-center">
                  <h2 class="mb-3 fw-bold">Non Hai Trovato Quello che Cerchi?</h2>
                  <p>Se nella documentazione non hai trovato la risposta che cercavi, siamo qui per aiutarti! Puoi:
<ul>
<li><b> - Contattare il Supporto</b>: Il nostro team è a disposizione per fornirti assistenza personalizzata.</li>
<li><b> - Consultare il tuo Consulente</b>: Rivolgiti al consulente dedicato per ricevere supporto specifico per le tue esigenze.</li>
<li><b> - Suggerire un Aggiornamento</b>: Aiutaci a migliorare! Segnala contenuti mancanti o argomenti da approfondire.</li>
</ul>
La tua esperienza conta: lavoriamo ogni giorno per rendere 4SeasonsNext e la sua documentazione sempre più completa e utile!
</p>
                  <a href="4sne/blog" class="btn btn-primary">Vai ai Rilasci</a>
               </div>
            </div>
         </div>
      </section>
    </div>
    </Layout>
  );
}