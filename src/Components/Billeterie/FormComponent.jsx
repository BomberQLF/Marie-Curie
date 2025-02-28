import React from "react";

const FormComponent = ({ formData, handleChange }) => {
  return (
    <div className="bg-black">
      <form className="bg-black text-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block text-sm mb-1">Prénom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Prénom*"
              required
              className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Nom</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Nom*"
              required
              className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mail@exemple.com*"
            required
            className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <p className="text-xs text-gray-400 mb-4">
          Les champs marqués d’un * sont obligatoires.
        </p>
        <p className="text-xs text-gray-400 mb-4">
          Les tickets sont remboursables uniquement si la demande a été faite 48
          heures à l’avance par email à l’adresse suivante :
          <span className="font-bold"> agence.visorama@gmail.com</span>.
        </p>
      </form>
    </div>
  );
};

export default FormComponent;
