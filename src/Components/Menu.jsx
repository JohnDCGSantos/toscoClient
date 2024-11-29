import React from 'react';

const Menu = () => {
  const dishes = [
    {
      name: 'ROTTWEILER (cachorrinho)',
      description: 'Cacetinho, linguiça, salsicha fresca e queijo',
      price: '€3.80',
    },
    {
        name: 'SANDE P.O',
        description: 'Cacetinho, linguiça, salsicha fresca e queijo',
        price: '€3.00',
      },
    {
      name: 'PREGO DE ALHEIRA',
      description: 'Pão, alheira, queijo e ovo',
      price: '€4.10 / €5.30*'
    },
    {
        name: 'PREGO SIMPLES',
        price: '€4.90 / €6.10*'
      },
      {
        name: 'PREGO COM FIAMBRE OU QUEIJO',
        price: '€5.30 / €6.50*',
      },
      {
        name: 'PREGO MISTO',
        price: '€5.50 / €6.70*',
      },
      {
        name: 'PREGO À TOSCO',
        description: 'Pão, bife, cebolada negra e queijo',
        price: '€5.90 / €7.10*',
      },
      {
        name: 'PREGO À QUIM DA LANCHA',
        description: 'Pão, carne desfiada, rúcula e queijo chévre',
        price: '€7.20 / €8.30*',
      },
      {
        name: 'PREGO NO PRATO',
        description: 'Bife, batata, queijo, fiambre, ovo e rúcula',
        price: '€9.50',
      },
      {
        name: 'HAMBURGUER À TOSCO',
        description: 'Pão brioche, carne, ceboldada negra e queijo',
        price: '€9.10',
      },
      {
        name: 'HAMBURGUER À SELVAGEM',
        description: 'Pão brioche, carne, linguiça, picles, queijo e ovo',
        price: '€10.30',
      },
      {
        name: 'HAMBURGUER À ESQUISITO',
        description: 'Pão brioche, hamburguer vegetariano, queijo e rúcula',
        price: '€9.30',
      },
      {
        name: 'PICA PAU',
        description: 'Bife, picles, linguiça, salsicha fresca, queijo, fiambre e tostas',
        price: '€10.50',
      },
    // Adicionr restantes pratos
  ];

  const soup = { name: 'Sopa do Dia', price: '€2.00' };

  const sides = [
    { name: 'Batata', price: '€2.50' },
    // Adicione outros acompanhamentos, se necessário
  ];

  const desserts = [
    { name: 'Sobremesa do dia', price: '€3.50' },
    // Adicione outras sobremesas, se necessário
  ];

  const extras = [
    { name: 'Ovo', price: '€0.80' },
    { name: 'Cebola/Picles', price: '€0.60' },
    { name: 'Queijo/Fiambre', price: '€0.70' },
    { name: 'Rúcula', price: '€0.50' },
    { name: 'Presunto', price: '€1.20' },
    { name: 'Linguiça', price: '€1.00' },
    { name: 'Molho', price: '€1.00' },


    // Adicione os restantes extras aqui
  ];
  const bebidas = [
    { name: 'FINO', price: '€1.70' },
    { name: 'PRÍNCIPE', price: '€2.00' },
    { name: 'SUPER BOCK STOUT', price: '€1.70 / €2.00' },
    { name: 'SUPER BOCK S/ÁLCOOL', price: '€1.80' },
    { name: 'SOMERSBY', price: '€2.60' },
    { name: 'TANGO', price: '€1,90 / €2.10' },
    { name: 'VINHO BRANCO/TINTO/ROSÉ', price: '€3.50' },
    { name: 'SANGRIA', price: '€4.50' },
    { name: 'REFRIGIRANTES', price: '€2.00' },
    { name: 'ÁGUA', price: '€1.20' },
    { name: 'ÁGUA C/GÁS', price: '€1.70' },
    { name: 'CAFÉ/DESCAFEINADO', price: '€1.00' },



  ]
  const destilados = [
    { name: 'WHISKEY', price: '€4.50 / €7.00' },
    { name: 'LICORES', price: '€3.90' },
    { name: 'GIN TÓNICO', price: '€5.50 / €9.50' },
    { name: 'VINHO DO PORTO', price: '€3.90' },
    { name: 'CRF', price: '€4.50' },
    


  ]
  return (
    <div className="menu-container">
      <h1>Menu</h1>

      {/* Secção dos pratos principais */}
      <section className="dishes-section">
        <h2>Pratos Principais</h2>
        <p>* com bolo do caco</p>
        {dishes.map((dish, index) => (
          <div key={index} className="menu-item">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Preço: {dish.price}</p>
            {dish.boloCacoPrice && (
              <p>Com bolo do caco: {dish.boloCacoPrice}</p>
            )}
          </div>
        ))}
      </section>

      {/* Secção da sopa */}
      <section className="soup-section">
        <h2>Sopa</h2>
        <div className="menu-item">
          <h3>{soup.name}</h3>
          <p>Preço: {soup.price}</p>
        </div>
      </section>

      {/* Secção dos acompanhamentos */}
      <section className="sides-section">
        <h2>Acompanhamentos</h2>
        {sides.map((side, index) => (
          <div key={index} className="menu-item">
            <h3>{side.name}</h3>
            <p>Preço: {side.price}</p>
          </div>
        ))}
      </section>

      {/* Secção das sobremesas */}
      <section className="desserts-section">
        <h2>Sobremesas</h2>
        {desserts.map((dessert, index) => (
          <div key={index} className="menu-item">
            <h3>{dessert.name}</h3>
            <p>Preço: {dessert.price}</p>
          </div>
        ))}
      </section>

      {/* Secção dos extras */}
      <section className="extras-section">
        <h2>Extras</h2>
        <div className="menu-item2"> 
        {extras.map((extra, index) => (
          <div key={index} className="menu-item3">
            <h3>{extra.name}</h3>
            <p>Preço: {extra.price}</p>
          </div>
        ))}</div>
      </section>
      <section className="bebidas-section">
        <h2>Bebidas</h2>
        <div className="menu-item"> 
        {bebidas.map((bebida, index) => (
          <div key={index} className="menu-item">
            <h3>{bebida.name}</h3>
            <p>Preço: {bebida.price}</p>
          </div>
        ))}</div>
      </section>
      <section className="destilados-section">
        <h2>Destilados</h2>
        <div className="menu-item2"> 
        {destilados.map((destilado, index) => (
          <div key={index} className="menu-item3">
            <h3>{destilado.name}</h3>
            <p>Preço: {destilado.price}</p>
          </div>
        ))}</div>
      </section>
    </div>
  );
};

export default Menu;
