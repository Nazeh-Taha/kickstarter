import React from 'react';

//import Slider from 'infinite-react-carousel';
import './SliderPart.css'
class SliderPart extends React.Component {
  
  constructor(props) {
    super(props);

    
  }
  render() {
    var Style = "width: ";
    var ber = "%";

    // const settings =  {
    //   arrows: false,
    //   centerPadding: 10,
    //   slidesToShow: 5
    // };
    return (
      <div>
        
        <div className="slider-section"> 
        <div>
          <p className="slider-title">TAKING OFF</p>
        </div> 
        <div className="slider">
          {this.props.article.map(item => {      
          return <div className="slider-unit-2" key={item._id}>
            <div><a href={"https://proxy-kikstarter.herokuapp.com/?id="+item.projectId}><img alt="sorry" src={item.projectImg}></img></a></div>
            <div className="marko-div" divStyle={Style+ item.rate+ber}></div>
            <div>
            <a href={"https://proxy-kikstarter.herokuapp.com/?id="+item.projectId}><h3>{item.projectName}</h3></a>
            </div>
            <div>
            <a href={"https://proxy-kikstarter.herokuapp.com/?id="+item.projectId}><p>{item.minorDescription}</p></a>
            </div>
            <div>
            <div className="by-div">
              <span>BY </span><a href="/">{item.owner}</a>
             </div>
            </div>
          </div>
           })}
          </div>        
        </div>
      </div>
    );
  }
}

export default SliderPart;