import React from 'react';
import './style.valve.css';
import { DataGrid } from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
import { Tag } from 'antd';
import InputBase from '@material-ui/core/InputBase';

export default function Valve() {
   

    const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
        field: 'user',
        headerName: 'User',
        width: 280,
        renderCell: (params)=>{
            return(
                <div className="userListUser">
                    <Avatar className="avatar-userList" children={<img src={`${url}/resource/${params.row.avatar}`} alt={params.row.fsname} className="avatar"/>} />  {params.row.fsname} { params.row.lsname }
                </div>
            )
        }
    },
    {
        field: 'id_',
        headerName: 'Matricule',
        width: 180,
    
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 200,
    
    },
    {
        field: 'solde',
        headerName: 'Solde',
        width: 200,
        renderCell: (params) =>{
        return(
            <div> {params.row.solde}FC </div>
        )
        }
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 200,
        renderCell: (params) =>{
        return(
            <div> {params.row.role === 0 ? "Agent" : params.row.role === 1 ? "Admin" : params.row.role === 2 ? "Chauffeur" : "Others"}</div>
        )
        }
        // editable: true,
    },
    {
        field: 'datastatus',
        headerName: 'Etat',
        width: 180,
        renderCell: (params)=>{
            return (
            <div>{ params.row.datastatus === 1 ? <Tag color='success'>Activé</Tag> : params.row.datastatus === 0 ? <Tag color='red'>Non Activé</Tag>  : null }</div>
        
            )
        }
    },
    
    ];
    const userData =[
        
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        
    ]

    return (
        <>
            <div className="hero">
                <div className="hero-info">
                    <h3 className="font-weight-bold text-white text-center">NDAHURA-GOMA, Résultats scolaire</h3>
                </div>
            </div>

            <div className="userList">
                <div>
                <DataGrid
                    rows={userData}
                    columns={columns}
                    pageSize={10}
                    autoPageSize={false}
                    autoHeight={true}
                    checkboxSelection
                    // loading={loading}
                    // onRowClick={(index, _) => history.push(`/user/${index.row.id}`)}
                />
            </div>
        </div>
        </>
    )
}
