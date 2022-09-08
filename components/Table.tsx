
import { CheckIcon } from '@heroicons/react/20/solid'
import { ProductStripe } from '../typings'

interface Props {
  products: ProductStripe[]
  selectedPlan: ProductStripe | null
}

function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          
            <td
              
            >
              EUR 10
            </td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          
            <td
              
            >
              videoquality
            </td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          
            <td
              
            >
              Resolution
            </td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          
            <td
              
            >
              portability
            </td>
          
        </tr>
      </tbody>
    </table>
  )
}

export default Table