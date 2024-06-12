import React from 'react'
import { useState,useEffect } from 'react';


function Survey() {
  const[data,setData]=useState([]);
    useEffect(()=>{fetch('http://localhost:8081/getAllSurveys').then(res=>res.json().then(val=>setData(val)))},[]);
  return (
    <div>
      <h2>Yallamanda Village Survey</h2>
      <p>
      ◉ At the heart of our community service project is the Yallamanda Village Survey. Our goal is to gather valuable insights from the residents of Yallamanda village regarding air pollution concerns and its impact on our daily lives.
      </p>

      <p>
      ◉  Air pollution can have severe effects on our health, environment, and overall quality of life. By participating in this survey, you are contributing to the identification of air pollution sources and the development of strategies to address them effectively.
      </p>

      <p>
      ◉  The survey includes a range of questions designed to capture different aspects of air pollution awareness, experiences, and suggestions. Your responses will remain anonymous and will play a significant role in shaping our efforts to create a healthier living environment for everyone in Yallamanda village.
      </p>

      {/* Placeholder survey questions and answers */}
         <h2>Questions Asked</h2>
        
         <div >
        <p>1. Do you believe air pollution is a major concern in your community? (True/False)</p>
        <p>2. Do you think people around you are aware of the health risks associated with air pollution? (True/False)</p>
        <p>3. In your opinion, do government regulations effectively contribute to reducing air pollution? (True/False)</p>
        <p>4. Do you observe individuals taking personal measures to reduce their contribution to air pollution in your community? (True/False)</p>
        <p>5. Would you say that people in your community are generally willing to participate in efforts to address air pollution? (True/False)</p>
        <p>6. Have you personally experienced any health issues that you suspect might be related to air pollution in your community? (True/False)</p>
        <p>7. Do you feel that raising awareness about air pollution would encourage more people to take action to reduce it? (True/False)</p>
      </div>
      
      <h2>Survey Results</h2>
      <table id="surveytable" >
       
          <tr>
            <th>ID</th>
            <th>Participant Name</th>
            <th>Solution 1</th>
            <th>Solution 2</th>
            <th>Solution 3</th>
            <th>Solution 4</th>
            <th>Solution 5</th>
            <th>Solution 6</th>
            <th>Solution 7</th>
          </tr>
     
        <tbody>
          {data.map(surveyInfo => (
            <tr key={surveyInfo.id}>
              <td>{surveyInfo.id}</td>
              <td>{surveyInfo.participantName}</td>
              <td>{surveyInfo.sol1}</td>
              <td>{surveyInfo.sol2}</td>
              <td>{surveyInfo.sol3}</td>
              <td>{surveyInfo.sol4}</td>
              <td>{surveyInfo.sol5}</td>
              <td>{surveyInfo.sol6}</td>
              <td>{surveyInfo.sol7}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
      ◉ We want to express our heartfelt gratitude for your participation. Your input will make a difference, and together, we can take meaningful steps towards mitigating air pollution and enhancing the well-being of our community members.
      </p>
    </div>
  )
}

export default Survey