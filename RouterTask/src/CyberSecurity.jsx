import React from 'react';

const cyberSecurityCourses = [
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
  }
];

const CyberSecurity = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cyber Security</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cyberSecurityCourses.map((course, index) => (
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

export default CyberSecurity;




