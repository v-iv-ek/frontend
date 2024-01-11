import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

function Card(props) {
    let dispatch=useDispatchCart();
    let data=useCart();
    let options=props.options;
    let priceOption=Object.keys(options || {});
    const priceRef=useRef();
    // let foodItems=props.foodItem;
    // console.log( foodItems.name);
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("");
    let finalPrice=qty*parseInt(options[size]);
    const handleAddToCart=async()=>{
        let food=[]
        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item;

                break;
            }
        }
        if(food !==[]){
            if(food.size===size){
            await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
            return
        }
        else if(food.size !==size) {

            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
            // console.log("size not equal at 32")
            return
        }
        return
    }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
        console.log("error at 38");
    
         
    }
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (

        <div>
            <div className="card mt-3" style={{ "width": " 18rem", "maxHeight": "360px" }}>
                
                <img className="card-img-top" src={props.foodItem.img} alt="..." style={{height:"120px",objectFit:"fill"}} />
                
                <div className="card-body">
                    
                        <h5 className="card-title">{props.foodItem.name}</h5>
                      
                    
                        
                    <div className='container w-100'>
                        <select className='d-inline m-2 h-100  bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (

                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className=' d-inline m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {
                                priceOption.map((item)=>{
                                    return <option key={item} value={item}>{item}</option>

                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price :&#8377; {finalPrice}/-
                        </div>
                        <hr/>
                        <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>


                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card