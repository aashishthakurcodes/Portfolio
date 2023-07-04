import React from 'react'

const Card = (props) => {
    let options=props.options;
    let priceOption=Object.keys(options);
    
  return (
    <div>
        <div>
            <img src={props.imgSrc} alt='img'/>
            <h1>{props.foodname}</h1>
            <p>rygvhjbjbcbcjbcwdwhdjwndjwndjjndjjbcjbjbjbcbhjwbbh</p>
            <div>
                <select>
                   {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                   })}
                   </select>

                 <select>
                    {priceOption.map((data)=>(
                        <option key={data} value={data}>{data}</option>
                    ))}
                    </select>  

            </div>
            <div>
              Total Price
            </div>
            <hr></hr>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card