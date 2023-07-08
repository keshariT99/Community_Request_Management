import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {} from "@emotion/react"
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { NavLink } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';




const RequestDetails = () => {

    const [getRequest, setRequest] = useState({});
    const id = useParams().id;
    console.log(id);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    useEffect(() => {
        const fetchRequest = async () => {
            await axios.get(`http://localhost:8000/${id}`).
                then(res => res.data).then(data => setRequest(data.post));
        };
        fetchRequest();
    }, [id]);

    
    // PDF generation
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'req-data',
        onAfterPrint: () => alert('Print Successful')
    });

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear}`;


    return (
        
      <div className="col-md-10 mt-5 mx-auto">

<div className="report_btn mt-2 mb-2">
<div style={{width:'80%'}}>
                <a className="btn btn-success" style={{ marginLeft: '86%' }}  onClick={handlePrint}>Download</a>


                <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                    <h1 className='text-center my-3 border py-2'>Request Details</h1>
                
       
          <div className="column101">
            <div
              style={{
                marginLeft: "0px",
                marginTop: "0px",
                marginRight: "0px",
              }}>
              
                <div class="column2">
                  <div>
                    <br></br>
                    <h1> DIVISION NUMBER -  {getRequest.devisionID}</h1>
                    <br></br>
                    <h1 style={{fontSize:"38px", marginTop: "10px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Request Title -  {getRequest.title} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Brief Description -  {getRequest.description} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Requestor Name -  {getRequest.name} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Address -  {getRequest.address} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Division -  {getRequest.division} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       District -  {getRequest.district} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Province -  {getRequest.province} 
                      </c>{" "}
                    </h1>

                    <h1 style={{ fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Email Address -  {getRequest.email} 
                      </c>{" "}
                    </h1>

                    <h1 style={{fontSize:"38px", marginTop: "20px", marginBottom: "5px" }}>
                      <c style={{ fontWeight: "320" }}>
                       Contact Number -  {getRequest.phoneNo} 
                      </c>{" "}
                    </h1>
                    

                   
                  </div>
                  <br></br>
                  <br></br><br></br>

                  
                </div>
              </div>
              
            </div>
          </div>
          </div>
          </div>
          </div>
        
      
    

    )
}


export default RequestDetails;