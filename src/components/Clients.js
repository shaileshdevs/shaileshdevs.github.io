import React from 'react';

function Clients() {
  const clients = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5"
  ];

  return (
    <section id="clients">
      <h2>Clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <p>{client}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;

