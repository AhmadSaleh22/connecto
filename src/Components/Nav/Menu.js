import React from 'react';
import {ListMenu} from "./MenuStyle";

export default function Menu(){
    return(
        <>
            <ListMenu>
                <li>Business insights</li>
                <li>User</li>
                <li>Accounts</li>
                <li>Orders</li>
                <li>Menu editor</li>
                <li style={{ color:"#15BBF9", fontWeight:"bold" }}>Reports</li>
                <li>Setting</li>
            </ListMenu>
            <br/>
            <hr style={{width:"80px", textAlign:"right", marginLeft:"1020px",border:"none", backgroundColor:"#15BBF9", height:"5px"}}/>
            <hr style={{fontWeight:"bold"}}/>
        </>
    );
}