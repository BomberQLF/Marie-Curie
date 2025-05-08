import { useTranslation } from "react-i18next";

const FormComponent = ({ formData, handleChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <form className="bg-black text-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("firstname")}</label>
            <input
              type="text"
              name="name"
              aria-label="Prénom"
              value={formData.name}
              onChange={handleChange}
              placeholder="Prénom*"
              required
              className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">{t("lastname")}</label>
            <input
              type="text"
              name="lastname"
              aria-label="Nom"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Nom*"
              required
              className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">{t("email")}</label>
          <input
            type="email"
            name="email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mail@exemple.com*"
            required
            className="w-full p-3 bg-black border border-white rounded-lg outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <p className="text-xs text-gray-400 mb-4">
          {t("asterix")}
        </p>
        <p className="text-xs text-gray-400 mb-4">
          {t("msg_mail")}
          <span className="font-bold"> agence.visorama@gmail.com</span>.
        </p>
      </form>
    </div>
  );
};

export default FormComponent;
