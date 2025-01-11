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
    <section id="clients" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-white text-lg">{client}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;

