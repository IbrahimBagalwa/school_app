import React, { useEffect, useState } from 'react'
import { CalendarToday, ContactsOutlined, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useHistory, useParams } from 'react-router-dom';
// import { Avatar } from '@material-ui/core';
// import axios from 'axios';
import { Switch } from 'antd';
import { DataGrid } from '@material-ui/data-grid';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { operationClients } from '../../redux/actions/operationAction';

const url = "http://localhost:8000"

export default function Cours() {
    // const {data} = useSelector(({operations: {operationClient}})=>operationClient);

    // const dispatch = useDispatch();
    // const [ client, setClient ] = useState({});
    // const [ actif, setActif ] = useState(client.datastatus);
    // const [ loading, setLoading ] = useState(true);
    // const [ loadingActif, setLoadingActif ] = useState();
    // const params = useParams();
    // const history = useHistory();
    // const fetchClient = async() =>{
    //     try {
    //         const res = await axios.get(`${url}/api/client/cl/${params.clientId}`, {
    //             headers: {
    //                 'authtoken': localStorage.getItem('authtoken')
    //             }
    //         });
    //         if(res.status === 200){
    //             setLoading(false)
    //             setClient(res.data.data);
    //             console.log(client);
    //         }
    //     } catch (error) {
    //         setLoading(false)
    //     }
    // };
    // useEffect(()=>{
    //     let param = params.clientId
    //     operationClients(param)(dispatch)
    // }, [dispatch])



    // useEffect(() =>{
    //     fetchClient();
    // }, [ params.clientId ]);

    // const changeStatus = async(check) =>{
    //     setLoadingActif(true);
    //     try {
    //         const res = await axios.put(`${url}/api/client/updateCl/${params.clientId}`, { datastatus: check ? 1: 0 }, {
    //             headers: {
    //                 'authtoken': localStorage.getItem('authtoken')
    //             }
    //         });
    //         if(res.status === 200){
    //             setLoadingActif(false)
    //             fetchClient();
    //         }
    //     } catch (error) {
    //         setLoadingActif(false)
    //         const res = error.response;
    //         if(res && res.status === 401){
    //             alert(res.data.error)
    //         }
    //     }
    // };
    const columns = [
        { 
            field: 'id', 
            headerName: 'Id\u00a0Operation', 
            width: 170,
        },
        {
            field: 'montant',
            headerName: 'Montant\u00a0Transaction',
            minWidth: 200,
        },
        {
            field: 'createdon',
            headerName: 'Date\u00a0Transaction',
            width: 300,
        },
        {
            field: 'validatedeon',
            headerName: 'Date\u00a0Validation',
            minWidth: 250,
        },
      ];
    const data =[
        {id:1,montant:'120',createdon:'2929202',validatedeon:'kdjakdjd' }
    ]
    return (
    <>
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTile">Client</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        image
                         {/* <Avatar className="avatar-userList" children={<img src={`${url}/resource/${client.avatar}`} alt={client.fsname} className="avatar"/>} />  {client.fsname} { client.lsname } */}
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Details de cours</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">nom</span>
                        </div>
                        <div className="userShowInfo">
                            <ContactsOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">tutul</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">date</span>
                        </div>
                        {/* <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">{client.phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">{client.email}</span>
                        </div>
                        
                        <div className="userShowInfo">
                            <MonetizationOnIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">{client.solde}</span>
                        </div>
                        <div className="userInfo">
                            <div>Actif</div> 
                            <Switch loading={loadingActif} checkedChildren="actif" onChange={check => changeStatus(check)} unCheckedChildren="non actif" checked={client.datastatus} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
         <div>
         <DataGrid
           rows={data}
           columns={columns}
           pageSize={10}
           autoPageSize={false}
           autoHeight={true}
        //    loading={loading}
         />
       </div>
    </>
    )
}
