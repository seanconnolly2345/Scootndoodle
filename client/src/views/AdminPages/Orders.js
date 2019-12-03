import React from 'react'
import TableViewer from'../../components/Admin/OrderTable.js';
import {Row, Button} from 'react-bootstrap'
import './orders.css';
import Navigation from '../../components/Navigation/Navigation';
import Popup from "reactjs-popup";

const PopupExample = () => (
    <Popup  position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );

export const Orders = () => (
    <React.Fragment> 
       

        <body>
        <TableViewer /> 
        </body>
        <Button variant="primary" type="submit" >
                Submit</Button>
       
        
        
    </React.Fragment>
)