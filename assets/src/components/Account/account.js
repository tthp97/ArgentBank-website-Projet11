export default function Account({
  account_title,
  account_amount_description,
  account_amount,
}) {
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{account_title}</h3>
          <p className="account-amount">{account_amount}</p>
          <p className="account-amount-description">
            {account_amount_description}
          </p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
