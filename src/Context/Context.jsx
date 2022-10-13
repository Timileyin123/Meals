import React, {useState,useContext, useEffect} from 'react';
import axios from "axios";
const AppContext = React.createContext({meals: [], Loading: false, searchTerm: " "})

    const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    const AppProvider = ({children}) =>{
        const [Loading, setLoading] = useState('false')
        const [meals, setMeals] = useState ([])
        const [searchTerm, setSearchTerm] = useState(" ")

        // Using Axios to Fetch Data
         const fetchMeals = async (url) => {
             setLoading(true)
             try{
             const request = await axios(url)
             if(request.data){
            setMeals(request.data.meals) 
             } else{
                 setMeals([])
             }  
            } catch(e){
                 console.log(e.request)
            }
            setLoading(false)

          // Using Fetch API
     //  const fetchData = async () => {
        
                // const request = await fetch("https://randomuser.me/api/ ")
                // const data = await request.json()
              //   console.log(data)
            //  }  catch(error) {
                 // console.log(error)
             // }
    
       // }
        }
     useEffect(()=>{
        fetchMeals(`${mealsUrl}${searchTerm}`)
    // fetchData()
    },[searchTerm])

    useEffect (()=>{
        fetchMeals(mealsUrl)
    }, [])

     useEffect(()=>{
        if(!searchTerm)
         return fetchMeals(`${mealsUrl}${searchTerm}`)
     },[searchTerm])

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }
     return(
         <AppContext.Provider value={{Loading, meals, setSearchTerm, fetchRandomMeal}}>
            {children}
         </AppContext.Provider>
     );
 }

 export {AppContext, AppProvider};

export const useGlobalContext = () => {
    return useContext(AppContext)
}