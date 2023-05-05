import React from 'react'

function Categories() {
const [activeCategories, setActiveCategories] = React.useState(0)
const categories = ['Усі товари', 'Категорія 1', 'Категорія 2', 'Категорія 3', 'Категорія 4', 'Категорія 5']


   return (
     <div className="categories">
       <ul>
         {
            categories.map((value, index) => (
            <li key={value} onClick={() => setActiveCategories(index)} className={activeCategories === index ? 'active' : ''}>{value}</li>
            ))
         }
       </ul>
     </div>
   );
 }

 export default Categories
