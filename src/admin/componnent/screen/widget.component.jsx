import { Visibility } from '@material-ui/icons';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './widgetSm.component.css';
import { Avatar } from '@material-ui/core';
// import { getHighSold } from '../../redux/actions/clientAction';


export default function WidgetSm() {

    // const {data, loading} = useSelector(({clients: {clientHigh}})=>clientHigh);
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //    getHighSold(dispatch)
    
    // }, [dispatch])

    return (
        <div className="widgetSm">
          <h3 className="widgetLgTitle">Top 5 de Clients les plus Monnayer </h3>
          <table className="widgetLgTable">
            <thead>
                <tr className="widgetLgTr">
                  <th className="widgetLgTh">Customer</th>
                  <th className="widgetLgTh">Date created</th>
                  <th className="widgetLgTh">Amount</th>
                  <th className="widgetLgTh">Phone</th>
              </tr>
            </thead>
            <tbody>
                {/* {
                    data.map((client)=>( */}

                    <>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                {/* <Avatar className="avatar-userList" children={<img src={`https://ms-backapp.herokuapp.com/resource/${client.avatar}`}className="avatar"/>} /> {client.fsname} { client.lsname } */}
                            </td>
                            <td className="widgetDate">Date</td> 
                            <td className="widgetAmount">solde</td> 
                            <td className="widgetStatus">phone</td> 
                        </tr>  
                    </>
                    {/* ))
                } */}
            </tbody>   
          </table>
        </div>
    )
}
