import React, { createContext, useState, useEffect} from "react"; 

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const apiUrl = 'https://win24-assignment.azurewebsites.net/api/';
  const [accordionItems, setAccordionItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [formInput, setFormInput] = useState({ email: '' });
  const [isResponseOk, setIsResponseOk] = useState('');


  const fetchAccordionItems = async () => {
    const res = await fetch(apiUrl + 'faq');
    const data = await res.json();
    
    setAccordionItems(data);
  }

  const fetchTestimonialItems = async () => {
    const res = await fetch(apiUrl + 'testimonials');
    const data = await res.json();
    setTestimonials(data);
  }

  const handleSubscribe = async () => {
    setIsResponseOk(false)
    const res = await fetch(apiUrl + 'forms/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    })

    if (res.ok) {
      setIsResponseOk('true');
    } else {
      setIsResponseOk('false');
    }
  }


  useEffect(() => {
    fetchAccordionItems();
    fetchTestimonialItems();
  }, [])

  
  return (
    <AppContext.Provider value={{ accordionItems, testimonials, handleSubscribe, formInput, setFormInput, isResponseOk }} >
      {children}
    </AppContext.Provider> 
      
  )
}

export default AppProvider