// import React, { useRef, useState } from 'react'

// function Partner() {

//     const [formData , setFormData] = useState([{
//     name : "",
//     email : "",
//     typeOfPartner : [],
//     logo : null,
//     role : "",
//     socialMedia : "",
//     goals: "",
//     mission: ""
    
//     }])



//     const [logofile, setLogofile] = useState(null);
//     const filelogoref = useRef(null);
//     const handleFileUpload = (e) => {
//         e.preventDefault();
//         if (filelogoref.current) {
//             filelogoref.current.click();
//         }
//     }
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setLogofile(file);
//     }

//     const PartnerTypes = [
//         "Individual",
//         "Financial Sponsor",
//         "Technical Partner",
//         "Sociacl Media Outreach Partner",
//         "Assets Sponsor",
//         "Educational Sponsor"
//     ]
//     return (
//         <div className='min-h-screen mx-auto bg-gray-100'>
//             <h1 className='text-center w-full text-4xl  text-primary font-[900] font-poppins mt-10'>Partner With Us</h1>
//             <div className='w-full max-w-4xl shadow-2xl p-6 rounded-lg bg-white my-12 mx-auto'>
//                 <div className='w-full text-center my-6'>
//                     <h1 className='text-4xl text-secondary font-poppins font-[900] mt-10 '>Project Soch</h1>
//                     <h4 className='font-poppins font-[600] mt-2 text-primary'>Partner Collaboration Form</h4>

//                 </div>

//                 <form action="" className=' '>
//                     <div>
//                         <label htmlFor="name" className='text-[#233d60] font-poppins font-[600] mb-4'>Full Name / Organization Name</label>
//                         <input type="text" name="name" id="name" required placeholder='Enter Full Name' className='w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-9'>
//                         <label htmlFor="email" className='text-[#233d60] font-poppins font-[600] mb-4'>Email</label>
//                         <input type="email" name="email" id="email" placeholder='Enter Email Address' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-9'>
//                         <label htmlFor="top" className='text-[#233d60] font-poppins font-[600] mb-4'>Type of Partner</label>
//                         <div className="mt-4">
//                             {
//                                 PartnerTypes.map((type, index) => (
//                                     <div key={index} className='flex items-center mt-1 '>
//                                         <input type="checkbox" name="top" value={type} className='mr-2' />
//                                         <label htmlFor={type} className='font-poppins text-md'>{type}</label>
//                                     </div>
//                                 ))
//                             }

//                         </div>

//                     </div>
//                     <div className='text-left mt-9'>
//                         <label className='text-[#233d60] font-poppins font-[600] mb-4'>Logo (HD File)</label>
//                         <p className='mt-2 text-primary font-poppins opacity-70'>Upload 1 supported file. Max 10 MB.</p>

//                         <button className='bg-secondary text-white px-4 py-2 rounded-lg mt-4' onClick={handleFileUpload}>Upload Logo <i class="fa-solid fa-cloud-arrow-up"></i></button>
//                         <input type="file" ref={filelogoref} onChange={handleFileChange} name="logo" className='hidden' />

//                         <p className='text-primary font-poppins mt-2 text-md font-[400] '>
//                             {logofile && `Selected File: ${logofile.name}`}
//                         </p>


//                     </div>
//                     <div className='mt-9'>
//                         <label className='text-[#233d60] font-poppins font-[600] mb-4'>Role / Designation</label>
//                         <input type="text" name="role" placeholder='Enter Your Role / Designation' className='w-full p-3 rounded-lg border border-gray-300 mt-4 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-9'>
//                         <label className='text-[#233d60] font-poppins font-[600] mb-4'>Social Media / Website</label>
//                         <input type="text" name="socialmedia" placeholder='Enter Social Media or Website Link' className='w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-9'>
//                         <label className='text-[#233d60] font-poppins font-[600] mb-4'>Describe Your Goal For Collaboration</label>
//                         <textarea name="goal" rows="4" placeholder='Describe Your Goal For Collaboration' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-9'>
//                         <label className='text-[#233d60] font-poppins font-[600] mb-4'>Does You Mission Align with Project Soch</label>
//                         <input type="text" name="mission" placeholder='Describe How Your Mission Aligns with Project Soch' className='w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none' />
//                     </div>
//                     <div className='mt-12'>
//                         <button type="submit" className='bg-[#FF7A00] text-white w-full px-6 py-3 rounded-lg mt-4'>Submit</button>
//                     </div>

//                 </form>

//             </div>

//         </div>
//     )
// }

// export default Partner



import React, { useRef, useState } from "react";
import Toast from "../components/Toast"
import FadeInSection from "../components/Atoms/FadeInsections";

function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    typeOfPartner: [],
    logo: null,
    role: "",
    socialMedia: "",
    goals: "",
    mission: "",
  });

  const [logofile, setLogofile] = useState(null);
  const filelogoref = useRef(null);
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" });

  const PartnerTypes = [
    "Individual",
    "Financial Sponsor",
    "Technical Partner",
    "Social Media Outreach Partner",
    "Assets Sponsor",
    "Educational Sponsor",
  ];

  // Toast helper
  const showToast = (message, type = "success") => {
    setToast({ isVisible: true, message, type });
  };

  //  Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle Checkbox
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updatedTypes = [...prev.typeOfPartner];
      if (checked) updatedTypes.push(value);
      else updatedTypes = updatedTypes.filter((t) => t !== value);
      return { ...prev, typeOfPartner: updatedTypes };
    });
  };

  // handle logo File upload
  const handleFileUpload = (e) => {
    e.preventDefault();
    if (filelogoref.current) filelogoref.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      showToast("File size must be less than 10MB", "error");
      return;
    }
    setLogofile(file);
    setFormData((prev) => ({ ...prev, logo: file }));
  };

  //   Validation function
  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast("Full name is required", "error");
      return false;
    }
    if (!formData.email.trim()) {
      showToast("Email is required", "error");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showToast("Invalid email address", "error");
      return false;
    }
    if (formData.typeOfPartner.length === 0) {
      showToast("Please select at least one partner type", "error");
      return false;
    }
    if (!formData.role.trim()) {
      showToast("Role / Designation is required", "error");
      return false;
    }
    if (!formData.goals.trim()) {
      showToast("Please describe your goal", "error");
      return false;
    }
    if (!formData.mission.trim()) {
      showToast("Please describe your mission", "error");
      return false;
    }
    return true;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => dataToSend.append(key, v));
      } else {
        dataToSend.append(key, value);
      }
    });

    // call api here
  };

  return (
    <div className="min-h-screen mx-auto bg-gray-100 relative">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
        duration={3000}
      />

      <h1 className="text-center w-full text-4xl text-primary font-[900] font-poppins mt-10">
        Partner With Us
      </h1>
      <FadeInSection>

      <div className="w-full max-w-4xl shadow-2xl p-6 rounded-lg bg-white my-12 mx-auto">
        
        <div className="w-full text-center my-6">
          <h1 className="text-4xl text-secondary font-poppins font-[900] mt-10">
            Project Soch
          </h1>
          <h4 className="font-poppins font-[600] mt-2 text-primary">
            Partner Collaboration Form
          </h4>
        </div>

        

        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Full Name / Organization Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Type of Partner
            </label>
            <div className="mt-4">
              {PartnerTypes.map((type, index) => (
                <div key={index} className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    value={type}
                    checked={formData.typeOfPartner.includes(type)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label className="font-poppins text-md">{type}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Logo (HD File)
            </label>
            <p className="mt-2 text-primary font-poppins opacity-70">
              Upload 1 supported file. Max 10 MB.
            </p>
            <button
              className="bg-secondary text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleFileUpload}
              type="button"
            >
              Upload Logo <i className="fa-solid fa-cloud-arrow-up"></i>
            </button>
            <input
              type="file"
              ref={filelogoref}
              onChange={handleFileChange}
              name="logo"
              className="hidden"
            />
            {logofile && (
              <p className="text-primary font-poppins mt-2 text-md font-[400]">
                Selected File: {logofile.name}
              </p>
            )}
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Role / Designation
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter Your Role / Designation"
              className="w-full p-3 rounded-lg border border-gray-300 mt-4 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Social Media / Website
            </label>
            <input
              type="text"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              placeholder="Enter Social Media or Website Link"
              className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Describe Your Goal For Collaboration
            </label>
            <textarea
              name="goals"
              rows="4"
              value={formData.goals}
              onChange={handleChange}
              placeholder="Describe Your Goal For Collaboration"
              className="w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-9">
            <label className="text-[#233d60] font-poppins font-[600] mb-4">
              Does Your Mission Align with Project Soch
            </label>
            <input
              type="text"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              placeholder="Describe How Your Mission Aligns with Project Soch"
              className="w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7A00] outline-none"
            />
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="bg-[#FF7A00] text-white w-full px-6 py-3 rounded-lg mt-4"
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
      </FadeInSection>
    </div>
  );
}

export default Partner;
