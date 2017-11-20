import React from "react";
import Ticket from "./Ticket"
function TicketList(props){
  return (
    <Ticket
      location="3a"
      names="Bob and Tim"
      issue="The clock isn't updating"/>
  );
}

export default TicketList;
