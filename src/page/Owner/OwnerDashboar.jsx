

const OwnerDashboar = () => {
    const imageStorage_key = 'c1e98868c1d43acae982c32d2ad25d4f'
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
         const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageStorage_key}`
        fetch(url,
         {
             method:'POST',
             body:formData
         }).then(res=> res.json())
          .then(result=>{
             if(result.success){
                 const image = result.data.url;
                 const house = {
                     name: e.target.name.value,
                     address: e.target.address.value,
                     city:e.target.city.value,
                     bedrooms:e.target.bedrooms.value,
                     bathrooms:e.target.bathrooms.value,
                     roomSize:e.target.roomSize.value,
                     availabilityDate:e.availabilityDate.image.value,
                     rentPerMonth:e.target.rentPerMonth.value,
                     phoneNumber:e.target.phoneNumber.value,
                     description:e.target.description.value,
                     image: image
                 }
             
                fetch('https://house-hunter-backend-t5ic.onrender.com/houses',{
                    method:'POST',
                    headers: {
                     'content-type': 'application/json',
                    
                 },
                 body: JSON.stringify(house)
                }) 
                .then(res=> res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        console.log("insert");
                    }
                    else{
                        console.error('Oh no try again later')
                    }
                })
             }
             
          })

    }
    return (
        <div className="container mx-auto lg:mt-20">
            <h1 className="text-center text-3xl">Add New House</h1>
            <div className="flex justify-center items-center ">
                
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">name</span>
            </label>
            <input
              type="text"
              name="name"
              
              placeholder="Your Name"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">address</span>
            </label>
            <input
              type="text"
              name="address"
              
              placeholder="Your address"
              className="text-center py-2  w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">city</span>
            </label>
            <input
              type="text"
              name="city"
              
              placeholder="Your city"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">bedrooms</span>
            </label>
            <input
              type="number"
              name="bedrooms"
              
              placeholder="Your bedrooms"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">bathrooms</span>
            </label>
            <input
              type="number"
              name="bathrooms"
              
              placeholder="Your bathrooms"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">roomSize</span>
            </label>
            <input
              type="text"
              name="roomSize"
              
              placeholder="Your roomSize"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">image</span>
            </label>
            <input
              type="file"
              name="image"
              
              placeholder="Your image"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">availabilityDate</span>
            </label>
            <input
              type="date"
              name="availabilityDate"
              
              placeholder="Your availabilityDate"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">rentPerMonth</span>
            </label>
            <input
              type="number"
              name="rentPerMonth"
              
              placeholder="RentPerMonth"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">phoneNumber</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              
              placeholder="Your phoneNumber"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                    <div className="flex items-center">
                        <div className="flex flex-col w-96">
            <label className="label">
              <span className="text-base capitalize text-black font-bold">description</span>
            </label>
            <input
              type="text"
              name="description"
              
              placeholder="Description"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
                        </div>


                        <div className="flex flex-col ml-8 w-96">
            
            <input
              type="submit"
              value="Add New House"
              
             
              className="text-center mt-8 bg-black text-white py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
</div>
                </form>
            </div>
        </div>
    );
};

export default OwnerDashboar;