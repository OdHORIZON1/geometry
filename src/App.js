import React, {useState} from 'react'

function App() {

  const handleClick = (e)=>{
    e.preventDefault();
    setTitle(e.target.innerText);
    setSurface('');
    setVolume('');
    setPerimeter('');
    if(e.target.innerText.toLowerCase() === 'square'){
        setBool(true);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
    else if(e.target.innerText.toLowerCase() === 'rectangle'){
        setBool(false);
        setBool1(false);
        setBool2(true);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
    
    else if(e.target.innerText.toLowerCase() === 'circle'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(true);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
    
    else if(e.target.innerText.toLowerCase() === 'cube'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(true);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
    
    else if(e.target.innerText.toLowerCase() === 'triangle'){
        setBool(false);
        setBool1(true);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'pentagon'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(true);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'heptagon'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(true);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'hexagon'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(true);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'oval'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(true);
        setBool9(false);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'cylinder'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(true);
        setBool10(false);
        setBool11(false);
    }
     else if(e.target.innerText.toLowerCase() === 'octagon'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(true);
        setBool11(false);
        
    }
    
     else if(e.target.innerText.toLowerCase() === 'cone'){
        setBool(false);
        setBool1(false);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setBool5(false);
        setBool6(false);
        setBool7(false);
        setBool8(false);
        setBool9(false);
        setBool10(false);
        setBool11(true);
        
    }
  }

 

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(value !== ''){
      if(bool){
        setSurface(value * value);
        setVolume('No volume');
        setPerimeter(value * 4);
      }
      else if(bool1){
        
            if(value1 !== '' && (value2 !== '' && value3 !== '')){
            setPerimeter(parseInt(value) + parseInt(value3) + parseInt(value2));
            setSurface((value1 * value) / 2);
            setVolume('No volume');
            }  

            if((value2 === '' || value3 === '') && value1 === '') {
             setPerimeter('fields empty');
             setSurface('fields Empty');
             setVolume('No volume');
            }
            if((value2 !== '' && value3 !== '') && value1 === '' ){
            setPerimeter(parseInt(value) + parseInt(value3) + parseInt(value2));
            setSurface('Fields empty');
            setVolume('No volume');
            }
            
            if(value1 !== '' && (value2 === '' || value3 === '')){
              setPerimeter('Fields empty');
            setSurface((value * value1) / 2);
            setVolume('No volume');
            }
            
            setValue('');
            setValue1('');
            setValue2('');
            setValue3('');
          
                }

      else if(bool2){
        if(value1 !== ''){
          setPerimeter((parseInt(value) + parseInt(value1)) * 2);
          setSurface(value * value1);
          setVolume('no Volume');
        }
        else{
          setPerimeter('Empty fields');
          setSurface('Empty fields');
          setVolume('no Volume');
        }
        setValue('');
        setValue1('');
      }

      else if(bool3){
        setSurface((3.14 * (value * value)).toFixed(2));
        setVolume('No volume');
        setPerimeter((2 * 3.14 * value).toFixed(2));
        setValue('');
      }
      else if(bool4){
        setSurface(6 * value * value);
        setVolume(value * value * value);
        setPerimeter('undefined');
        setValue('');
      }
      else if(bool5){
        setSurface((1.7204 * value * value).toFixed(2));
        setPerimeter(value * 5);
        setVolume('No volume');
      }
      else if(bool6){
       setSurface((((7/4) * 2.078 ) * value * value).toFixed(2));
       setPerimeter(value * 7);
       setVolume('No volume');
      }
      else if(bool7){
       setSurface((2.5980 * value * value).toFixed(2));
       setPerimeter(value * 6);
       setVolume('No volume');
      }
      else if(bool8){
        if(value1 !== ''){
        setSurface((3.14 * value * value1).toFixed(2));
        setVolume('No volume');
        setPerimeter((6.28 * (Math.sqrt(((value1 * value1) + (value * value))/2))).toFixed(2));
        setValue1('');
        }
      }
      else if(bool9){
        if(value1 !== ''){
        setSurface(((6.28 * value * value1) + (6.28 * value * value)).toFixed(2));
        setVolume(((3.14 * value * value * value1).toFixed(2)));
        setPerimeter('undefined');
        setValue1('');
        }
      }

      else if(bool10){
        setSurface(((2 * (1 + Math.sqrt(2))) * value * value).toFixed(2));
        setVolume('No Volume');
        setPerimeter(value * 8);
      }
      else if(bool11){
        if(value1 !== ''){
        let vv = ((value * value) + (value1 * value1)).toFixed(5);       
        let vvar = Math.sqrt(vv);
        console.log(vvar);
       setSurface((3.141592653589793238462643383279502 * value * (parseInt(value) + parseInt(vvar))).toFixed(2));
       setVolume((3.14 * value * value * (value1 / 3)).toFixed(2));
       setPerimeter('undefined');
       setValue1('');
        }
      }
    }
    setValue('');
    
  }

  const handleChange = (e)=>{
    setValue(e.target.value);
    console.log(e.target.value)
  }
  const handleChange1 = (e)=>{
    setValue1(e.target.value);
    console.log(e.target.value)
  }
    const handleChange2 = (e)=>{
    setValue2(e.target.value);
    console.log(e.target.value)
  }
    const handleChange3 = (e)=>{
    setValue3(e.target.value);
    console.log(e.target.value)
  }
  
  const [surface, setSurface] = useState('');
  const [title, setTitle] = useState('Square');
  const [volume, setVolume] = useState('');
  const [perimeter, setPerimeter] = useState('');
  const [bool, setBool] = useState(true);
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);
  const [bool5, setBool5] = useState(false);
  const [bool6, setBool6] = useState(false);
  const [bool7, setBool7] = useState(false);
  const [bool8, setBool8] = useState(false);
  const [bool9, setBool9] = useState(false);
  const [bool10, setBool10] = useState(false);
  const [bool11, setBool11] = useState(false);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  return (
  <section className="container">
    <div className="cont">
      <div className="title">OdGeometry</div>
      <div className="shapes">
       
        <ul className="shapes-list">
          <li><a className="link multiple" href="#" name="" onClick={handleClick}>Triangle</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Square</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Rectangle</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Circle</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Octagon</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Heptagon</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Hexagon</a></li>
          <li><a className="link surface per" href="#" name="" onClick={handleClick}>Pentagon</a></li>
          <li><a className="link per volume" href="#" name="" onClick={handleClick}>Cylinder</a></li>
          <li><a className="link per volume" href="#" name="" onClick={handleClick}>Cone</a></li>
          <li><a className="link per volume" href="#" name="" onClick={handleClick}>Cube</a></li>
          <li><a className="link per surface" href="#" name="" onClick={handleClick}>Oval</a></li>
        </ul>
      </div>
      <div className="titl">{title}</div>
      <div className="det">
        <span className="surfa"><span>Surface :</span> {surface}</span>
        <span className="peri"><span>Perimeter :</span> {perimeter} </span>
        <span className="volumee"><span>Volume :</span> {volume}</span>
      </div>
      <div className="display">
      {bool && 
        <div className="square-c">
          <div className="side">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
          </form>
          </div>
          <div className="square"></div>
        </div>}

        {bool1 &&
        <div className="square-c">
          <div className="side-t">
          <form onSubmit={handleSubmit}>
            <input classname="base" type="text" value={value} placeholder="base" onChange={handleChange}/>
            <input className="height" value={value1} type="text" placeholder="height" onChange={handleChange1}/>
            <input className="sidea" value={value2} type="text" placeholder="side a" onChange={handleChange2}/>
            <input className="sideb" value={value3} type="text" placeholder="side b" onChange={handleChange3}/> 
            <input type="submit" className="sub" placeholder="=" />
          </form>
          </div>
          <div className="lline"></div>
          <div className="triangle"></div>
          
        </div>}
          {bool2 &&
          <div className="square-c">
          <div className="side-r">
          <form onSubmit={handleSubmit}>
            <input className="length" value={value} type="text" placeholder="length" onChange={handleChange}/>
            <input className="width" value={value1} type="text" placeholder="width" onChange={handleChange1}/>
            <input type="submit" className="sub" placeholder="="/>
          </form>
          </div>
          <div className="rectangle"></div>
        </div>}

            {bool3 &&
            <div className="square-c">
          <div className="side-c">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="radius" onChange={handleChange}/>
            <span className="radius"></span>
          </form>
          </div>
          <div className="circle"></div>
        </div>}

           {bool4 && <div className="square-c">
          <div className="side-cu">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
            
          </form>
          </div>
          <div className="cube"></div>
          <div className="cover"></div>
          <div className="cover1"></div>
          <div className="cover2"></div>
        </div>}

               {bool5 && <div className="square-c">
          <div className="side-pen">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
            
          </form>
          </div>
          <div className="pentagon">
            <img className="imgg1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7HloQ3oSvWb5kDkTygLka_3FZu39w1fsiw&usqp=CAU" alt="" />
          </div>
          
        </div>}

         {bool6 && <div className="square-c">
          <div className="side-hep">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
            
          </form>
          </div>
          <div className="heptagon">
          <img className="imgg" src="https://static.thenounproject.com/png/626850-200.png" alt="" />
          </div>
          
        </div>}

         {bool7 && <div className="square-c">
          <div className="side-hex">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
            
          </form>
          </div>
          <div className="hexagon">
            <img src="https://images.victorianplumbing.co.uk/images/KAI-BLA_prod.jpg" alt="" />
          </div>
         
        </div>}

         {bool8 && <div className="square-c">
          <div className="side-ov">
          <form onSubmit={handleSubmit}>
            <input className="min" type="text" value={value} placeholder="mi radius" onChange={handleChange}/>
             <input className="max" type="text" value={value1} placeholder="Ma radius" onChange={handleChange1}/>
              <input type="submit" className="sub" />
          </form>
          </div>
          <div className="oval">
            <img className="imgg1" src="https://dijf55il5e0d1.cloudfront.net/images/na/8/5/0/85014_1000.jpg" alt="" />

          </div>
          
        </div>}

         {bool9 && <div className="square-c">
          <div className="side-cy">
          <form onSubmit={handleSubmit}>
            <input className="rad" type="text" value={value} placeholder="radius" onChange={handleChange}/>
            <input className="hei" type="text" value={value1} placeholder="height" onChange={handleChange1}/>
            <input type="submit" className="sub" />
          </form>
          </div>
          <div className="cylinder">
            <img className="imgg1" src="https://www.merrypak.co.za/app/uploads/BC002.jpg" alt="" />

          </div>
      
        </div>}

         {bool10 && <div className="square-c">
          <div className="side-oct">
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="side" onChange={handleChange}/>
            
          </form>
          </div>
          <div className="octagon">
            <img className="imgg1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrGr6XA0Fv48wnAYizoUNT772JpEOmoUtVa2s3C50nllENCGsTYCx57dVG86SIbEShNI&usqp=CAU" alt="" />
            </div>
         
        </div>}

         {bool11 && <div className="square-c">
          <div className="side-co">
          <form onSubmit={handleSubmit}>
            <input className="rad" type="text" value={value} placeholder="radius" onChange={handleChange}/>
            <input className="hei" type="text" value={value1} placeholder="height" onChange={handleChange1}/>
            <input type="submit" className="sub"/>
            
          </form>
          </div>
          <div className="cone">
            <img className="imgg2" src="data:image/jpeg;base64,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" alt="" />
          </div>
          
        </div>}

      </div>
    </div>
  </section>
  );
}

export default App;