import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Comment } from "react-loader-spinner";

const ContactUs = () => {
  const ServiceId = "service_rt8txz3";
  const TemplateId = "template_hr26a6c";
  const PublicKey = "JIrSQu9e8Afu-oG8U";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let haveError = false;

    if (!formData.name?.trim()) {
      haveError = true;
      toast.error("Name is required");
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      haveError = true;
      toast.error("Please enter valid email");
    }

    if (!formData.message?.trim()) {
      haveError = true;
      toast.error("Message is required");
    }

    return haveError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) return;

    setLoading(true);
    emailjs
      .sendForm(ServiceId, TemplateId, e.target, PublicKey)
      .then((result) => {
        console.log("Email sent successfully!");

        toast.success("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setLoading(false);

        console.log("Form submitted:", result);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Something went wrong");
        // setErrors((prev) => ({ ...prev, server: "Something went wrong" }));
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[75vh] mb-20 md:mb-40">
      <div className="bg-[#F9DB79] h-[30px] hidden md:flex"></div>
      <div className="max-w-[1280px] mx-auto p-5 md:p-9">
        {/* ------------Heading part ------------ */}
        <div
          className="w-full flex flex-col items-start md:items-center justify-center font-primaryFont  font-semibold
         text-[#2F2E2E] "
        >
          <h1 className="uppercase tracking-wider md:tracking-[18px] text-[30px] md:text-[55px]">
            Leave a Message
          </h1>
          <p className=" font-thin tracking-wide md:tracking-wider leading-5 md:text-[18px] mt-2 md:mt-0">
            To help us find the best for you, send the preferred message to us,
            for the best customer support.
          </p>
        </div>

        {/* ------------COntact Form ------------ */}
        <form
          onSubmit={handleSubmit}
          action="submit"
          className="max-w- flex flex-col items-center justify-center mt-10 md:mt-20"
        >
          {/* ----- Form data */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData?.name}
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData?.email}
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Number
              </label>
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                value={formData?.phone}
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Number"
              />
            </div>
          </div>

          <hr className="text-[#DFDFDF] w-full  my-10 mx-10  border-solid border-[1px]" />

          <div className="w-full">
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Comment here
              </label>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                value={formData?.message}
                required
                className="border border-black p-2 h-[20vh]"
                placeholder="Leave a Message ........."
              />
            </div>
          </div>

          <div className="w-full mt-10 flex items-center justify-center">
            <button className="bg-black text-white p-3 px-5 font-primaryFont tracking-wider text-xl">
              Send Now
            </button>
          </div>
        </form>
      </div>
      {loading && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 right-0 bg-black/70">
          <Comment
            visible={true}
            height="200"
            width="200"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F9DB79"
          />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
