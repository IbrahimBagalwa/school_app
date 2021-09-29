import { Avatar } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getLatestUsers } from '../../redux/actions/userAction';
import './widgetLg.component.css';


export default function WidgetLg(props) {
    // const {data, loading} = useSelector(({users: {latest}})=>latest);
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     getLatestUsers(dispatch)
    
    // }, [dispatch])
    
   
       
    return(
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Top 5 d'Agents les plus Monnayer </h3>
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
                    data.map((user)=>( */}
                    <>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                image
                                {/* <Avatar className="avatar-userList" children={<img src={`https://ms-backapp.herokuapp.com/resource/${user.avatar}`}className="avatar"/>} /> {user.fsname} { user.lsname } */}
                            </td>
                            <td className="widgetDate">user</td> 
                            <td className="widgetAmount">sole</td> 
                            <td className="widgetStatus">phone</td> 
                        </tr>  
                    </>
                {/* //     ))
                // } */}
            </tbody>   
          </table>
        </div>
    )

}
