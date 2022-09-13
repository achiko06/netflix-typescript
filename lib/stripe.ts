import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'


const loadCheckout = async (priceId: string) => {
  console.log("checkoutloaded")
}

const goToBillingPortal = async () => {
  const instance = getFunctions(app, 'us-central1')
  const functionRef = httpsCallable(
    instance,
    'ext-firestore-stripe-payments-createPortalLink'
  )

  await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })
    .then(({ data }: any) => window.location.assign(data.url))
    .catch((error) => console.log(error.message))
}

export { loadCheckout, goToBillingPortal }
