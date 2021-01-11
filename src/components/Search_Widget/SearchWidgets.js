import React, { Component } from 'react';
import './SearchWidgets.css';

 class SearchWidgets extends Component {
    render(){
        return (
            <div className="SearchWidgetWarp">
               <div className="col-md-6 col-sm-12 ">
                   <div className="search-bar">
                   <ul className="list-inline tab-bar hidden-xs">
                        <li className="active"><a href="#search-flight" aria-controls="search-flight" role="tab" data-toggle="tab">
                        <i className="fa fa-plane plan-icon" aria-hidden="true"></i>FLIGHTS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="" id="search-flight">
                            <div className="">
                            <ul className="list-inline marl10 mart10">
                                <li>
                                    <p className="trip-type one-ways clor-light">ONE WAY</p>
                                </li>
                                <li>
                                    <div className="Switch Switch-flight Round Off">
                                        <div className="Toggle"></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="trip-type round-trip">ROUND TRIP</p>
                                </li>
                            </ul>
                            <div className="row">
                                    <div className="col-sm-5 col-xs-5 location-box">
                                        <div className="custom_input ">
                                            <label>Origin</label>
                                            <div class="location_wrapper  ">
                                                
                                                <input className="main_location form-control font37  ui-autocomplete-input" placeholder="Airport" type="text"/>
                                                <input id="subLocOrigin" className="sub_location form-control" style={{display: "none"}} value="" placeholder="City name" readonly="true" onfocus="this.blur()"/>
                                                <span className="clear-input" style={{display: "none"}}>X</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-xs-2 padl5i5 padl-tab"></div>
                                    <div className="col-sm-5 col-xs-5 location-box">
                                        <div className="custom_input ">
                                            <label>Destination</label>
                                            <div className="location_wrapper  ">
                                                
                                                <input className="main_location form-control font37 ui-autocomplete-input"  id="Destination" name="Destination"placeholder="Airport" type="text" />
                                                <input id="subLocDestination" className="sub_location form-control"  value="" readonly="true" placeholder="City name" onfocus="this.blur()" />
                                                <span className="clear-input-des" style={{display: "none"}}>X</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-5 col-xs-5 location-box">
                                        <div className="custom_input ">
                                            <label>Origin</label>
                                            <div class="location_wrapper  ">
                                                
                                                <input className="main_location form-control font37  ui-autocomplete-input" placeholder="Airport" type="text"/>
                                                <input id="subLocOrigin" className="sub_location form-control" style={{display: "none"}} value="" placeholder="City name" readonly="true" onfocus="this.blur()"/>
                                                <span className="clear-input" style={{display: "none"}}>X</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-xs-2 padl5i5 padl-tab"></div>
                                    <div className="col-sm-5 col-xs-5 location-box">
                                        <div className="custom_input ">
                                            <label>Destination</label>
                                            <div className="location_wrapper  ">
                                                
                                                <input className="main_location form-control font37 ui-autocomplete-input"  id="Destination" name="Destination"placeholder="Airport" type="text" />
                                                <input id="subLocDestination" className="sub_location form-control" style={{display: "none"}} value="" readonly="true" placeholder="City name" onfocus="this.blur()" />
                                                <span className="clear-input-des" style={{display: "none"}}>X</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    

                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default SearchWidgets;