
const productsCards = [{
    image: "",
    description: "Para-choques Volkswagen Gold 7 GTIc",
    type: "Para-choques",
    sucata: "Servcarros",
    marca: "Volkswagen",
    price:"700,00 €",
    
  }, {
    image: "",
    description: "Para-choques SEAT Léon Cupra R",
    type: "Para-choques",
    sucata: "Forjães",
    marca: "SEAT Léon",
    price:"500,00 €",
  }, {
    image: "",
    description: "Para-choques BMW M3 E46",
    type: "Para-choques",
    sucata: "SBL",
    marca: "BMW",
    price:"400,00 €",
  },
  {
    image: "",
    description: "Para-choques Mercedes A45",
    type: "Para-choques",
    sucata: "SBL",
    marca: "Mercedes",
    price:"800,00 €",
  }, {
    image: "",
    description: "Jantes Mercedes C220",
    type: "Jantes",
    sucata: "Servcarros",
    marca: "Mercedes",
    price:"300,00 €",
  }, {
    image: "",
    description: "Jantes GTI Golf 7",
    type: "Jantes",
    sucata: "SBL",
    marca: "Golf",
    price:"350,00 €",
  }, {
    image: "",
    description: "Jantes Audi A4",
    type: "Jantes",
    sucata: "Forjães",
    marca: "Audi",
    price:"150,00 €",
  }, {
    image: "Jantes BMW 18",
    description: "desc1",
    type: "Jantes",
    sucata: "SBL",
    marca: "BMW",
    price:"250,00 €",
  }, {
    image: "",
    description: "Motor Peugeot 508 1.6",
    type: "Motor",
    sucata: "Servcarros",
    marca: "Peugeot",
    price:"899,00 €",
  }, {
    image: "",
    description: "Motor Volkswagen Amarok TDI 2.0",
    type: "Motor",
    sucata: "SBL",
    marca: "Volkswagen",
    price:"1499,00 €",
  }, {
    image: "",
    description:"Motor Mercedes C220 CDI",
    type: "Motor",
    sucata: "Forjães",
    marca: "Mercedes",
    price:"999,00 €",
  }, {
    image: "",
    description: "Motor BMW 116D",
    type: "Motor",
    sucata: "SBL",
    marca: "BMW",
    price:"899,00 €",
  },];
  
  
  const container = document.getElementById('catalog');
  
  productsCards.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    // Construct card content
    const content = `
      <div class="card">
      <div class="card-header" id="heading-${idx}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
  
                  </button>
        </h5>
      </div>
  
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
        <div class="card-body">
  
          <h5>${result.title}</h5>
          <p>${result.description}</p>
          <p>${result.output}</p>
          ...
        </div>
      </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  })