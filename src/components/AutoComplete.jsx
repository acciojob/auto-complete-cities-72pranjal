import React from 'react'

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", 
  "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", 
  "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", 
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", 
  "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", 
  "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Jabalpur", "Gwalior", "Coimbatore", 
  "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", 
  "Solapur", "Hubli-Dharwad", "Bareilly", "Moradabad", "Mysore", "Tiruchirappalli", 
  "Tiruppur", "Bhubaneswar", "Salem", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", 
  "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", 
  "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", 
  "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", 
  "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Jammu", "Sangli", 
  "Mangalore", "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", 
  "Jalgaon", "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Kurnool", 
  "Rajpur Sonarpur", "Bokaro", "South Dumdum", "Bellary", "Patiala", "Gopalpur"
];
function AutoComplete() {
  const [cities, setCities] = React.useState(indianCities)
  const [selectedCity, setSelectedCity] = React.useState('')
  const handleInput = (e) => {
    const value = e.target.value
    setSelectedCity(value)
    const filteredCities = indianCities.filter(city => city.toLowerCase().includes(value.toLowerCase()))
    setCities(filteredCities)
  }
  return (
    <div className='main-container'>
        <h2>Search cities of india:</h2>
        <input type="text" onChange={handleInput} value={selectedCity} />
        <ul className='cities-container'>
            {cities.map((city, index) => {
                return <li onClick={()=> setSelectedCity(city)} key={index}>{city}</li>
            })}
        </ul>
    </div>
  )
}

export default AutoComplete