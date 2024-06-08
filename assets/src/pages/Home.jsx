import "../css/main.css";
import iconChat from "../img/icon-chat.webp";
import iconeMoney from "../img/icon-money.webp";
import iconeSecurity from "../img/icon-security.webp";
import Features from "../components/Features/Features";
function Home() {
  return (
    <>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Features
            img={iconChat}
            text="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
            item_title="You are our #1 priority"
          />
          <Features
            img={iconeMoney}
            text="The more you save with us, the higher your interest rate will be!"
            item_title="More savings means higher rates"
          />
          <Features
            img={iconeSecurity}
            text=" We use top of the line encryption to make sure your data and money
              is always safe."
            item_title="Security you can trust"
          />
        </section>
      </main>
    </>
  );
}
export default Home;
