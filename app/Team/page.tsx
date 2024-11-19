import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team'
};

export default function Page() {
  return (
    <>

<h1 className="text-blue-600 font-extrabold text-5xl underline text-center" >Meet our Team!!!</h1>

<br/>

<div className="overflow-x-auto font-extrabold text-5xl">
  <table className="table table-xl text-3xl underline">
    <thead className="text-4xl">
      <tr className="underline decoration-sky-500 hyphens-auto">
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Previous Company</th>
        <th>Origin</th>
        <th>Active Since?</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody >
      <tr className="hyphens-auto">
        <th>1</th>
        <td className="border-4 border-indigo-500/100" >Ankur Sri</td>
        <td>Arborist</td>
        <td>Branch and Blade Services</td>
        <td>India</td>
        <td>12/16/2020</td>
        <td>Blue</td>
      </tr>
      <tr className="hyphens-auto">
        <th>2</th>
        <td className="border-4 border-indigo-500/100">Curt Ufuoma</td>
        <td>Tree Climber</td>
        <td>Green Giant Tree Care</td>
        <td>United States</td>
        <td>12/5/2020</td>
        <td>Purple</td>
      </tr>
      <tr className="hyphens-auto">
        <th>3</th>
        <td className="border-4 border-indigo-500/100">Brice Swyre</td>
        <td>Grounds Crew Member</td>
        <td>Tree Haven Experts</td>
        <td>China</td>
        <td>8/15/2020</td>
        <td>Red</td>
      </tr>
      <tr className="hyphens-auto">
        <th>4</th>
        <td className="border-4 border-indigo-500/100">Marjy Ferencz</td>
        <td>Chainsaw Operator</td>
        <td>Canopy Solutions</td>
        <td>Russia</td>
        <td>3/25/2021</td>
        <td>Crimson</td>
      </tr>
      <tr className="hyphens-auto">
        <th>5</th>
        <td className="border-4 border-indigo-500/100">Yancy Tear</td>
        <td>Stump Grinder Operator</td>
        <td>Mighty Oak Tree Service</td>
        <td>Brazil</td>
        <td>5/22/2020</td>
        <td>Indigo</td>
      </tr>
      <tr className="hyphens-auto">
        <th>6</th>
        <td className="border-4 border-indigo-500/100">Irma Vasilik</td>
        <td>Editor</td>
        <td>Tree Removal Specialist </td>
        <td>Venezuela</td>
        <td>12/8/2020</td>
        <td>Purple</td>
      </tr>
      <tr className="hyphens-auto">
        <th>7</th>
        <td className="border-4 border-indigo-500/100">Meghann Durtnal</td>
        <td>Plant Health Care Technician</td>
        <td>Peak Tree Care</td>
        <td>Philippines</td>
        <td>2/17/2021</td>
        <td>Yellow</td>
      </tr>
      <tr className="hyphens-auto">
        <th>8</th>
        <td className="border-4 border-indigo-500/100">Sammy Seston</td>
        <td>Crew Leader</td>
        <td>Precision Pruning</td>
        <td>Indonesia</td>
        <td>5/23/2020</td>
        <td>Crimson</td>
      </tr>
      <tr className="hyphens-auto">
        <th>9</th>
        <td className="border-4 border-indigo-500/100">Lesya Tinham</td>
        <td>Safety Coordinator</td>
        <td>Root and Shoot Tree Solutions</td>
        <td>Philippines</td>
        <td>2/21/2021</td>
        <td>Maroon</td>
      </tr>
      <tr className="hyphens-auto">
        <th>10</th>
        <td className="border-4 border-indigo-500/100">Zaneta Tewkesbury</td>
        <td>Equipment Mechanic</td>
        <td>TimberGuard Tree Removal</td>
        <td>Chad</td>
        <td>6/23/2020</td>
        <td>Green</td>
      </tr>
      <tr className="hyphens-auto">
        <th>11</th>
        <td className="border-4 border-indigo-500/100">Andy Tipple</td>
        <td>Bucket Truck Operator</td>
        <td>ClearCanopy Tree Experts</td>
        <td>Poland</td>
        <td>7/9/2020</td>
        <td>Indigo</td>
      </tr>
      <tr className="hyphens-auto">
        <th>12</th>
        <td className="border-4 border-indigo-500/100">Sophi Biles</td>
        <td>Climbing Arborist Trainer</td>
        <td>GreenWay Tree Services</td>
        <td>Indonesia</td>
        <td>2/12/2021</td>
        <td>Maroon</td>
      </tr>
      <tr>
        <th>13</th>
        <td className="border-4 border-indigo-500/100">Florida Garces</td>
        <td>Landscape Supervisor</td>
        <td>Skyline Pruners</td>
        <td>Poland</td>
        <td>5/31/2020</td>
        <td>Purple</td>
      </tr>
      <tr className="hyphens-auto">
        <th>14</th>
        <td className="border-4 border-indigo-500/100">Maribeth Popping</td>
        <td>Customer Service Representative</td>
        <td>LumberJacks Tree Care</td>
        <td>Portugal</td>
        <td>4/27/2021</td>
        <td>Aquamarine</td>
      </tr>
      <tr className="hyphens-auto">
        <th>15</th>
        <td className="border-4 border-indigo-500/100">Moritz Dryburgh</td>
        <td>Operations Manager</td>
        <td>Natures Keepers Tree Services</td>
        <td>Sri Lanka</td>
        <td>8/8/2020</td>
        <td>Crimson</td>
      </tr>
      <tr className="hyphens-auto">
        <th>16</th>
        <td className="border-4 border-indigo-500/100">Reid Semiras</td>
        <td>Tree Risk Assessor</td>
        <td>TreeVantage</td>
        <td>Poland</td>
        <td>7/30/2020</td>
        <td>Green</td>
      </tr>
      <tr className="hyphens-auto">
        <th>17</th>
        <td className="border-4 border-indigo-500/100">Alec Lethby</td>
        <td>Environmental Specialist</td>
        <td>Evergreen Arbor Care</td>
        <td>China</td>
        <td>2/28/2021</td>
        <td>Khaki</td>
      </tr>
      <tr className="hyphens-auto">
        <th>18</th>
        <td className="border-4 border-indigo-500/100">Aland Wilber</td>
        <td>Estimator</td>
        <td>Tree Toppers</td>
        <td>Czech Republic</td>
        <td>9/29/2020</td>
        <td>Purple</td>
      </tr>
      <tr className="hyphens-auto">
        <th>19</th>
        <td className="border-4 border-indigo-500/100 ">Teddie Duerden</td>
        <td>Tree Inventory Specialist</td>
        <td>EcoPrune Solutions</td>
        <td>France</td>
        <td>10/27/2020</td>
        <td>Aquamarine</td>
      </tr>
      <tr className="hyphens-auto">
        <th>20</th>
        <td className="border-4 border-indigo-500/100">Lorelei Blackstone</td>
        <td>Sales Representative</td>
        <td>Branch Masters</td>
        <td>Kazakhstan</td>
        <td>6/3/2020</td>
        <td>Red</td>
      </tr>
    </tbody>
    <tfoot className="text-4xl underline decoration-sky-500" >
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Previous Company</th>
        <th>Origin</th>
        <th>Active Since?</th>
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>

</>
  )
}