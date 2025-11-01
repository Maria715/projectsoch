import React, { useRef, useState } from 'react'

function Partner() {



    const [logofile, setLogofile] = useState(null);
    const filelogoref = useRef(null);
    const handleFileUpload = (e) => {
        e.preventDefault();
        if(filelogoref.current){
                filelogoref.current.click();
        }
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setLogofile(file);
    }

    const PartnerTypes = [
        "Individual",
        "Financial Sponsor",
        "Technical Partner",
        "Sociacl Media Outreach Partner",
        "Assets Sponsor",
        "Educational Sponsor"
    ]
  return (
    <div className='min-h-screen mx-auto bg-slate-grey-100'>
        <div className='w-full max-w-4xl shadow-xl/20 p-6 rounded-lg bg-white my-12 mx-auto'>
        <h1 className='text-center w-full text-4xl  text-primary font-[900] font-poppins'>Partner With Us</h1>
        <div className='w-full text-center my-6'>
            <h1 className='text-4xl text-secondary font-poppins font-[900] mt-10 '>Project Soch</h1>
            <h4 className='font-poppins font-[600] mt-2 text-primary'>Partner Collaboration Form</h4>

        </div>

        <form action="" className=' '>
            <div>
                <label htmlFor="name" className='text-[#233d60] font-poppins font-[600] mb-4'>Full Name / Organization Name</label>
                <input type="text" name="name" id="name" required placeholder='Enter Full Name' className='w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-9'>
                <label htmlFor="email" className='text-[#233d60] font-poppins font-[600] mb-4'>Email</label>
                <input type="email" name="email" id="email" placeholder='Enter Email Address' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-9'> 
                <label htmlFor="top" className='text-[#233d60] font-poppins font-[600] mb-4'>Type of Partner</label>
                <div className="mt-4">
                     {
                    PartnerTypes.map((type, index) => (
                        <div key={index} className='flex items-center mt-1 '>
                            <input type="checkbox" name="top" value={type} className='mr-2'/>
                            <label htmlFor={type} className='font-poppins text-md'>{type}</label>
                        </div>
                    ))
                }

                </div>
               
            </div>
            <div className='text-left mt-9'>
                <label  className='text-[#233d60] font-poppins font-[600] mb-4'>Logo (HD File)</label>
                <p className='mt-2 text-primary font-poppins opacity-70'>Upload 1 supported file. Max 10 MB.</p>

                <button className='bg-secondary text-white px-4 py-2 rounded-lg mt-4' onClick={handleFileUpload}>Upload Logo <i class="fa-solid fa-cloud-arrow-up"></i></button>
                <input type="file" ref={filelogoref}  onChange={handleFileChange} name="logo" className='hidden'/>
                 
                <p className='text-primary font-poppins mt-2 text-md font-[400] '>
                    {logofile ? `Selected File: ${logofile.name}` : "No file selected"}
                </p>


            </div>
            <div className='mt-9'>
                <label className='text-[#233d60] font-poppins font-[600] mb-4'>Role / Designation</label>
                <input type="text" name="role" placeholder='Enter Your Role / Designation' className='w-full p-3 rounded-lg border border-gray-300 mt-4 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-9'>
                <label className='text-[#233d60] font-poppins font-[600] mb-4'>Social Media / Website</label>
                <input type="text" name="socialmedia" placeholder='Enter Social Media or Website Link' className='w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-9'>
                <label className='text-[#233d60] font-poppins font-[600] mb-4'>Describe Your Goal For Collaboration</label>
                <textarea name="goal" rows="4" placeholder='Describe Your Goal For Collaboration' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-9'>
                <label className='text-[#233d60] font-poppins font-[600] mb-4'>Does You Mission Align with Project Soch</label>
                <input type="text" name="mission" placeholder='Describe How Your Mission Aligns with Project Soch' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none'/>
            </div>
            <div className='mt-12'>
                <button type="submit" className='bg-[#FF7A00] text-white w-full px-6 py-3 rounded-lg mt-4'>Submit</button>
            </div>
           
        </form>
            
        </div>
      
    </div>
  )
}

export default Partner
