import React from 'react'
import './App.css'
import Card from './Components/Card'
const App = () => {

  const jobOpenings = [
  {
    id: 1,
    companyName: "Google",
    brandLogo:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
    role: "Frontend Developer",
    tag1: "Junior Level",
    tag2: "Remote",
    pay: "$25/hour",
    location: "Mumbai, India",
    datePosted: "5 days ago"
  },
  {
    id: 2,
    companyName: "Microsoft",
    brandLogo:
      "https://images.unsplash.com/photo-1633419461186-7d40a38105ec",
    role: "Backend Engineer",
    tag1: "Senior Level",
    tag2: "Hybrid",
    pay: "$45/hour",
    location: "Mumbai, India",
    datePosted: "2 weeks ago"
  },
  {
    id: 3,
    companyName: "Amazon",
    brandLogo:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c",
    role: "Cloud Engineer",
    tag1: "Mid Level",
    tag2: "On Site",
    pay: "$35/hour",
    location: "Mumbai, India",
    datePosted: "10 days ago"
  },
  {
    id: 4,
    companyName: "Meta",
    brandLogo:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    role: "React Developer",
    tag1: "Junior Level",
    tag2: "Internship",
    pay: "$18/hour",
    location: "Mumbai, India",
    datePosted: "1 week ago"
  },
  {
    id: 5,
    companyName: "Netflix",
    brandLogo:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
    role: "UI/UX Designer",
    tag1: "Senior Level",
    tag2: "Remote",
    pay: "$40/hour",
    location: "Mumbai, India",
    datePosted: "3 days ago"
  },
  {
    id: 6,
    companyName: "Adobe",
    brandLogo:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef",
    role: "Software Engineer",
    tag1: "Mid Level",
    tag2: "Hybrid",
    pay: "$32/hour",
    location: "Mumbai, India",
    datePosted: "4 weeks ago"
  },
  {
    id: 7,
    companyName: "Spotify",
    brandLogo:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff",
    role: "Mobile App Developer",
    tag1: "Junior Level",
    tag2: "On Site",
    pay: "$22/hour",
    location: "Mumbai, India",
    datePosted: "6 days ago"
  },
  {
    id: 8,
    companyName: "Uber",
    brandLogo:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    role: "DevOps Engineer",
    tag1: "Senior Level",
    tag2: "Contract",
    pay: "$50/hour",
    location: "Mumbai, India",
    datePosted: "8 weeks ago"
  },
  {
    id: 9,
    companyName: "Airbnb",
    brandLogo:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    role: "MERN Stack Developer",
    tag1: "Mid Level",
    tag2: "Remote",
    pay: "$28/hour",
    location: "Mumbai, India",
    datePosted: "12 days ago"
  },
  {
    id: 10,
    companyName: "LinkedIn",
    brandLogo:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c",
    role: "Data Analyst",
    tag1: "Senior Level",
    tag2: "Full Time",
    pay: "$38/hour",
    location: "Mumbai, India",
    datePosted: "10 weeks ago"
  }
];

console.log(jobOpenings);
    return (

        <div className='parent'>
          {
             jobOpenings.map(function(elem ,index){
                console.log(index);
                return <Card key={index} company={elem.companyName } role={elem.role} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
             })
            }
        </div>

    )
}

export default App