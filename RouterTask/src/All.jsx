import React from 'react';

const courses = [
  {
    title: "Data Science Course 1",
    description: "Explore the fundamentals of data science, including data analysis, machine learning, and statistical modeling. This course provides hands-on experience with data manipulation and visualization techniques.",
    image: "https://wallpaperaccess.com/full/1704555.jpg"
  },
  {
    title: "Data Science Course 2",
    description: "Advance your data science skills with a focus on big data and machine learning algorithms. Learn to build predictive models, handle large datasets, and extract meaningful insights from complex data.",
    image: "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Understanding-Data-Science-1020x1024.png"
  },{
    title: "Data Science Course 3",
    description: "Advance your data science skills with a focus on big data and machine learning algorithms. Learn to build predictive models, handle large datasets, and extract meaningful insights from complex data.",
    image: "https://th.bing.com/th/id/OIP.3uJswFjpWEy1O8HM70_44AHaE6?rs=1&pid=ImgDetMain"
  },{
    title: "Data Science Course 4",
    description: "Explore the fundamentals of data science, including data analysis, machine learning, and statistical modeling. This course provides hands-on experience with data manipulation and visualization techniques.",
    image: "https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg"
  },
  {
    title: "Cyber Security Course 1",
    description: "Learn the basics of cyber security, including network security, encryption, and threat analysis. This course provides essential knowledge to protect systems and data from various cyber threats.",
    image: "https://th.bing.com/th/id/OSK.HEROZC41T1dwnXGKaHSJY4FhwsZ8ScDUkDNAS6EX1TMurac?rs=1&pid=ImgDetMain"
  },
  {
    title: "Cyber Security Course 2",
    description: "Deepen your understanding of advanced cyber security concepts such as penetration testing and incident response. Gain practical experience in securing IT environments and responding to security incidents.",
    image: "https://th.bing.com/th/id/OIP.ALOvxQ3bMPaT9_yMYWrcIwHaEK?rs=1&pid=ImgDetMain"
  }, {
    title: "Cyber Security Course 3",
    description: "Learn the basics of cyber security, including network security, encryption, and threat analysis. This course provides essential knowledge to protect systems and data from various cyber threats.",
    image: "https://th.bing.com/th/id/R.1610653b3dacd4796aa3e27647fcd37d?rik=aRBti0D0tPik%2fA&riu=http%3a%2f%2fwww.tcw-gav.com%2fwp-content%2fuploads%2f2016%2f11%2fComputer-Security.jpg&ehk=dNuRmkRa2UIYqCskVFGlEB3FelwIILnBu7w5xIernRY%3d&risl=&pid=ImgRaw&r=0"
  },{
    title: "Cyber Security Course 4",
    description: "Deepen your understanding of advanced cyber security concepts such as penetration testing and incident response. Gain practical experience in securing IT environments and responding to security incidents.",
    image: "https://th.bing.com/th/id/OIP.beekNXRA04cwREBq7hGyLAHaDy?rs=1&pid=ImgDetMain"
  },
  {
    title: "Full Stack Course 1",
    description: "Master full stack development with this course covering both front-end and back-end technologies. Learn to build and deploy web applications using modern frameworks and tools for a complete development experience.",
    image: "https://th.bing.com/th/id/OIP.FXypz32SSqmZDY2cKBMxgAAAAA?rs=1&pid=ImgDetMain"
  },
  {
    title: "Full Stack Course 2",
    description: "Explore advanced topics in full stack development, including API integration and performance optimization. Gain experience in creating scalable applications and modern development practices for robust web solutions.",
    image: "https://th.bing.com/th/id/OIP.PMBiSa-JBIhSrPqckRRxyQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },{
    title: "Full Stack Course 3",
    description: "Master full stack development with this course covering both front-end and back-end technologies. Learn to build and deploy web applications using modern frameworks and tools for a complete development experience.",
    image: "https://th.bing.com/th/id/OIP.bvGcJVFaGXeTZ9M64NpvCwAAAA?rs=1&pid=ImgDetMain"
  }, {
    title: "Full Stack Course 2",
    description: "Explore advanced topics in full stack development, including API integration and performance optimization. Gain experience in creating scalable applications and modern development practices for robust web solutions.",
    image: "https://thetapacademy.com/wp-content/uploads/2023/01/java-full-stack-syllabus-scaled.jpg"
  }
];

const All = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="card border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;







