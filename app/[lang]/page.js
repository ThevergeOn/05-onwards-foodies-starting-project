import { getDictionary } from "../../get-dictionary";
import LocaleSwitcher from "../components/locale-switcher";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      {dictionary["server-component"].welcome}
    </main>
  );
}
