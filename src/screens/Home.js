import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousal from '../components/Carousal';
import { Link } from 'react-router-dom'


function Home() {
    const [search,setSearch]=useState('');
    const [foodItem,setFoodItem]=useState([]);
    const [foodCat,setFoodCat]=useState([]);

    const loadata=async()=>{
        let response=await fetch("http://localhost:5000/api/foodData",{
            method:"POST",
            headers:{
                'Content-Type':'Application/json'
            }
        });
        response=await response.json();
        // console.log(response[1])

        setFoodCat(response[1]);
        setFoodItem(response[0]);
    }
    useEffect(()=>{
        loadata();
    },[])
    
    return (
        <div>
            <div><Navbar /></div>
            <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id="carousal">
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <div class="d-flex justify-content-center">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              {/* <button class="btn btn-outline-success my-2 my-sm-0 bg-success text-white" type="submit">Search</button> */}
            </div>

          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?fruits" alt="First slide" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?momos" alt="Second slide" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?fruit" alt="Third slide" style={{ filter: "brightness(30%)" }} />
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
            </div>
          <div className='container'>
            {
              foodCat !==[]
              ?foodCat.map((data)=>{
                return(
                  <div className='row mb-3'> 
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                    </div>
                    <hr/>
                    {
                      foodItem !== []? 
                      foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItem=>{
                        return(
                          <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                            <Card  foodItem={filterItem}
                            options={filterItem.options[0]}
                            />
                            </div>
                        )
                      })
                      
                      
                      :"No such data"
                    }
                 </div>
                )
              })
              :"false"
              
            }
            
          </div>


























            {/* <div className="container">
                {
                    foodCat !==[]
                    ?foodCat.map((data)=>{
                        return (
                            <div className='row mb-3'>
                                
                            <div key={data._id} className='fs-3 m-3'>
                             {data.CategoryName}
                            </div>
                            <hr/>
                            {
                                foodItem !==[]
                                ?
                                foodItem.filter((item)=>(item.Categoryname === data.CatagoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                .map(filterItems=>{
                                    return(
                                    
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">

                                             <Card foodItem={filterItems}

                                                  options={filterItems.options[0]}
                                                  img={filterItems.img}
                                                
                                                  ></Card>
                                        </div>
                                    )
                                }
                                ):<div>No such data</div>
                            }
                            
                            </div>
                        )
                    }):<div>Not loaded</div>
                    
                }
              
            </div>             */}
            <div><Footer /></div>
        </div>

    )
}

export default Home