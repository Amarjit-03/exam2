export default function Page() {
  return (
    <>  
    <h1 className="ml-5 text-3xl">Final Exam</h1>
    <form>
        <label htmlFor="product" className="ml-5 text-2xl">Service Selection</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-green-500" />
        <br />

        <label htmlFor="service" className="underline text-teal-900 decoration-wavy mx-5 text-2xl">Choose a Service</label>

<select name="services" id="services" className="ml-5" >
  <option value="stump">Tree Removal and Stump Grinding</option>
  <option value="pruning">Tree Pruning and Trimming</option>
  <option value="emergency">Emergency Tree Services</option>
  <option value="clearing">Land Clearing and Lot Preparation</option>
  <option value="health">Tree Health and Disease Management</option>
  <option value="municipal">Commercial and Municipal Services</option>
</select>


<br />

<h1 className="underline font-bold text-blue-600 text-2xl ml-5 mt-5">Tabs</h1>

<div className="ml-5 mt-5">
        <input type="radio" id="about" name="fav_language" value="About" />
        <label htmlFor="About">About</label><br />
        <input type="radio" id="contact" name="fav_language" value="Contact" />
        <label htmlFor="Contact">Contact</label><br />
        <input type="radio" id="team" name="fav_language" value="Team" />
        <label htmlFor="Team">Team</label>
        </div>


<br />

<h1 className="underline font-bold text-red-600 text-2xl ml-5 mt-5">What Service You have?</h1>

<div className="ml-5 mt-5">
<input type="checkbox" id="service1" name="service1" value="Tree" />
<label htmlFor="service1"> I have a Tree</label><br />
<input type="checkbox" id="service2" name="service2" value="Stump" />
<label htmlFor="service2"> I have a Stump</label><br />
<input type="checkbox" id="service3" name="service3" value="Emergency" />
<label htmlFor="service3"> I have a Emergency</label><br></br>
</div>




<button className="ml-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit" >Submit</button>
    
    
    </form>
    </>
  );
}
