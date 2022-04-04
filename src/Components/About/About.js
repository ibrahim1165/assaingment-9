import React from 'react';

const About = () => {
    return (
        <div >
        <div className="mx-4 py-4 px-8 grid  md:grid-cols-2 gap-8">
        <p> what is  Context api?  <br /> <small className="text-sm text-gray-700">
          কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট স্ট্রাকচার <br/> যা আপনাকে অনন্য বিবরণ আদান-প্রদান করতে সক্ষম করে  <br /> এবং আপনার অ্যাপ্লিকেশনের সমস্ত স্তর থেকে prop-drilling সমাধানে সহায়তা করে।
          </small>
          </p>
          <p>
              Inline: <small className="text-sm text-gray-700">
              এটি একটি উপাদান ইনলাইন বা একই লাইনে প্রদর্শন করে। অন্য কথায়, ইনলাইন উপাদানগুলি একটি নতুন লাইনে শুরু হয় না এবং শুধুমাত্র এর বিষয়বস্তুর মতো প্রস্থ নেয়। সুতরাং, আপনি যদি কোনো প্রস্থ এবং উচ্চতা সেট করার চেষ্টা করেন, তাহলে এর কোনো প্রভাব থাকবে না।
              </small>
          </p>
          <p> Inline-Blog: <small  className="text-sm text-gray-700">
          inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.
          </small>

          </p>
        </div>
        </div>
    );
};

export default About;