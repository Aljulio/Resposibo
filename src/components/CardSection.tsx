// src/components/CardSection.tsx
import Card from './Card';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: 'Servicio de Ejemplo 1',
      text: 'Descripción breve del primer servicio o producto de ejemplo utilizado en este ejercicio de desarrollo web con React y Bootstrap.',
    },
    {
      id: 2,
      title: 'Ejemplo de Servicio Digital',
      text: 'Breve explicación de un servicio digital como parte de esta práctica de diseño responsivo con React.',
    },
    {
      id: 3,
      title: 'Soporte Técnico Ilustrativo',
      text: 'Descripción concisa de un servicio de soporte técnico, incluido como ejemplo en este ejercicio de React.',
    },
  ];

  return (
    // Se agrega el id="servicios" a la sección
    <section id="servicios" className="row g-4 my-5">
      {cards.map((card) => (
        <div key={card.id} className="col-12 col-md-6 col-lg-4">
          <Card title={card.title} text={card.text} />
        </div>
      ))}
    </section>
  );
};

export default CardSection;