import { CheckIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Stripe from "stripe";

import Table from '../components/Table'
import { GetServerSideProps } from "next";


interface Product extends Stripe.Price {
    product: Stripe.Product;
  }


interface Props {
  products: Product[];
}

function Plans({ products }: Props) {
    const { logout, user } = useAuth()
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
    const [isBillingLoading, setBillingLoading] = useState(false)
  
    //console.log(products)
  
    const subscribeToPlan = () => {
      alert("hurray you are subscribed")
    }
  
    return (
      <div>
        <Head>
          <title>Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="border-b border-white/10 bg-[#141414]">
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              width={150}
              height={90}
              className="cursor-pointer object-contain"
            />
          </Link>
          <button
            className="text-lg font-medium hover:underline"
            onClick={logout}
          >
            Sign Out
          </button>
        </header>
  
        <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
          <h1 className="mb-3 text-3xl font-medium">
            Choose the plan that's right for you
          </h1>
          <ul>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
              Ad-free.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
              just for you.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
              your plan anytime.
            </li>
          </ul>
  
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center justify-end self-end md:w-3/5">
              {products.map((product) => (
                <div
                  className={`planBox ${
                    selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                  }`}
                  key={product.id}
                  onClick={() => setSelectedPlan(product)}
                >
                  {product.product.name}
                </div>
              ))}
            </div>
  
            <Table products={products} selectedPlan={selectedPlan} />
  
            <button
              disabled={!selectedPlan || isBillingLoading}
              className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
                isBillingLoading && 'opacity-60'
              }`}
              onClick={subscribeToPlan}
            >
              SUBSCRIBE
            </button>
          </div>
        </main>
      </div>
    )
  }
  
  export default Plans

export const getServerSideProps: GetServerSideProps = async () => {
  
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
    const products = await stripe.prices.list({
      active: true,
      limit: 10,
      expand: ["data.product"],
    });
  
    return { props: { products: products.data } };
  };