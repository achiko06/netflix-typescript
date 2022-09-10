import { GetServerSideProps } from "next";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";


interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

export default function Home({ prices }: IProps) {
  const onClick = async (priceId: string) => {
    alert("button was clicked")
  };

  return (
    <div>
      

      <ul>
        {prices.map((price) => (
          <li key={price.id}>
            <h2>{price.product.name}</h2>
            <img src={price.product.images[0]} />
            <p>Cost: ${((price.unit_amount as number) / 100).toFixed(2)}</p>
            <button onClick={() => onClick(price.id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ["data.product"],
  });

  return { props: { prices: prices.data } };
};