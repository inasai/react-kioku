import React, {useState} from 'react'

function WareBlock({ title, price }) {
   const [wareCount, setWareCount] = useState(0)

   return (
      <div class="ware-block">
         <img
            class="ware-block__image"
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-2.png"
            alt="Ware"
         />
         <h4 class="ware-block__title">{title}</h4>
         <div class="ware-block__selector">
            <ul>
               <li class="active">Пункт1</li>
               <li>Пункт2</li>
            </ul>
            <ul>
               <li class="active">вибір1</li>
               <li>вибір2</li>
               <li>вибір3</li>
            </ul>
         </div>
         <div class="ware-block__bottom">
            <div class="ware-block__price">{price} ₴</div>
            <button class="button button--outline button--add">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  />
               </svg>
               <span>Додати</span>
               <i>{wareCount}</i>
            </button>
         </div>
      </div>
   )
}

export default WareBlock