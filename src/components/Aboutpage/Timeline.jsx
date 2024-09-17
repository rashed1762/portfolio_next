import React from 'react'


const Timeline = () => {
    const timelineData = [
        {
          date: "2013-2014",
          school: "SSC",
          title: "K.B Hish school",
          content: " I Completed My Secondary School Certificate (SSC) in Agriculture uiversity High School",
          result:"GPA 5",
          Division:"Science",
        },
        {
          date: "2015-2016",
          school: "HSC",
          title: "NoterDame college,Mymensingh",
          content: "I Completed My  Higher Secondary Certificate (HSC) in NoterDame collEge Mymensing",
          result:"GPA 4.68",
          Division:"Science",
        },
        {
          date: "2018-2022",
          school: "BSc",
          title: "Daffofil International University,Dhaka",
          content: "I Completed My BSc in Daffodil International University",
          result:"CGPA 3.4",
          Division:"Computer Science and Engineering",
        },
      ];
    
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Education</h1>
      <div className="relative">
        <div className="border-r-2 border-gray-900 absolute h-full top-0 left-1/2 transform -translate-x-1/2 "></div>
        <div className="space-y-12 ">
          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="w-5/12">
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className=" border-b-2 border-indigo-200 font-semibold text-xl mb-2">{event.title}</h3>
                  <p>{event.content}</p>
                  <p>Result:{event.result}</p>
                  <p>Group:{event.Division}</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-blue-500 rounded-full border-2 border-white z-10"></div>
              <div className="w-5/12 text-center">
                <div className="text-lg font-semibold">{event.date}
                    <h1>({event.school})</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline