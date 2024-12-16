import Image from 'next/image'
import bgImg from '../public/bg.png'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      Date: 12/15/2024
      <h1 style={{ textAlign: 'center'}} className="text-orange-500 text-2xl ml-5 my-5 text-5xl">Amar Tree Service Corporation</h1>
<p className="text-normal ml-5 my-5 pb-8 text-stone-600 text-3xl">At Amar Tree Service Corp., we specialize in providing fast, reliable, and professional tree removal services to keep your property safe, beautiful, and functional. Whether you’re dealing with overgrown, hazardous trees or need space cleared for new construction, our team of certified experts is here to help. With years of experience in the industry, we guarantee efficient and thorough tree removal, stump grinding, and disposal, all while prioritizing safety and environmental responsibility. Trust Amar Tree Removal Corporation to handle your tree removal needs with precision and care, ensuring your property looks its best!</p>

<h2 className="border border-slate-600 text-2xl font-extrabold text-center py-4" >Amar Tree Service Corporation</h2>
<h3 className="border border-slate-600 text-2xl font-extrabold text-center py-4">Consolidated Statement of Operations</h3>
<h4 className="border border-slate-600 text-2xl font-extrabold text-center py-4">For the Year Ended December 31, 2023 (in thousands)</h4>


<table className="border-separate border-spacing-2 px-35 border border-slate-400 mt-0 mb-0 ml-auto mr-auto">
  <thead>
    <tr>
      <th className="border border-slate-600 text-2xl font-extrabold" >Account</th>
      <th className="border border-slate-600 text-2xl font-extrabold">December 29,2023</th>
      <th className="border border-slate-600 text-2xl font-extrabold">December 29,2022</th>
    </tr>
  </thead>
  <tbody>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-green-800 font-extrabold">Tree Removal Services</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$2,080</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$2,060</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-green-800 font-extrabold">Stump Grinding Services</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$2,080</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$2,060</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-green-800 font-extrabold">Consulting and Inspection Services</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$1,040</td>
    <td className="border border-slate-600 text-xl font-extrabold text-green-800">$1,030</td>
  </tr>
  <tr className="even">
    <td className="border border-slate-600 text-2xl text-fuchsia-600 font-extrabold">Total Revenues</td>
    <td className="border border-slate-600 text-3xl font-extrabold text-fuchsia-600">$5,200</td>
    <td className="border border-slate-600 text-3xl font-extrabold text-fuchsia-600">$5,150</td>
  </tr>
  <tr className="odd">
    <td className="border border-slate-600 two text-2xl text-blue-400 font-extrabold">Operating Expenses:</td>
  </tr>
  <tr className='even'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold" >Labor Costs (Wages and Salaries)</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$300.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$290.0</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Permits and Licensing</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$300.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$290.0</td>
  </tr>
  <tr className='even'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold" >Equipment and Maintenance</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$300.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$290.0</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Disposal Fees</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$100.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$105.0</td>
  </tr>
  <tr className='even'>
    <td className="border border-slate-600 text-2xl text-orange-400 font-extrabold">Operating Income</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-400">$800.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-400">$730.0</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Interest Expense</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$25.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$22.0</td>
  </tr>
  <tr className='even'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Interest Income</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$3.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">$4.0</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Other Expense, Net</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">10.0</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700">8.0</td>
  </tr>
  <tr className='even'>
    <td className="border border-slate-600 text-2xl text-orange-700 font-extrabold">Income Taxes Provision(30%)</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700"> $230.4</td>
    <td className="border border-slate-600 text-xl font-extrabold text-orange-700"> $211.2</td>
  </tr>
  <tr className='odd'>
    <td className="border border-slate-600 text-3xl text-green-400 font-extrabold">Net Income</td>
    <td className="border border-slate-600 text-3xl underline hover:underline-offset-4 text-green-500 font-extrabold"> $537.6</td>
    <td className="border border-slate-600 text-3xl underline hover:underline-offset-4 text-green-500 font-extrabold"> $492.8</td>
            </tr>

  </tbody>
</table>

<br/>
  
<p className="bg-amber-400 underline hover:underline-offset-4 text-purple-500 font-extrabold"> There was an increase in net income from $492.8 million in 2023 to $537.6 million in 2024,reflecting a 9.1% growth year-over-year. This growth indicates an improvement in profitability.</p>


<br/>


<div className="border-solid border-2 border-indigo-600 hover:border-dotted" style={{ display: 'flex', justifyContent: 'center'}}>
  <Image src={bgImg} alt='/' width={650} height={400} />
  </div>

  <br/>


    <Link style={{ display: 'block', textAlign: 'center' }} className="underline hover:underline-offset-8 mt-0 mb-0 ml-auto mr-auto text-center" href="https://treetimeatlanta.com/what-are-the-benefits-of-hiring-a-tree-removal-service/" target="_blank">Learn more about the benefits of Tree Removal services</Link>

  

    </>
  );
}
