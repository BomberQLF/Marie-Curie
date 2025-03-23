import React from 'react';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

const Mentions = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-white ml-8">
      <Navbar className="max-w-5xl" />
      <h1 className="text-3xl uppercase mt-8 lg:text-5xl mb-6">{t("legal_mentions")}</h1>
      
      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("company_name")}</h2>
        <p>Visiorama</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("legal_status")}</h2>
        <p>{t("association_law")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("address")}</h2>
        <p>2 Rue Albert Einstein, 77420 Champs-sur-Marne</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("email_address")}</h2>
        <p>contact@visiorama.fr</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("publication_director")}</h2>
        <p>Tom Murphy</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("host")}</h2>
        <p>VERCEL, dont le siège social est situé VERCEL INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen suivant : <a href="https://vercel.com/contact" className="text-blue-500">vercel.com/contact</a>.</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("privacy_policy")}</h2>
        <p>{t("privacy_policy_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_collection")}</h2>
        <p>{t("data_collection_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_usage")}</h2>
        <p>{t("data_usage_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_sharing")}</h2>
        <p>{t("data_sharing_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_retention")}</h2>
        <p>{t("data_retention_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_security")}</h2>
        <p>{t("data_security_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("data_access")}</h2>
        <p>{t("data_access_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("policy_modification")}</h2>
        <p>{t("policy_modification_text")}</p>
      </section>

      <section className="mb-6 max-w-2xl">
        <h2 className="text-2xl lg:text-4xl mb-4">{t("contact_us")}</h2>
        <p>{t("contact_us_text")}</p>
      </section>
      <Footer />
    </div>
  );
};

export default Mentions;