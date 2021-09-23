import React from 'react';
import './style.valve.css';
import {DataGrid}  from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
// import { Tag } from 'antd';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';

export default function Valve() {
   const history = useHistory();

    // const columns = [
    // { field: 'id', headerName: 'ID', width: 120 },
    // {
    //     field: 'lastName',
    //     headerName: 'User',
    //     width: 280,
    //     renderCell: (params)=>{
    //         return(
    //             <div className="userListUser">
    //                 <Avatar className="avatar-userList" children={<img src={`${url}/resource/${params.row.avatar}`} alt={params.row.fsname} className="avatar"/>} />  {params.row.fsname} { params.row.lsname }
    //             </div>
    //         )
    //     }
    // },
    // {
    //     field: 'id_',
    //     headerName: 'Matricule',
    //     width: 180,
    
    // },
    // {
    //     field: 'phone',
    //     headerName: 'Phone',
    //     width: 200,
    
    // },
    // {
    //     field: 'solde',
    //     headerName: 'Solde',
    //     width: 200,
    //     renderCell: (params) =>{
    //     return(
    //         <div> {params.row.solde}FC </div>
    //     )
    //     }
    // },
    // {
    //     field: 'role',
    //     headerName: 'Role',
    //     width: 200,
    //     renderCell: (params) =>{
    //     return(
    //         <div> {params.row.role === 0 ? "Agent" : params.row.role === 1 ? "Admin" : params.row.role === 2 ? "Chauffeur" : "Others"}</div>
    //     )
    //     }
    //     // editable: true,
    // },
    // {
    //     field: 'datastatus',
    //     headerName: 'Etat',
    //     width: 180,
    //     renderCell: (params)=>{
    //         return (
    //         <div>{ params.row.datastatus === 1 ? <Tag color='success'>Activé</Tag> : params.row.datastatus === 0 ? <Tag color='red'>Non Activé</Tag>  : null }</div>
        
    //         )
    //     }
    // },
    
    // ];
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
        },
        {
          field: 'promotion',
          headerName: 'Promotion',
          width: 160,
        },
        {
          field: 'session',
          headerName: 'Session',
          width: 220,
          editable: true,
        },
        {
          field: 'annee',
          headerName: 'Année',
          width: 160,
        },
        {
            field: 'distinction',
            headerName: 'Distinction',
            width: 180,
        },
        {
            field: 'satisfaction',
            headerName: 'Satisfaction',
            width: 180,
        },
        {
            field: 'echoue',
            headerName: 'Echoués',
            width: 180,
        },
        {
            field: 'datepublication',
            headerName: 'Date',
            width: 140,
        },
      ];
    const userData =[
        
        { id: 1, action: 'Voir la grille' ,promotion: '6 H.T.S',session: 'Premiere session', annee:'2019-2020',distinction: '0 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 2, action: 'Voir la grille' ,promotion: '5 H.T.S',session: 'Premiere session', annee:'2019-2020',distinction: '0 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 3, action: 'Voir la grille' ,promotion: '4 H.T.S',session: 'Premiere session', annee:'2019-2020',distinction: '0 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 4, action: 'Voir la grille' ,promotion: '3 M.P',session: 'Premiere session', annee:'2019-2020',distinction: '2 sur 30 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 5, action: 'Voir la grille' ,promotion: '5 H.P',session: 'Premiere session', annee:'2019-2020',distinction: '4 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 6, action: 'Voir la grille' ,promotion: '2 C.O',session: 'Premiere session', annee:'2019-2020',distinction: '5 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        { id: 7, action: 'Voir la grille' ,promotion: '1 C.O',session: 'Premiere session', annee:'2019-2020',distinction: '0 sur 20 (0,0%)', satisfaction: '15 sur 20 (85%)', echoue: '5 sur 20 (15%)', datepublication:'2019-2020' },
        
    ]

    return (
        <>
            <div className="hero">
                <div className="hero-info">
                    <h3 className="font-weight-bold text-white text-center">NDAHURA-GOMA, Résultats scolaire</h3>
                </div>
            </div>

            <div className="userList py-5 text-center">
                <div className="dataGrid">
                <DataGrid
                    rows={userData}
                    columns={columns}
                    pageSize={10}
                    autoPageSize={false}
                    autoHeight={true}
                    checkboxSelection
                    // loading={loading}
                    onRowClick={(index, _) => history.push(`/grille-detail/${index.row.id}`)}
                />
            </div>
        </div>
        </>
    )
}
